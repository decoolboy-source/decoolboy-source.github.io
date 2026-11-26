---
title: Vì sao tra tính chất môi chất phải dùng bảng bão hòa
description: Công thức gần đúng cho áp suất, khối lượng riêng và ẩn nhiệt có thể sai vài chục phần trăm. AppThermoEngine chuyển sang bảng bão hòa sinh từ CoolProp.
loai: ky-thuat
ngayDang: 2026-11-27
canCu:
  - "ASHRAE Handbook – Fundamentals (2021), chương 30: Thermophysical Properties of Refrigerants"
  - "Bell I.H., Wronski J., Quoilin S., Lemort V. (2014). Pure and Pseudo-pure Fluid Thermophysical Property Evaluation and the Open-Source Thermophysical Property Library CoolProp. Ind. Eng. Chem. Res. 53(6), 2498–2508"
  - "NIST REFPROP – Reference Fluid Thermodynamic and Transport Properties Database (dùng để đối chiếu)"
---

Tra nhiệt độ bão hòa, ẩn nhiệt hay khối lượng riêng là bước đầu của gần như mọi phép tính lạnh: lưu lượng môi chất, cỡ ống, tổn thất áp suất. Sai ở bước này thì mọi bước sau sai theo.

## Công thức gần đúng sai ở đâu

Nhiều công cụ dùng các tương quan tổng quát: Lee–Kesler cho áp suất bão hòa, Rackett cho khối lượng riêng lỏng, Watson cho ẩn nhiệt. Ưu điểm là chỉ cần vài hằng số tới hạn. Nhược điểm là sai số lớn khi đi xa điểm chuẩn, đặc biệt với CO2 và với môi chất hỗn hợp.

Ví dụ CO2 ở −30 °C:

- Tương quan tổng quát cho ẩn nhiệt khoảng 163 kJ/kg.
- Phương trình trạng thái tham chiếu (CoolProp, khớp NIST REFPROP) cho 303,5 kJ/kg.

Sai gần một nửa. Dùng số 163 để tính lưu lượng thì lưu lượng môi chất gấp gần đôi thực tế, kéo theo cỡ ống và bình chứa lớn quá mức.

## Cách làm hiện nay trong AppThermoEngine

- **Bảng bão hòa sinh sẵn từ CoolProp** cho 16 môi chất (NH3, CO2, R22, R134a, R32, R404A, R407C, R410A, R449A, R507A…), bước 2 K, nhúng trong ứng dụng nên dùng được khi không có mạng.
- **Giữa hai dòng bảng:** nội suy tuyến tính cho tính chất, nội suy theo logarit áp suất cho áp suất bão hòa.
- **Ngoài phạm vi bảng** mới quay về công thức gần đúng, và kết quả hiện cảnh báo rõ.

Đối chiếu nhanh với NIST: NH3 ở −10 °C cho áp suất 2,91 bar, khối lượng riêng lỏng 652 kg/m³, ẩn nhiệt 1296 kJ/kg, đều lệch dưới 0,5 %.

## Khi nào vẫn cần phần mềm chuyên dụng

Bảng bão hòa chỉ cho trạng thái bão hòa. Tính hơi quá nhiệt, lỏng quá lạnh hay chu trình đầy đủ vẫn cần phần mềm có phương trình trạng thái đầy đủ hoặc phần mềm của hãng thiết bị.
