---
title: AppThermoEngine sắp xếp lại công cụ theo chuyên ngành
description: Thanh bên của AppThermoEngine giờ chia sáu nhóm Lạnh, HVAC, Cách nhiệt, Điện, Kho vận và Tra cứu chung, để tìm công cụ theo đúng mảng việc đang làm.
loai: gioi-thieu
ngayDang: 2026-11-27
---

[AppThermoEngine](/Toolkits/) có mười mấy công cụ nhỏ, trước đây xếp theo số module M1–M8. Cách xếp đó tiện cho người viết phần mềm nhưng không tiện cho người dùng: kỹ sư điện phải đọc qua các mục lạnh mới tới phần sụt áp, kỹ sư lạnh phải nhớ đường ống môi chất nằm ở M7.

## Sáu nhóm mới

| Nhóm | Công cụ |
|---|---|
| Lạnh công nghiệp | Tính chất môi chất, Đường ống môi chất, Dầu nạp máy nén MYCOM |
| HVAC & Nước | Không khí ẩm, Tải lạnh theo lưu lượng, Cỡ ống nước – gió – khí |
| Cách nhiệt & Kho lạnh | Cách nhiệt ống và panel kho |
| Điện | Công suất và dòng điện, Sụt áp dây dẫn, Máng cáp |
| Kho vận | Xếp pallet, Tần suất robot AS/RS |
| Tra cứu chung | Đổi đơn vị, Standards Hub |

Mã module cũ vẫn hiện nhỏ ở cuối mỗi dòng, vì phần Cài đặt và Standards Hub vẫn dùng mã này để chỉ chỗ áp dụng từng tiêu chuẩn.

## Những thay đổi đi kèm

- **Tìm nhanh bằng Ctrl+K** theo tên nhóm và tên công cụ mới.
- **Dầu nạp máy nén MYCOM** chuyển sang ứng dụng [Chọn máy nén MYCOM](/MYCOMselect/), nơi số liệu dầu ghép thẳng với từng model. Trong AppThermoEngine chỉ còn một đường dẫn mở sang đó.
- **Dự án cũ** đang mở công cụ đã chuyển đi sẽ tự quay về màn hình Tra cứu, không báo lỗi.

## Cập nhật bản mới

Nếu đã cài AppThermoEngine lên điện thoại hoặc máy tính, hãy đóng hẳn ứng dụng rồi mở lại để nhận bản mới. Dữ liệu dự án đã lưu vẫn giữ nguyên.
