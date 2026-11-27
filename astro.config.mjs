// @ts-check
import { defineConfig } from 'astro/config';

// Site gốc của tài khoản: không đặt `base` (CLAUDE.md mục 2).
export default defineConfig({
  site: 'https://decoolboy-source.github.io',
  // 3 trang giới thiệu cũ (trước khi tách 14 app <HÃNG>select) chuyển về danh mục công cụ.
  // Anh Đệ duyệt ngày 27/11/2026.
  redirects: {
    '/cong-cu/tra-cuu-may-nen': '/cong-cu/',
    '/cong-cu/tra-cuu-thiet-bi-giai-nhiet': '/cong-cu/',
    '/cong-cu/tra-cuu-thiet-bi-bay-hoi': '/cong-cu/',
  },
});
