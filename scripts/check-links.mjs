// Kiểm tra dist/ sau build:
// 1. Link nội bộ (/...) phải trỏ tới file có thật trong dist/, trừ link sang repo công cụ ở bảng mục 6 CLAUDE.md.
// 2. Link công cụ phải khớp đúng chữ hoa/thường với bảng đó.
// 3. Không có thư mục gốc trùng tên repo công cụ (sẽ che đường dẫn của repo).
// 4. Không đăng ký service worker, không dùng localStorage/IndexedDB/Cache Storage (mục 3.1).
// 5. Không có email, số điện thoại dạng văn bản (mục 3.2).
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');
if (!existsSync(dist)) {
  console.error('Chưa có dist/. Chạy `npm run build` trước.');
  process.exit(1);
}

// Đọc danh sách repo từ bảng mục 6 của CLAUDE.md: các dòng "| Repo | /Repo/ | ... |".
const claude = readFileSync(join(root, 'CLAUDE.md'), 'utf8');
const repoPaths = new Set(
  [...claude.matchAll(/^\|\s*([A-Za-z0-9._-]+)\s*\|\s*\/([A-Za-z0-9._-]+)\/\s*\|/gm)]
    .filter((m) => m[1] === m[2])
    .map((m) => m[2]),
);
if (repoPaths.size === 0) {
  console.error('Không đọc được bảng repo ở mục 6 CLAUDE.md.');
  process.exit(1);
}
const repoLower = new Map([...repoPaths].map((r) => [r.toLowerCase(), r]));

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const files = walk(dist);
const errors = [];
const rel = (f) => relative(dist, f).split(sep).join('/');

// 3. Thư mục gốc trùng tên repo (so không phân biệt hoa thường để an toàn).
for (const name of readdirSync(dist)) {
  if (statSync(join(dist, name)).isDirectory() && repoLower.has(name.toLowerCase())) {
    errors.push(`dist/${name}/ trùng tên repo /${repoLower.get(name.toLowerCase())}/`);
  }
}

function targetExists(pathname) {
  const clean = decodeURI(pathname.replace(/[?#].*$/, ''));
  const p = join(dist, clean);
  if (clean.endsWith('/')) return existsSync(join(p, 'index.html'));
  return existsSync(p) || existsSync(join(p, 'index.html'));
}

const forbiddenCode = [
  [/navigator\.serviceWorker|serviceWorker\.register/, 'đăng ký service worker'],
  [/\blocalStorage\b|\bsessionStorage\b|\bindexedDB\b|\bcaches\.(open|keys|delete|match)/, 'dùng bộ nhớ trình duyệt'],
];
const emailRe = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
const phoneRe = /(?<![\d.])(?:\+84|0)(?:[\s.]?\d){9,10}(?![\d.])/;

let linkCount = 0;
for (const f of files) {
  if (!/\.(html|js|css|xml|txt)$/.test(f)) continue;
  const text = readFileSync(f, 'utf8');

  for (const [re, what] of forbiddenCode) {
    if (re.test(text)) errors.push(`${rel(f)}: ${what} (CLAUDE.md 3.1)`);
  }
  // Bỏ phần <head> (meta, canonical) khi dò email/SĐT để tránh nhầm.
  const visible = text.replace(/<head>[\s\S]*?<\/head>/, '').replace(/<[^>]+>/g, ' ');
  const em = visible.match(emailRe);
  if (em) errors.push(`${rel(f)}: có email dạng văn bản "${em[0]}" (CLAUDE.md 3.2)`);
  const ph = visible.match(phoneRe);
  if (ph) errors.push(`${rel(f)}: có thể là số điện thoại "${ph[0].trim()}" (CLAUDE.md 3.2)`);

  if (!f.endsWith('.html')) continue;
  for (const m of text.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const url = m[1];
    if (!url.startsWith('/') || url.startsWith('//')) continue;
    linkCount++;
    const first = url.split('/')[1];
    if (repoLower.has(first.toLowerCase())) {
      const correct = repoLower.get(first.toLowerCase());
      if (first !== correct) errors.push(`${rel(f)}: link ${url} sai chữ hoa/thường, phải là /${correct}/`);
      else if (!url.startsWith(`/${correct}/`)) errors.push(`${rel(f)}: link ${url} thiếu dấu / cuối`);
      continue;
    }
    if (!targetExists(url)) errors.push(`${rel(f)}: link gãy ${url}`);
  }
}

if (errors.length) {
  console.error(`\n✗ check-links: ${errors.length} lỗi`);
  for (const e of errors) console.error('  - ' + e);
  process.exit(1);
}
console.log(`✓ check-links: ${files.length} file, ${linkCount} link nội bộ, ${repoPaths.size} repo công cụ – không lỗi.`);
