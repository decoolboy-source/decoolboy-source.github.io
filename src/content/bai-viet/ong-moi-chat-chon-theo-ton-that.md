---
title: Ống môi chất lạnh chọn theo tổn thất, không chọn theo vận tốc
description: Ống nước chọn theo khoảng vận tốc là đủ, ống môi chất lạnh thì không. Tiêu chí đúng là tổn thất quy ra độ giảm nhiệt độ bão hòa.
loai: ky-thuat
ngayDang: 2026-11-27
canCu:
  - "ASHRAE Handbook – Refrigeration (2022), chương 1: Halocarbon Refrigeration Systems (mục Refrigerant Line Sizing)"
  - "ASHRAE Handbook – Refrigeration (2022), chương 2: Ammonia Refrigeration Systems (mục Piping)"
  - "IIAR – Ammonia Refrigeration Piping Handbook"
---

Ống nước lạnh, nước giải nhiệt hay ống gió thường được chọn để vận tốc nằm trong một khoảng khuyến nghị. Cách này không đủ cho ống môi chất lạnh.

## Vì sao không dùng vận tốc

Tổn thất áp suất trên ống hút làm áp suất ở cửa hút máy nén thấp hơn áp suất trong dàn bay hơi. Máy nén phải làm việc ở nhiệt độ bay hơi thấp hơn, công suất lạnh giảm và điện năng tăng. Cùng một mức tổn thất áp suất, ảnh hưởng tới nhiệt độ bão hòa rất khác nhau tùy môi chất và tùy nhiệt độ làm việc.

Vì vậy ASHRAE chọn ống môi chất theo **tổn thất quy ra độ giảm nhiệt độ bão hòa** (K), thường đặt mức cho phép khoảng 1 K cho mỗi đường hút và đường đẩy. Vận tốc chỉ là điều kiện phụ: đủ lớn để kéo dầu về máy ở đoạn ống đứng, không quá lớn để tránh ồn và va đập lỏng.

## Mỗi đường một tiêu chí

- **Ống hút:** tổn thất tương đương quanh 1 K, kèm vận tốc tối thiểu để hồi dầu ở ống đứng (với hệ halocarbon).
- **Ống đẩy:** tổn thất tương đương quanh 1 K.
- **Ống lỏng:** tránh tổn thất làm lỏng hóa hơi trước van tiết lưu (flash gas), nhất là khi ống đi lên cao.
- **Ống hồi ướt hệ bơm:** dòng hai pha, xem thêm bài [Ống hồi dịch hệ bơm cấp dịch](/bai-viet/ong-hoi-dich-he-bom-cap-dich/).

## Trong AppThermoEngine

- **Cỡ ống nước, gió, khí** (nhóm HVAC & Nước) không còn các loại ống môi chất. Dự án cũ đang chọn các loại này tự chuyển về nước/glycol.
- **Đường ống môi chất** (nhóm Lạnh công nghiệp) tính tổn thất theo Darcy–Weisbach với hệ số ma sát Colebrook (xấp xỉ Swamee–Jain), quy ra độ giảm nhiệt độ bão hòa và kiểm thêm vận tốc.

Lưu lượng môi chất trong công cụ hiện tính từ tải chia ẩn nhiệt, chưa cộng phần hơi sinh ra khi tiết lưu. Lưu lượng thực tế trên đường hút và đường đẩy vì vậy lớn hơn một chút, và ứng dụng có ghi chú điều này ngay trên màn hình.
