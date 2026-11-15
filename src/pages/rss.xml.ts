import type { APIRoute } from 'astro';
import { SITE } from '../data/site';
import { publishedPosts } from '../data/posts';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Nguồn RSS 2.0 cho bài viết; tự sinh để không cần thêm thư viện.
export const GET: APIRoute = async ({ site }) => {
  const posts = await publishedPosts();
  const home = new URL('/', site).href;
  const items = posts
    .map((p) => {
      const url = new URL(`/bai-viet/${p.id}/`, site).href;
      return [
        '    <item>',
        `      <title>${esc(p.data.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <description>${esc(p.data.description)}</description>`,
        `      <pubDate>${p.data.ngayDang.toUTCString()}</pubDate>`,
        `      <category>${p.data.loai === 'ky-thuat' ? 'Kỹ thuật' : 'Giới thiệu'}</category>`,
        '    </item>',
      ].join('\n');
    })
    .join('\n');
  const latest = posts[0] ? (posts[0].data.ngayCapNhat ?? posts[0].data.ngayDang) : new Date(0);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc('Bài viết – ' + SITE.name)}</title>
    <link>${home}</link>
    <atom:link href="${new URL('/rss.xml', site).href}" rel="self" type="application/rss+xml" />
    <description>${esc(SITE.description)}</description>
    <language>vi</language>
    <lastBuildDate>${latest.toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
