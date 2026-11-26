---
title: Hệ số trao đổi nhiệt bề mặt khi tính chống đọng sương ống lạnh
description: Chọn hệ số bề mặt ngoài quá lớn làm lớp cách nhiệt tính ra mỏng hơn cần thiết. Ví dụ ống DN50 ở −10 °C chênh từ 9 mm lên khoảng 20 mm.
loai: ky-thuat
ngayDang: 2026-11-27
canCu:
  - "ISO 12241:2022 – Thermal insulation for building equipment and industrial installations – Calculation rules"
  - "BS 5422:2023 – Method for specifying thermal insulating materials for pipes, tanks, vessels, ductwork and equipment"
  - "ASHRAE Handbook – Fundamentals (2021), chương 23: Insulation for Mechanical Systems"
---

Lớp cách nhiệt chống đọng sương phải đủ dày để nhiệt độ mặt ngoài cao hơn điểm sương của không khí xung quanh. Độ dày tính ra phụ thuộc mạnh vào hệ số trao đổi nhiệt bề mặt ngoài h₀ (W/m²K).

## Vì sao h₀ quan trọng

Nhiệt truyền qua lớp cách nhiệt rồi từ mặt ngoài ra không khí. h₀ càng lớn, mặt ngoài càng gần nhiệt độ không khí, nên tính ra chỉ cần lớp cách nhiệt mỏng. Vì vậy dùng h₀ lớn là thiên về phía **không an toàn**.

ISO 12241 và BS 5422 đều tính hệ số bề mặt theo vận tốc gió và độ phát xạ của vỏ bọc. Kiểm chống đọng sương cho ống trong nhà thì nên lấy điều kiện không khí gần như lặng, vì đó là lúc mặt ngoài lạnh nhất. Vỏ bọc bề mặt sáng như nhôm, inox có độ phát xạ thấp nên h₀ nhỏ, cho lớp cách nhiệt dày hơn. Vỏ sơn, PVC hay cao su có h₀ lớn hơn một chút.

## Ví dụ

Ống thép đường kính ngoài 60 mm (DN50), môi chất −10 °C, không khí 32 °C, độ ẩm 80 %, cách nhiệt PU có hệ số dẫn nhiệt 0,024 W/mK:

| h₀ dùng để tính | Độ dày tối thiểu |
|---|---|
| 23 W/m²K (gió ngoài trời, thường dùng cho tổn thất nhiệt) | khoảng 9 mm |
| 9 W/m²K (không khí lặng, vỏ sơn/PVC) | khoảng 20 mm |
| 5,7 W/m²K (không khí lặng, vỏ nhôm/inox) | khoảng 30 mm |

Chênh lệch tới ba lần chỉ vì chọn hệ số bề mặt.

## Trong AppThermoEngine

Mặc định h₀ = 9 W/m²K, có nút chọn nhanh theo loại vỏ bọc. Nếu nhập h₀ lớn hơn 12, kết quả hiện cảnh báo lớp cách nhiệt có thể **mỏng hơn thực tế**. Độ dày tính ra là mức tối thiểu chống đọng sương. Thực tế nên chọn lên cỡ thương mại kế tiếp và kiểm thêm tổn thất nhiệt nếu dự án có yêu cầu tiết kiệm năng lượng.
