// Dữ liệu có cấu trúc schema.org (JSON-LD) để công cụ tìm kiếm hiểu đúng tên, chức danh, bài viết.
// Chỉ là dữ liệu mô tả (<script type="application/ld+json">), trình duyệt không chạy.
// Không đưa email, số điện thoại (CLAUDE.md mục 3.2).
import { SITE } from './site';

export function person(site: URL) {
  return {
    '@type': 'Person',
    '@id': new URL('/#person', site).href,
    name: SITE.name,
    url: new URL('/gioi-thieu/', site).href,
    image: new URL('/og.png', site).href,
    jobTitle: SITE.role,
    worksFor: { '@type': 'Organization', name: SITE.company },
    knowsAbout: ['Lạnh công nghiệp', 'Kho lạnh', 'Cấp đông IQF', 'HVAC', 'MEP', 'BIM', 'Hệ thống lạnh NH3'],
    sameAs: [new URL('/namecard/', site).href],
  };
}

export function website(site: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': new URL('/#website', site).href,
    name: SITE.name,
    url: new URL('/', site).href,
    inLanguage: 'vi',
    description: SITE.description,
    publisher: { '@id': new URL('/#person', site).href },
  };
}

export function personDoc(site: URL) {
  return { '@context': 'https://schema.org', ...person(site) };
}

export function breadcrumb(site: URL, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: new URL(it.path, site).href,
    })),
  };
}
