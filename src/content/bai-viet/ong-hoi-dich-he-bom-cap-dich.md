---
title: Ống hồi dịch hệ bơm cấp dịch phải tính theo dòng hai pha
description: Tính ống hồi ướt bằng khối lượng riêng của lỏng cho ra cỡ ống nhỏ gấp nhiều lần thực tế. Ví dụ hệ NH3 200 kW cho thấy chênh từ DN15 lên DN100.
loai: ky-thuat
ngayDang: 2026-11-27
canCu:
  - "ASHRAE Handbook – Refrigeration (2022), chương 4: Liquid Overfeed Systems"
  - "ASHRAE Handbook – Refrigeration (2022), chương 2: Ammonia Refrigeration Systems (đường ống)"
  - "IIAR – Ammonia Refrigeration Piping Handbook"
---

Trong hệ bơm cấp dịch (liquid overfeed), bơm đẩy lượng lỏng gấp n lần lượng cần bay hơi vào dàn lạnh. Phần lỏng dư quay về bình tách lỏng cùng với hơi, qua ống hồi ướt (wet return). Đây là dòng hai pha: phần lớn khối lượng là lỏng, nhưng phần lớn thể tích là hơi.

## Sai lầm hay gặp

Lấy tổng lưu lượng khối lượng của dòng hồi chia cho khối lượng riêng của lỏng để tính vận tốc. Vì hơi NH3 ở −10 °C nhẹ hơn lỏng khoảng 270 lần, cách tính này coi như bỏ qua toàn bộ thể tích hơi.

Ví dụ hệ NH3, tải 200 kW, bay hơi −10 °C, bội số tuần hoàn n = 3:

| Cách tính | Cỡ ống đề xuất |
|---|---|
| Theo khối lượng riêng lỏng | DN15 |
| Theo dòng hai pha, kiểm thêm tổn thất áp suất | DN100 (vận tốc khoảng 7,9 m/s, tổn thất tương đương khoảng 0,1 K) |

DN15 cho đường hồi 200 kW là không thể vận hành được.

## Cách tính trong AppThermoEngine

- **Độ khô dòng hồi** lấy bằng 1/n: ở đầu ra dàn, phần đã bay hơi bằng một phần n lượng bơm vào.
- **Mô hình đồng nhất** cho khối lượng riêng và độ nhớt của hỗn hợp hai pha, rồi tính tổn thất theo Darcy–Weisbach.
- **Kiểm tổn thất quy ra độ giảm nhiệt độ bão hòa** ở phía hút, như cách chọn ống hút khô.

Mô hình đồng nhất là ước lượng sơ bộ. Ống hồi ướt có đoạn đứng, cần thêm kiểm tra để lỏng không đọng ở chân ống. Phần này nên đối chiếu bảng chọn ống trong sổ tay IIAR trước khi chốt thiết kế.
