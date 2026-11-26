---
title: Tra lượng dầu nạp máy nén MYCOM ngay khi chọn máy
description: Ứng dụng Chọn máy nén MYCOM có thêm màn hình Dầu nạp và ô dầu nạp trong kết quả chọn máy, dùng cho bước lập danh mục vật tư chạy thử.
loai: gioi-thieu
ngayDang: 2026-11-27
---

Khi lập danh mục vật tư cho chạy thử, câu hỏi hay gặp là "mỗi máy nén cần bao nhiêu lít dầu". Trước đây số liệu này nằm ở một công cụ riêng trong AppThermoEngine, tách khỏi bước chọn máy. Nay nó được đưa vào ứng dụng [Chọn máy nén MYCOM](/MYCOMselect/).

## Có gì mới

- **Ô Dầu nạp trong kết quả chọn máy.** Chọn xong model, ứng dụng hiện luôn lượng dầu cho một bộ máy ở hai cấu hình: có và không có bộ tiết kiệm (economizer). Nếu nhập số lượng máy, ô này cộng sẵn tổng cho cả cụm.
- **Màn hình Dầu nạp riêng.** Chọn model, cấu hình, số máy và phần dự phòng hao hụt, ứng dụng cho ra tổng số lít cần đặt mua. Kèm bảng đủ 24 model theo catalogue.
- **Mở thẳng từ AppThermoEngine** qua mục "Dầu nạp máy nén MYCOM" trong nhóm Lạnh công nghiệp.

## Mã đặt hàng và mã chọn máy

Catalogue dầu dùng mã đặt hàng dạng MCN… (ví dụ MCN 200S-L/51), còn phần mềm chọn máy dùng mã series (ví dụ N200VSD). Hai mã này chỉ cùng một máy. Bảng dầu trong ứng dụng ghi cả hai mã cạnh nhau để không phải tra chéo.

Một số model có trong catalogue dầu nhưng chưa có trong dữ liệu chọn máy, ví dụ dòng J-Series hay các máy cỡ 125, 320. Các model này vẫn tra được ở bảng dầu, chỉ chưa xuất hiện ở bước chọn theo công suất.

## Lưu ý

Số liệu lấy từ catalogue dầu nạp của hãng, chỉ dùng để dự trù vật tư. Lượng dầu nạp thực tế còn phụ thuộc bình tách dầu, đường ống và quy trình chạy thử. Hãy đối chiếu hướng dẫn lắp đặt của hãng trước khi đặt mua.
