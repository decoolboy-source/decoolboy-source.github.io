---
title: Bộ công cụ tính toán và tra cứu hiện có
description: Bảy ứng dụng web cho kỹ sư lạnh và HVAC – tính tải nhiệt, thiết kế hệ NH3, tra cứu thiết bị – dùng được trên điện thoại và khi không có mạng.
loai: gioi-thieu
ngayDang: 2026-11-15
---

Trong công việc hằng ngày tôi cần tính nhanh ở công trường, trong buổi họp hoặc khi chưa mở được máy tính. Các bảng tính quen thuộc không tiện dùng trên điện thoại, vì vậy tôi viết dần một bộ ứng dụng web cho những việc lặp lại nhiều nhất. Bài này giới thiệu từng công cụ và cách dùng chung.

## Điểm chung của các công cụ

- **Chạy ngay trên trình duyệt,** không cần cài phần mềm hay tạo tài khoản.
- **Cài được như ứng dụng** (PWA) trên điện thoại và máy tính.
- **Dùng được khi không có mạng** sau lần mở đầu tiên.
- **Dữ liệu ở lại trên thiết bị.** Thông tin dự án anh/chị nhập không gửi về máy chủ nào.

## Nhóm lạnh công nghiệp

### [Cold Storage Heat Load Calculator](/CSHLCaculator/)

Tính tải nhiệt kho lạnh. Công cụ hỗ trợ ba dạng mặt bằng kho, có sẵn các mẫu loại kho (kho thấp chất tay, kho cao kệ pallet, kho tự động, hành lang lạnh) và cơ sở dữ liệu sản phẩm, vật liệu cách nhiệt, khí hậu các tỉnh thành. Kết quả cập nhật ngay khi đổi thông số, quản lý được nhiều kho trong một dự án và xuất báo cáo PDF, Excel. Giao diện song ngữ Việt – Anh.

### [Suite thiết kế kho lạnh NH3](/IrsWorkflows/)

Bốn công cụ nối với nhau thành một quy trình, dữ liệu từ bước trước tự chuyển sang bước sau:

1. Tính chu trình lạnh NH3.
2. Chọn kích thước bình sơ bộ.
3. Kiểm bền cơ khí bình áp lực.
4. Khái toán chi phí.

Mỗi công cụ vẫn dùng độc lập được khi chỉ cần một bước.

## Nhóm HVAC

### [MultiHVAC Calculator](/ACHLCaculation/)

Tính tải nhiệt, lưu lượng gió, ống gió và chọn thiết bị cho ba loại không gian: phòng sạch, trung tâm dữ liệu và phòng điện. Các công thức lõi có bộ kiểm thử tự động chạy mỗi lần cập nhật.

## Nhóm tra cứu thiết bị

Mỗi hãng là một ứng dụng riêng; hãng có nhiều loại thiết bị thì gộp chung trong một ứng dụng. Cách dùng giống nhau: lọc theo điều kiện làm việc, xem thông số, chọn thiết bị vào danh sách rồi lập phiếu yêu cầu báo giá.

- Máy nén: [MYCOM](/MYCOMselect/), [BITZER](/BITZERselect/), [GEA](/GEAselect/), [Panasonic](/PANASONICselect/), [Copeland](/COPELANDselect/).
- Dàn ngưng bay hơi, tháp giải nhiệt: [WXR](/WXRselect/) (kèm chiller màng rơi), [Heng An](/HENGANselect/), [OceanBlue](/OCEANBLUEselect/), [EVAPCO](/EVAPCOselect/), [BAC](/BACselect/), [Liang Chi](/LIANGCHIselect/).
- Máy đá vảy, trao đổi nhiệt: [Snowkey](/SNOWKEYselect/), [GENEGLACE](/GENEGLACEselect/), [Thermowave](/THERMOWAVEselect/).

## Nhóm tra cứu nhiệt động

### [AppThermoEngine](/Toolkits/)

Bộ tra cứu nhanh cho kỹ sư lạnh, HVAC và cơ điện: tính chất môi chất lạnh, không khí ẩm, chọn cỡ ống gió, tổn thất áp suất đường ống, cách nhiệt. Mỗi công cụ ghi rõ tiêu chuẩn hoặc tương quan mà nó sử dụng.

## Cách cài lên điện thoại

1. Mở đường dẫn công cụ bằng Chrome (Android) hoặc Safari (iPhone).
2. Chọn **Thêm vào màn hình chính** hoặc **Cài đặt ứng dụng** trong trình đơn của trình duyệt.
3. Mở công cụ từ biểu tượng vừa tạo. Từ lần sau không cần mạng.

Dữ liệu lưu theo từng trình duyệt trên từng thiết bị. Nếu anh/chị xóa dữ liệu trình duyệt hoặc đổi máy, hãy dùng chức năng sao lưu của công cụ (nếu có) trước.

## Giới hạn cần biết

Các công cụ giúp tính sơ bộ và so sánh phương án nhanh. Chúng **không thay thế thiết kế có thẩm tra**. Trước khi dùng kết quả cho công trình thật, anh/chị cần kiểm tra lại số liệu đầu vào, hệ số và tiêu chuẩn áp dụng. Căn cứ tính toán của từng công cụ được ghi ngay trong công cụ đó.

Danh sách đầy đủ và cập nhật nằm ở trang [Công cụ](/cong-cu/).
