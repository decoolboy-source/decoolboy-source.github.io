# decoolboy-source.github.io

Website cá nhân của Dương Quốc Đệ – kỹ sư lạnh công nghiệp, kho lạnh – cấp đông, HVAC, MEP, BIM.
Hồ sơ chuyên gia, dự án tiêu biểu, bài viết kỹ thuật, và lối vào các công cụ PWA tự phát triển
(mỗi công cụ là một repo riêng, chạy tại `/<ten-repo>/` trên cùng origin).

- Địa chỉ: https://decoolboy-source.github.io/
- Công nghệ: [Astro](https://astro.build) 7, xuất tĩnh, nội dung Markdown, không gửi JavaScript tới trình duyệt.
- Quy tắc nội dung và kỹ thuật: xem [CLAUDE.md](CLAUDE.md).

## Cài đặt và chạy

Yêu cầu Node.js 22.24 trở lên (khuyến nghị 24), theo yêu cầu của Astro 7.

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
15 page(s) built in 2.91s
✓ check-links: 26 file, 385 link nội bộ, 8 repo công cụ – không lỗi.
```

## Cấu trúc

```
src/
  content.config.ts       Khai báo collection du-an, bai-viet (schema bắt buộc theo CLAUDE.md 3.2, 3.3)
  content/du-an/*.md      Dự án theo loại hình – vùng (không tên chủ đầu tư)
  content/bai-viet/*.md   Bài viết (loai: ky-thuat bắt buộc canCu; gioi-thieu thì không)
  data/site.ts            Tên, chức danh, menu, biểu tượng nhóm dự án
  data/tools.ts           Danh sách công cụ PWA (tên repo đúng hoa/thường)
  data/icons.ts           Đường nét biểu tượng SVG
  components/Icon.astro   Biểu tượng inline
  layouts/Base.astro      Khung trang
  pages/                  Trang theo sơ đồ mục 5 CLAUDE.md, kèm sitemap.xml và robots.txt
  styles/global.css       Bảng màu, phông, hiệu ứng (thuần CSS, không JavaScript)
public/fonts/             Phông Be Vietnam Pro tự host (SIL OFL 1.1, kèm OFL.txt)
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

**Bài viết** – tạo `src/content/bai-viet/<slug-khong-dau>.md`. Bài `loai: ky-thuat` (mặc định) bắt buộc có `canCu`;
bài `loai: gioi-thieu` không chứa hệ số, công thức thì không cần:

```markdown
---
title: Tiêu đề có dấu
description: Mô tả ngắn.
loai: ky-thuat
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

## Giao diện

Hiệu ứng (chuyển trang, thẻ hiện dần khi cuộn, thanh tiến độ đọc, hover) đều bằng CSS, tự tắt khi thiết bị bật
"giảm chuyển động". Giao diện sáng – tối theo cài đặt thiết bị. Trình duyệt cũ không hỗ trợ sẽ hiển thị tĩnh, không mất nội dung.
