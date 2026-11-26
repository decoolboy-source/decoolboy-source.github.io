---
title: Độ dày panel kho lạnh – kiểm cả dòng nhiệt lẫn đọng sương
description: Chỉ kiểm chống đọng sương thì panel kho đông tính ra rất mỏng. Độ dày cần lấy theo tiêu chí lớn hơn giữa dòng nhiệt cho phép và chống đọng sương.
loai: ky-thuat
ngayDang: 2026-11-27
canCu:
  - "ISO 6946:2017 – Building components and building elements – Thermal resistance and thermal transmittance (nhiệt trở bề mặt Rsi, Rse)"
  - "ASHRAE Handbook – Refrigeration (2022), chương 23: Refrigerated-Facility Design"
  - "ISO 12241:2022 – Calculation rules (kiểm nhiệt độ mặt ngoài so với điểm sương)"
---

Chọn độ dày panel cách nhiệt cho kho lạnh có hai câu hỏi khác nhau:

1. **Mặt ngoài panel có đọng sương không?** Đây là yêu cầu tối thiểu.
2. **Nhiệt xâm nhập qua mỗi mét vuông vách là bao nhiêu?** Câu này quyết định tải lạnh và tiền điện suốt đời kho.

Với panel PU/PIR, tiêu chí thứ nhất gần như luôn cho độ dày nhỏ hơn nhiều so với tiêu chí thứ hai. Nếu chỉ kiểm đọng sương, kho đông sẽ được chọn panel quá mỏng.

## Ví dụ

Panel lõi PU, hệ số dẫn nhiệt 0,022 W/mK, không khí ngoài 35 °C, độ ẩm 80 %. Nhiệt trở bề mặt lấy theo ISO 6946: Rsi = 0,13 m²K/W, Rse = 0,04 m²K/W. Dòng nhiệt mục tiêu chọn 8 W/m²:

| Nhiệt độ kho | Theo chống đọng sương | Theo dòng nhiệt 8 W/m² | Độ dày cần |
|---|---|---|---|
| +2 °C | khoảng 15 mm | khoảng 87 mm | 100 mm thương mại |
| −20 °C | khoảng 29 mm | khoảng 148 mm | 150 mm thương mại |

Ở cả hai trường hợp, tiêu chí dòng nhiệt quyết định.

## Dòng nhiệt mục tiêu chọn bao nhiêu

Đây là quyết định thiết kế, cân giữa chi phí panel và chi phí điện năng theo vòng đời kho. Chương 23 sổ tay ASHRAE Refrigeration đặt việc chọn cách nhiệt kho trong bài toán chi phí vận hành, không dừng ở yêu cầu chống đọng sương. Trong AppThermoEngine, dòng nhiệt mục tiêu là một ô nhập, mặc định 8 W/m², người dùng chỉnh theo yêu cầu dự án.

Ứng dụng hiện cả hai độ dày, ghi rõ tiêu chí nào quyết định, rồi lấy giá trị lớn hơn. Bảng tra độ dày panel theo nhiệt độ kho cũng đã tính lại theo cách này.
