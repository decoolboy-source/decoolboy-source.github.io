import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const STATIC = ['/', '/gioi-thieu/', '/chuyen-mon/', '/du-an/', '/cong-cu/', '/bai-viet/', '/lien-he/', '/chinh-sach/'];

// Tự sinh sitemap.xml để giữ astro.config.mjs chỉ có `site` (CLAUDE.md mục 2).
export const GET: APIRoute = async ({ site }) => {
  const projects = await getCollection('du-an');
  const posts = await getCollection('bai-viet', ({ data }) => !data.nhap);
  const urls = [
    ...STATIC.map((p) => ({ loc: p })),
    ...projects.map((p) => ({ loc: `/du-an/${p.id}/` })),
    ...posts.map((p) => ({
      loc: `/bai-viet/${p.id}/`,
      lastmod: (p.data.ngayCapNhat ?? p.data.ngayDang).toISOString().slice(0, 10),
    })),
  ];
  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls
      .map((u) => {
        const loc = new URL(u.loc, site).href;
        return `  <url><loc>${loc}</loc>${'lastmod' in u ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`;
      })
      .join('\n') +
    '\n</urlset>\n';
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
