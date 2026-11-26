---
title: Môi chất hỗn hợp có trượt nhiệt – đọc điểm sương hay điểm sôi
description: Với R407C, R404A, R449A, cùng một áp suất có hai nhiệt độ bão hòa. Chọn nhầm điểm làm lệch độ quá nhiệt và công suất dàn.
loai: ky-thuat
ngayDang: 2026-11-27
canCu:
  - "ASHRAE Handbook – Fundamentals (2021), chương 29: Refrigerants và chương 30: Thermophysical Properties of Refrigerants"
  - "ANSI/ASHRAE Standard 34-2022 – Designation and Safety Classification of Refrigerants (phân loại hỗn hợp zeotrope dãy R400)"
  - "Thư viện CoolProp 6.6 (Bell và cộng sự, 2014) – số liệu ví dụ trong bài"
---

Môi chất đơn chất như NH3 hay R134a sôi ở một nhiệt độ cố định khi áp suất không đổi. Hỗn hợp zeotrope (dãy R400 theo ASHRAE 34) thì khác: thành phần sôi trước, thành phần sôi sau, nên nhiệt độ tăng dần trong quá trình bay hơi. Khoảng chênh đó gọi là trượt nhiệt (glide).

## Hai nhiệt độ ở cùng một áp suất

- **Điểm sôi (bubble point):** nhiệt độ lỏng bắt đầu sôi.
- **Điểm sương (dew point):** nhiệt độ giọt lỏng cuối cùng bay hơi hết.

Ví dụ R407C, điểm sương −25 °C:

| Trạng thái | Áp suất | Nhiệt độ |
|---|---|---|
| Điểm sương | 1,73 bar | −25,0 °C |
| Điểm sôi tại cùng áp suất | 1,73 bar | khoảng −31,8 °C |

Trượt nhiệt khoảng 6,8 K. Với R404A ở −30 °C, trượt nhiệt chỉ khoảng 0,7 K, nên nhiều người quen bỏ qua và dùng nguyên thói quen đó cho R407C.

## Dùng điểm nào cho việc gì

- **Độ quá nhiệt hút** tính từ điểm sương.
- **Độ quá lạnh lỏng** tính từ điểm sôi ở áp suất ngưng.
- **Nhiệt độ bay hơi danh định** trong catalogue cần xem hãng ghi theo điểm sương hay nhiệt độ trung bình, vì hai cách ghi cho công suất khác nhau.

## Trong AppThermoEngine

Khi tra môi chất hỗn hợp, nhiệt độ nhập vào được hiểu là điểm sương. Kết quả hiện thêm áp suất điểm sôi, nhiệt độ điểm sôi ở cùng áp suất và độ trượt. Ẩn nhiệt lấy giữa điểm sôi và điểm sương ở cùng áp suất, đúng với quá trình bay hơi trong dàn.
