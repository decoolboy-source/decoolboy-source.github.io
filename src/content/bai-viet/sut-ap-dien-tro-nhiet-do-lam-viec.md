---
title: Tính sụt áp phải lấy điện trở dây ở nhiệt độ làm việc
description: Điện trở dây đồng ở 90 °C cao hơn ở 20 °C khoảng 27 %. Bỏ qua điều này làm sụt áp tính ra thấp hơn thực tế và chọn dây sát giới hạn.
loai: ky-thuat
ngayDang: 2026-11-27
canCu:
  - "IEC 60364-5-52:2009+A1:2011, Phụ lục G – Voltage drop in consumers' installations (TCVN 7447-5-52:2010 tương đương)"
  - "IEC 60228:2023 – Conductors of insulated cables (điện trở ở 20 °C)"
  - "IEC 60287-1-1:2023 – Electric cables – Calculation of the current rating (hệ số nhiệt điện trở)"
---

Bảng điện trở dây trong catalogue thường cho ở 20 °C. Khi cáp mang tải gần định mức, ruột dẫn nóng tới nhiệt độ làm việc cho phép của lớp cách điện: khoảng 70 °C với PVC, 90 °C với XLPE. Điện trở tăng theo nhiệt độ, nên sụt áp thực tế lớn hơn số tính ở 20 °C.

## Điện trở tăng bao nhiêu

Với đồng, hệ số nhiệt điện trở khoảng 0,00393 /K (nhôm khoảng 0,00403 /K):

| Cách điện | Nhiệt độ làm việc | Điện trở so với ở 20 °C |
|---|---|---|
| PVC | 70 °C | khoảng +20 % |
| XLPE | 90 °C | khoảng +27 % |

Phụ lục G của IEC 60364-5-52 ghi rõ điện trở dùng để tính sụt áp là điện trở ở nhiệt độ làm việc.

## Giới hạn sụt áp

Cũng theo Phụ lục G, với lưới hạ áp công cộng:

- **Mạch chiếu sáng:** không quá 3 %.
- **Mạch khác (động lực):** không quá 5 %.

Dùng chung 5 % cho cả mạch chiếu sáng là sai giới hạn.

## Trong AppThermoEngine

Công cụ Sụt áp dây dẫn (nhóm Điện) có thêm hai lựa chọn: loại cách điện (PVC/XLPE) để lấy điện trở ở nhiệt độ làm việc, và loại tải (chiếu sáng/động lực) để so với đúng giới hạn. Cột "điện trở suất ở 20 °C" trong Cài đặt vẫn giữ nguyên, ứng dụng tự quy đổi.
