# decoolboy-source.github.io

Website cá nhân của Dương Quốc Đệ – kỹ sư lạnh công nghiệp, kho lạnh – cấp đông, HVAC, MEP, BIM.
Hồ sơ chuyên gia, dự án tiêu biểu, bài viết kỹ thuật, và lối vào các công cụ PWA tự phát triển
(mỗi công cụ là một repo riêng, chạy tại `/<ten-repo>/` trên cùng origin).

- Địa chỉ: https://decoolboy-source.github.io/
- Công nghệ: [Astro](https://astro.build) 7, xuất tĩnh, nội dung Markdown, không gửi JavaScript tới trình duyệt.
- Quy tắc nội dung và kỹ thuật: xem [CLAUDE.md](CLAUDE.md).

## Cài đặt và chạy

Yêu cầu Node.js 22 trở lên (khuyến nghị 24).

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # build ra dist/ rồi chạy kiểm tra link
npm run preview    # xem bản build
```

`npm run build` chạy `astro build` rồi `scripts/check-links.mjs`. Build báo lỗi nếu:

- có link nội bộ gãy;
- link công cụ sai chữ hoa/thường so với bảng repo ở mục 6 CLAUDE.md;
- có thư mục gốc trùng tên repo công cụ;
- có mã đăng ký service worker hoặc dùng localStorage/IndexedDB/Cache Storage;
- có email hoặc số điện thoại dạng văn bản.

Ví dụ kết quả khi build đạt:

```
12 page(s) built in 3.85s
✓ check-links: 16 file, 180 link nội bộ, 8 repo công cụ – không lỗi.
```

## Cấu trúc

```
src/
  content.config.ts       Khai báo collection du-an, bai-viet (schema bắt buộc theo CLAUDE.md 3.2, 3.3)
  content/du-an/*.md      Dự án theo loại hình – vùng (không tên chủ đầu tư)
  content/bai-viet/*.md   Bài viết kỹ thuật (bắt buộc trường canCu)
  data/site.ts            Tên, chức danh, menu
  data/tools.ts           Danh sách công cụ PWA (tên repo đúng hoa/thường)
  layouts/Base.astro      Khung trang
  pages/                  Trang theo sơ đồ mục 5 CLAUDE.md, kèm sitemap.xml và robots.txt
  styles/global.css
scripts/check-links.mjs   Kiểm tra sau build
.github/workflows/deploy.yml  Deploy GitHub Pages bằng withastro/action
```

## Thêm nội dung

**Dự án** – tạo `src/content/du-an/<slug-khong-dau>.md`:

```markdown
---
title: Kho lạnh bảo quản thủy sản
description: Mô tả ngắn một câu.
loaiHinh: Kho lạnh
vung: [Đồng bằng sông Cửu Long]
namBatDau: 2022
namKetThuc: 2023
soDuAn: 1
hangMuc: [Hệ thống lạnh NH3, Kho lạnh panel PIR]
moiChat: [NH3 (R717)]
vaiTro: Chủ trì thiết kế
thuTu: 4
---
Nội dung. Số liệu làm tròn, đơn vị SI (m³, kW, °C, tấn/mẻ). Không tên chủ đầu tư, không ảnh nhận diện công trình.
```

**Bài viết** – tạo `src/content/bai-viet/<slug-khong-dau>.md`, bắt buộc có `canCu`:

```markdown
---
title: Tiêu đề có dấu
description: Mô tả ngắn.
ngayDang: 2026-12-01
canCu:
  - ASHRAE Handbook – Refrigeration, chương ...
  - TCVN ...
nhap: false   # true để chưa đăng
---
```

**Công cụ mới** – thêm dòng vào bảng mục 6 CLAUDE.md và một mục trong `src/data/tools.ts`.

## Deploy

Push lên nhánh `main` → GitHub Actions build và deploy. Lần đầu cần đặt Settings > Pages > Source = **GitHub Actions**.
Site chính không đăng ký service worker và không dùng bộ nhớ trình duyệt, để không ảnh hưởng các PWA cùng origin.
