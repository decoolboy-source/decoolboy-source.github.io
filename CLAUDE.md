# CLAUDE.md — Website cá nhân Dương Quốc Đệ

Repo: `decoolboy-source/decoolboy-source.github.io`
Địa chỉ hiện tại: https://decoolboy-source.github.io/ (chưa có tên miền riêng)
Chủ sở hữu: Dương Quốc Đệ — kỹ sư lạnh công nghiệp, kho lạnh – cấp đông, HVAC, MEP, BIM; Phó Giám đốc Kinh doanh, Công ty TNHH Kỹ thuật và Thương mại Dịch vụ NASA.

## 1. Mục tiêu site

1. Hồ sơ chuyên gia, tạo uy tín với chủ đầu tư và đối tác.
2. Giới thiệu và dẫn link tới các công cụ PWA tự phát triển (mỗi công cụ là một repo riêng).

Ngôn ngữ: chỉ tiếng Việt (`<html lang="vi">`). Cấu trúc thư mục vẫn để chỗ cho `/en/` sau này, nhưng chưa làm.

## 2. Công nghệ

- Astro, chế độ xuất tĩnh (`output: 'static'`), nội dung bài viết và dự án bằng Markdown (content collections).
- Deploy bằng GitHub Actions theo hướng dẫn chính thức của Astro cho GitHub Pages.
- `astro.config.mjs`: chỉ đặt `site: 'https://decoolboy-source.github.io'`, **không đặt `base`** (đây là site gốc của tài khoản).
- Mặc định không gửi JavaScript tới trình duyệt. Chỉ thêm JS khi thật cần và ghi lý do trong commit.
- Không dùng framework UI (React, Vue...) nếu không có yêu cầu.

## 3. Quy tắc bắt buộc

### 3.1 Không xung đột với các PWA
Namecard và các PWA nằm ở repo riêng, chạy chung origin `decoolboy-source.github.io` tại `/namecard/`, `/<ten-repo>/`.

- **Không đăng ký service worker ở phạm vi `/`.** Site chính không cần offline.
- Không tạo trang hoặc thư mục trùng tên với repo PWA/namecard (xem danh sách mục 6), vì sẽ che mất đường dẫn của repo đó.
- Không ghi, đọc hoặc xóa Cache Storage, localStorage, IndexedDB trên site chính. Nếu bắt buộc phải dùng localStorage, khóa phải có tiền tố `site:`.
- Link tới công cụ dùng đường dẫn tuyệt đối từ gốc: `/<ten-repo>/`.

### 3.2 Nội dung công khai
- Dự án: chỉ nêu loại hình, vùng (ví dụ "Đồng bằng sông Cửu Long", không nêu tỉnh nếu có thể nhận diện), năm, số liệu kèm đơn vị SI (m³, kW, °C, tấn/mẻ), môi chất, vai trò. **Không nêu tên chủ đầu tư, logo, hình ảnh có thể nhận diện công trình.**
- Làm tròn số liệu đến mức không định danh được công trình cụ thể.
- Không đăng email, số điện thoại dưới dạng văn bản. Trang liên hệ dẫn sang `/namecard/`.
- Không đăng lại hoặc tổng hợp tin từ báo chí (Điều 24 Nghị định 147/2024/NĐ-CP). Chỉ đăng nội dung tự viết.
- Không có nội dung khuyến nghị đầu tư tài chính.
- Không bán hàng, thanh toán, đăng nhập trên site (điều khoản GitHub Pages).
- Repo công khai: không commit bản vẽ, BOQ, báo giá, file Excel nội bộ, ảnh chụp tài liệu NASA, kể cả tạm thời.

### 3.3 Kỹ thuật – nội dung
- Hệ số, công thức kỹ thuật trong bài viết phải ghi căn cứ (TCVN/QCVN/ASHRAE/ASME). Không tự đặt hệ số.
- Trang công cụ có miễn trừ: kết quả chỉ để tham khảo sơ bộ, không thay thế thiết kế có thẩm tra.
- Slug URL không dấu, chữ thường, nối bằng gạch ngang. Tiêu đề và mô tả tiếng Việt có dấu.

### 3.4 Chuẩn code ("GitHub + Executable Ready")
- Có `package.json`, `.gitignore`, `README.md` (mô tả, cài đặt, chạy, ví dụ kết quả).
- Clone về chạy được ngay: `npm install` → `npm run dev` → `npm run build`.
- Comment chỉ cho logic phức tạp.
- Sửa code thì cập nhật README và file này nếu quy tắc thay đổi.
- Sửa thẳng vào file hiện có, không tạo bản sao `_v2`, `_new`, `_old`.

## 4. Cách làm việc của Claude trong repo này
- Tự làm: sửa file, cài package, chạy build, chạy thử local.
- **Hỏi trước:** xóa file, đổi cấu hình deploy (`.github/workflows/`), đổi `astro.config.mjs`, đổi cấu trúc URL đã công bố, push lên nhánh `main`.
- Trước khi báo xong: chạy `npm run build` không lỗi, kiểm tra không có link gãy, báo rõ đã thay đổi gì. (`npm run build` đã gồm `scripts/check-links.mjs`: link gãy, sai hoa/thường tên repo, service worker/localStorage, email/SĐT dạng văn bản.)
- Trả lời bằng tiếng Việt, ngắn gọn, kết luận trước.

## 5. Sơ đồ trang

```
/                 Trang chủ
/gioi-thieu/      Giới thiệu
/chuyen-mon/      Lĩnh vực chuyên môn
/du-an/           Dự án tiêu biểu  -> /du-an/<slug>/
/cong-cu/         Công cụ tự phát triển -> link /<ten-repo>/
/bai-viet/        Bài viết kỹ thuật -> /bai-viet/<slug>/
/lien-he/         Liên hệ (dẫn sang /namecard/)
/chinh-sach/      Miễn trừ trách nhiệm & quyền riêng tư
/404              Trang lỗi
sitemap.xml, robots.txt
```

## 6. Repo đã có trên cùng origin (không được trùng tên)

| Repo | Đường dẫn | Ghi chú |
|---|---|---|
| namecard | /namecard/ | Namecard điện tử |
| CSHLCaculator | /CSHLCaculator/ | Cold Storage Heat Load Calculator (CSHL) |
| ACHLCaculation | /ACHLCaculation/ | MultiHVAC Calculator (Cleanroom / Data Center / Phòng điện) |
| MCselect | /MCselect/ | Tra cứu máy nén lạnh đa hãng (có Mycom) |
| ECselect | /ECselect/ | Tra cứu dàn ngưng bay hơi & tháp giải nhiệt (WXR, EVAPCO…) |
| EEselect | /EEselect/ | Tra cứu thiết bị bay hơi: máy đá vảy, chiller màng rơi, PHE |
| IrsWorkflows | /IrsWorkflows/ | Suite thiết kế kho lạnh NH3 (Hub Shell, 4 công cụ) |
| Toolkits | /Toolkits/ | AppThermoEngine |

Cập nhật ngày 2026-11-14 từ `gh repo list decoolboy-source`; cả 8 repo đều bật GitHub Pages.
Đường dẫn phân biệt chữ hoa/thường: link phải ghi đúng tên repo (ví dụ `/CSHLCaculator/`, không phải `/cshlcaculator/`).
Khi tạo repo công cụ mới, thêm một dòng vào bảng này.

## 7. Khi gắn tên miền riêng (sau này)
1. Thêm tên miền ở Settings > Pages **trước**, rồi mới tạo bản ghi DNS.
2. Xác minh tên miền ở cấp tài khoản (bản ghi TXT `_github-pages-challenge-decoolboy-source`).
3. DNS: 4 bản ghi A 185.199.108–111.153, 4 bản ghi AAAA 2606:50c0:8000–8003::153, CNAME `www` → `decoolboy-source.github.io`.
4. Bật Enforce HTTPS.
5. Sửa `site` trong `astro.config.mjs` thành tên miền mới. Đây là thay đổi code duy nhất cần làm.

Lưu ý: đổi tên miền là đổi origin. Người dùng PWA phải cài lại và dữ liệu lưu cục bộ ở địa chỉ cũ không tự chuyển. Các PWA cần có chức năng Xuất/Nhập JSON trước thời điểm này.
