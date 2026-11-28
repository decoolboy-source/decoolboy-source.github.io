// Mỗi công cụ là một repo riêng, chạy chung origin tại /<repo>/.
// `repo` phải ghi đúng chữ hoa/thường như bảng mục 6 của CLAUDE.md;
// scripts/check-links.mjs đối chiếu danh sách này với bảng đó khi build.
// `slug` là trang giới thiệu trên site chính (/cong-cu/<slug>/) — không trùng tên repo nào.
// Nội dung lấy từ README và giao diện của từng công cụ; không tự đặt thêm tính năng.
import type { IconName } from './icons';

export interface Tool {
  repo: string;
  slug: string;
  /** Đường dẫn mở công cụ (tương đối với /<repo>/), mặc định trang gốc của repo */
  entry?: string;
  name: string;
  group: 'Lạnh công nghiệp' | 'HVAC' | 'Tra cứu thiết bị' | 'Nhiệt động';
  summary: string;
  features: string[];
  /** Căn cứ tính toán hoặc nguồn dữ liệu, theo ghi chú trong chính công cụ */
  basis: string[];
  /** Lưu ý riêng về phạm vi/độ chính xác */
  note?: string;
  dataIO: string;
}

export const TOOLS: Tool[] = [
  {
    repo: 'CSHLCaculator',
    slug: 'tai-nhiet-kho-lanh',
    name: 'Cold Storage Heat Load Calculator (CSHL)',
    group: 'Lạnh công nghiệp',
    summary: 'Tính tải nhiệt kho lạnh, kèm thư viện tính chất sản phẩm thực phẩm, xuất báo cáo PDF và Excel.',
    features: [
      'Ba dạng mặt bằng kho: chữ nhật, khuyết góc 6 cạnh, chữ U 8 cạnh.',
      'Mẫu loại kho có sẵn: kho thấp chất tay, kho cao kệ pallet, kho tự động (ASRS), hành lang lạnh — tự điền chiều cao, sức chứa, dàn lạnh, xe nâng, cửa.',
      'Cơ sở dữ liệu tích hợp: hơn 230 sản phẩm có ghi nguồn, vật liệu cách nhiệt, khí hậu 63 tỉnh thành, loại cửa và xe nâng; sửa được ngay trong app.',
      'Kết quả cập nhật ngay khi đổi thông số, kèm chẩn đoán PASS/FAIL.',
      'Quản lý nhiều dự án, nhiều phòng trong một dự án; xuất báo cáo PDF và Excel có mục tiêu chuẩn áp dụng.',
      'Song ngữ Việt – Anh.',
    ],
    basis: [
      'ASHRAE Handbook — Refrigeration (2018/2022), chương 23–24',
      'Gosney & Olama (1975) — tải xâm nhập qua cửa (Institute of Refrigeration, Vol. 72)',
      'Minnesota Technical Reference Manual / ASHRAE — hệ số Df',
      'FAO/IIR — tỷ lệ thể tích net/gross',
      'QCVN 02:2022/BXD — số liệu khí hậu 63 tỉnh thành',
    ],
    dataIO: 'Cài đặt → Sao lưu: xuất/nhập toàn bộ dự án, phòng đã tính và danh mục.',
  },
  {
    repo: 'IrsWorkflows',
    slug: 'thiet-ke-kho-lanh-nh3',
    entry: 'Hub_Shell.html',
    name: 'Suite thiết kế kho lạnh NH3',
    group: 'Lạnh công nghiệp',
    summary: 'Hub Shell kết nối 4 công cụ: thiết kế hệ lạnh NH3, bình chứa NH3, bình áp lực và dự toán BOQ.',
    features: [
      'Trạm 1 — RefrigDesignNH3: chu trình lạnh NH3, máy nén, dàn ngưng, thiết bị phụ; quản lý nhiều dự án.',
      'Trạm 2 — NH3 Vessel Calculator: chọn kích thước sơ bộ bình chứa, bình trung gian, economizer NH3.',
      'Trạm 3 — Pressure Vessel Calculator: kiểm bền cơ khí bình áp lực (ASME/TCVN), nozzle, áp suất ngoài.',
      'Trạm 4 — BOQ & Cost Estimate: khái toán chi phí đầu tư và vận hành.',
      'Tính xong ở trạm trước, dữ liệu tự chuyển sang trạm sau; mỗi trạm vẫn dùng độc lập được.',
    ],
    basis: [
      'Mỗi trạm ghi căn cứ ngay trong giao diện và trong báo cáo xuất ra',
      'Trạm 3: kiểm bền theo ASME và TCVN (xem chi tiết trong trạm)',
    ],
    dataIO: 'Hub → Dự án: "Sao lưu ngay" và "Khôi phục từ file sao lưu" cho cả 4 trạm.',
  },
  {
    repo: 'ACHLCaculation',
    slug: 'tai-nhiet-hvac',
    name: 'MultiHVAC Calculator',
    group: 'HVAC',
    summary: 'Tính tải nhiệt, lưu lượng gió, ống gió và chọn thiết bị cho phòng sạch, trung tâm dữ liệu và phòng điện.',
    features: [
      'Ba loại không gian: phòng sạch (cleanroom), trung tâm dữ liệu (data center), phòng điện – tủ điện.',
      'Tính tải nhiệt, lưu lượng gió, bù áp qua khe cửa, kích thước ống gió và nhánh ống.',
      'Chọn thiết bị (AHU, FCU, PAU…) và lập bảng thiết bị.',
      'Xuất báo cáo PDF và Excel; song ngữ Việt – Anh.',
      'Công thức lõi có bộ kiểm thử tự động chạy mỗi lần cập nhật.',
    ],
    basis: [
      'ASHRAE Handbook — Fundamentals 2021',
      'ASHRAE 62.1-2022 (thông gió) và ASHRAE 170-2021 (cơ sở y tế)',
      'EU GMP Annex 1 (phòng sạch)',
      'TCVN 5687:2010 và QCVN 02:2022/BXD',
    ],
    dataIO: 'Tab Quản trị → Export/Import: xuất/nhập toàn bộ dự án và cài đặt (không kèm API key).',
  },
  {
    repo: 'MYCOMselect',
    slug: 'chon-may-nen-mycom',
    name: 'Chọn máy nén MYCOM',
    group: 'Tra cứu thiết bị',
    summary: 'Chọn máy nén trục vít MYCOM (Mayekawa) theo điều kiện vận hành, lập phiếu yêu cầu báo giá.',
    features: [
      '10 series máy nén trục vít MYCOM một cấp và hai cấp (N160VLD … N250VSD, 2016LSC, 2520LSC), môi chất NH3.',
      'Lọc theo loại gas → nhiệt độ ngưng tụ → nhiệt độ bay hơi; tra theo model hoặc theo công suất lạnh.',
      'Giỏ chọn thiết bị, thông tin dự án, điều kiện thương mại.',
      'Xuất phiếu yêu cầu báo giá dạng CSV, PDF, Word.',
    ],
    basis: ['Dữ liệu trích từ catalogue của hãng; đối chiếu catalogue gốc trước khi chọn máy'],
    dataIO: 'Trang Báo cáo: xuất/nhập phiếu dự án (thiết bị đã chọn, thông tin dự án).',
  },
  {
    repo: 'BITZERselect',
    slug: 'chon-may-nen-bitzer',
    name: 'Chọn máy nén BITZER',
    group: 'Tra cứu thiết bị',
    summary: 'Chọn máy nén BITZER (HyperPAC) theo điều kiện vận hành, lập phiếu yêu cầu báo giá.',
    features: [
      '87 model HyperPAC (HP402 … HP604), môi chất R134a, R404A.',
      'Lọc theo loại gas → nhiệt độ ngưng tụ → nhiệt độ bay hơi; tra theo model hoặc theo công suất lạnh.',
      'Giỏ chọn thiết bị, thông tin dự án, điều kiện thương mại; xuất phiếu yêu cầu báo giá CSV, PDF, Word.',
    ],
    basis: ['Dữ liệu trích từ catalogue của hãng; đối chiếu catalogue gốc trước khi chọn thiết bị'],
    dataIO: 'Trang Báo cáo: xuất/nhập phiếu dự án (thiết bị đã chọn, thông tin dự án).',
  },
  {
    repo: 'GEAselect',
    slug: 'chon-may-nen-gea',
    name: 'Chọn máy nén GEA',
    group: 'Tra cứu thiết bị',
    summary: 'Chọn máy nén GEA Grasso theo điều kiện vận hành, lập phiếu yêu cầu báo giá.',
    features: [
      '20 model Grasso (dòng M, LT), môi chất R717 (NH3), R744 (CO2).',
      'Lọc theo loại gas → nhiệt độ ngưng tụ → nhiệt độ bay hơi; tra theo model hoặc theo công suất lạnh.',
      'Giỏ chọn thiết bị, thông tin dự án, điều kiện thương mại; xuất phiếu yêu cầu báo giá CSV, PDF, Word.',
    ],
    basis: ['Dữ liệu trích từ catalogue của hãng; đối chiếu catalogue gốc trước khi chọn thiết bị'],
    dataIO: 'Trang Báo cáo: xuất/nhập phiếu dự án (thiết bị đã chọn, thông tin dự án).',
  },
  {
    repo: 'PANASONICselect',
    slug: 'chon-may-nen-panasonic',
    name: 'Chọn máy nén Panasonic',
    group: 'Tra cứu thiết bị',
    summary: 'Chọn máy nén Panasonic (OCU) theo điều kiện vận hành, lập phiếu yêu cầu báo giá.',
    features: [
      '16 model OCU, môi chất R404A, R22.',
      'Lọc theo loại gas → nhiệt độ ngưng tụ → nhiệt độ bay hơi; tra theo model hoặc theo công suất lạnh.',
      'Giỏ chọn thiết bị, thông tin dự án, điều kiện thương mại; xuất phiếu yêu cầu báo giá CSV, PDF, Word.',
    ],
    basis: ['Dữ liệu trích từ catalogue của hãng; đối chiếu catalogue gốc trước khi chọn thiết bị'],
    dataIO: 'Trang Báo cáo: xuất/nhập phiếu dự án (thiết bị đã chọn, thông tin dự án).',
  },
  {
    repo: 'COPELANDselect',
    slug: 'chon-may-nen-copeland',
    name: 'Chọn máy nén Copeland',
    group: 'Tra cứu thiết bị',
    summary: 'Chọn máy nén Copeland (ZX) theo điều kiện vận hành, lập phiếu yêu cầu báo giá.',
    features: [
      '37 model ZX / ZXLD, môi chất R404A, R407F, R448A/R449A.',
      'Lọc theo loại gas → nhiệt độ ngưng tụ → nhiệt độ bay hơi; tra theo model hoặc theo công suất lạnh.',
      'Giỏ chọn thiết bị, thông tin dự án, điều kiện thương mại; xuất phiếu yêu cầu báo giá CSV, PDF, Word.',
    ],
    basis: ['Dữ liệu trích từ catalogue của hãng; đối chiếu catalogue gốc trước khi chọn thiết bị'],
    dataIO: 'Trang Báo cáo: xuất/nhập phiếu dự án (thiết bị đã chọn, thông tin dự án).',
  },
  {
    repo: 'WXRselect',
    slug: 'thiet-bi-wxr',
    name: 'Thiết bị WXR',
    group: 'Tra cứu thiết bị',
    summary: 'Dàn ngưng bay hơi, tháp giải nhiệt khép kín và chiller màng rơi WXR trong một app, chung một phiếu báo giá.',
    features: [
      'Dàn ngưng bay hơi kiểu tấm WXRB và kiểu ống WXRD; tháp giải nhiệt khép kín WXC.',
      'Chiller màng rơi WXR-FFDX: chọn model theo môi chất (R717/R134a) và công suất lạnh.',
      'Chọn model theo công suất/lưu lượng; dàn ngưng có hiệu chỉnh theo nhiệt độ ngưng tụ và nhiệt độ bầu ướt (nội suy bảng catalogue) nếu catalogue có bảng hiệu chỉnh.',
      'Danh sách báo giá kèm thông tin dự án; xuất CSV, PDF, Word.',
    ],
    basis: ['Dữ liệu trích từ catalogue của hãng; đối chiếu catalogue gốc trước khi chọn thiết bị'],
    dataIO: 'Trang Báo cáo: xuất/nhập danh sách thiết bị và thông tin dự án.',
  },
  {
    repo: 'HENGANselect',
    slug: 'thiet-bi-heng-an',
    name: 'Thiết bị Heng An',
    group: 'Tra cứu thiết bị',
    summary: 'Dàn ngưng bay hơi và tháp giải nhiệt khép kín Heng An.',
    features: [
      'Dàn ngưng bay hơi ZHX (phức hợp lưu), ZNX (ngược dòng); tháp giải nhiệt khép kín BHX, BNX.',
      'Chọn model theo công suất/lưu lượng; dàn ngưng có hiệu chỉnh theo nhiệt độ ngưng tụ và nhiệt độ bầu ướt (nội suy bảng catalogue) nếu catalogue có bảng hiệu chỉnh.',
      'Danh sách báo giá kèm thông tin dự án; xuất CSV, PDF, Word.',
    ],
    basis: ['Dữ liệu trích từ catalogue của hãng; đối chiếu catalogue gốc trước khi chọn thiết bị'],
    dataIO: 'Trang Báo cáo: xuất/nhập danh sách thiết bị và thông tin dự án.',
  },
  {
    repo: 'OCEANBLUEselect',
    slug: 'thiet-bi-oceanblue',
    name: 'Thiết bị OceanBlue',
    group: 'Tra cứu thiết bị',
    summary: 'Dàn ngưng bay hơi OceanBlue.',
    features: [
      'Dàn ngưng bay hơi ECB (dòng chéo), ECE (ngược dòng), ECBP (kiểu tấm).',
      'Chọn model theo công suất/lưu lượng; dàn ngưng có hiệu chỉnh theo nhiệt độ ngưng tụ và nhiệt độ bầu ướt (nội suy bảng catalogue) nếu catalogue có bảng hiệu chỉnh.',
      'Danh sách báo giá kèm thông tin dự án; xuất CSV, PDF, Word.',
    ],
    basis: ['Dữ liệu trích từ catalogue của hãng; đối chiếu catalogue gốc trước khi chọn thiết bị'],
    dataIO: 'Trang Báo cáo: xuất/nhập danh sách thiết bị và thông tin dự án.',
  },
  {
    repo: 'EVAPCOselect',
    slug: 'thiet-bi-evapco',
    name: 'Thiết bị EVAPCO',
    group: 'Tra cứu thiết bị',
    summary: 'Dàn ngưng bay hơi và tháp giải nhiệt khép kín EVAPCO.',
    features: [
      'Dàn ngưng bay hơi ATC-E và C-ATC (container hóa); tháp giải nhiệt khép kín C-ATW.',
      'Chọn model theo công suất/lưu lượng; dàn ngưng có hiệu chỉnh theo nhiệt độ ngưng tụ và nhiệt độ bầu ướt (nội suy bảng catalogue) nếu catalogue có bảng hiệu chỉnh.',
      'Danh sách báo giá kèm thông tin dự án; xuất CSV, PDF, Word.',
    ],
    basis: ['Dữ liệu trích từ catalogue của hãng; đối chiếu catalogue gốc trước khi chọn thiết bị'],
    dataIO: 'Trang Báo cáo: xuất/nhập danh sách thiết bị và thông tin dự án.',
  },
  {
    repo: 'BACselect',
    slug: 'thiet-bi-bac',
    name: 'Thiết bị BAC',
    group: 'Tra cứu thiết bị',
    summary: 'Dàn ngưng bay hơi Baltimore Aircoil (BAC).',
    features: [
      'Dàn ngưng bay hơi CXV và VXC.',
      'Chọn model theo công suất/lưu lượng; dàn ngưng có hiệu chỉnh theo nhiệt độ ngưng tụ và nhiệt độ bầu ướt (nội suy bảng catalogue) nếu catalogue có bảng hiệu chỉnh.',
      'Danh sách báo giá kèm thông tin dự án; xuất CSV, PDF, Word.',
    ],
    basis: ['Dữ liệu trích từ catalogue của hãng; đối chiếu catalogue gốc trước khi chọn thiết bị'],
    dataIO: 'Trang Báo cáo: xuất/nhập danh sách thiết bị và thông tin dự án.',
  },
  {
    repo: 'LIANGCHIselect',
    slug: 'thiet-bi-liang-chi',
    name: 'Thiết bị Liang Chi',
    group: 'Tra cứu thiết bị',
    summary: 'Tháp giải nhiệt Liang Chi.',
    features: [
      'Tháp giải nhiệt LVN (dòng chảy ngược) và LBC (dạng tròn); chọn model theo lưu lượng.',
      'Danh sách báo giá kèm thông tin dự án; xuất CSV, PDF, Word.',
    ],
    basis: ['Dữ liệu trích từ catalogue của hãng; đối chiếu catalogue gốc trước khi chọn thiết bị'],
    dataIO: 'Trang Báo cáo: xuất/nhập danh sách thiết bị và thông tin dự án.',
  },
  {
    repo: 'SNOWKEYselect',
    slug: 'thiet-bi-snowkey',
    name: 'Thiết bị Snowkey',
    group: 'Tra cứu thiết bị',
    summary: 'Máy đá vảy, silo trữ đá, hệ vận chuyển và cân đá Snowkey.',
    features: [
      'Bốc hơi đá vảy, máy đá vảy hoàn chỉnh, máy on-board (SFM).',
      'Silo trữ đá AIS/BIS/CIS/DIS, vận chuyển vít tải TSL / khí nén ID, cân đá LWT/QWT.',
      'Nhập công suất/sức chứa cần → tìm model nhỏ nhất đủ đáp ứng.',
      'Lập phiếu yêu cầu báo giá (RFQ) nhiều thiết bị; xuất CSV, PDF, Word.',
    ],
    basis: ['Dữ liệu trích từ catalogue của hãng; đối chiếu catalogue gốc trước khi chọn thiết bị'],
    dataIO: 'Trang Báo cáo → Sao lưu dữ liệu: xuất/nhập phiếu dự án.',
  },
  {
    repo: 'GENEGLACEselect',
    slug: 'thiet-bi-geneglace',
    name: 'Thiết bị GENEGLACE',
    group: 'Tra cứu thiết bị',
    summary: 'Máy tạo đá vảy GENEGLACE F600 / F800 / F900 / F2000.',
    features: [
      'Chọn dòng máy + biến thể (ABF/SBF, ±NH3) để xem kích thước, kết nối, PED.',
      'Chọn môi chất + tần số + công suất mong muốn để tra bảng thông số vận hành.',
      'Lập phiếu yêu cầu báo giá (RFQ) nhiều thiết bị; xuất CSV, PDF, Word.',
    ],
    basis: ['Dữ liệu trích từ catalogue của hãng; đối chiếu catalogue gốc trước khi chọn thiết bị'],
    dataIO: 'Trang Báo cáo → Sao lưu dữ liệu: xuất/nhập phiếu dự án.',
  },
  {
    repo: 'THERMOWAVEselect',
    slug: 'thiet-bi-thermowave',
    name: 'Thiết bị Thermowave',
    group: 'Tra cứu thiết bị',
    summary: 'Bộ trao đổi nhiệt dạng tấm Thermowave thermolineVario.',
    features: [
      'Gasketed, Modul Welded, Standardized (Frame L).',
      'Nhập diện tích trao đổi nhiệt cần → tìm khung phù hợp.',
      'Lập phiếu yêu cầu báo giá (RFQ) nhiều thiết bị; xuất CSV, PDF, Word.',
    ],
    basis: ['Dữ liệu trích từ catalogue của hãng; đối chiếu catalogue gốc trước khi chọn thiết bị'],
    dataIO: 'Trang Báo cáo → Sao lưu dữ liệu: xuất/nhập phiếu dự án.',
  },
  {
    repo: 'RefHandbook',
    slug: 'so-tay-he-thong-lanh',
    name: 'Sổ tay hệ thống lạnh',
    group: 'Lạnh công nghiệp',
    summary: 'Sổ tay kiến thức dùng chung cho mọi hãng thiết bị: nhiệt thải và cỡ dàn ngưng, áp suất ngưng cao, nước dàn ngưng, NH3 lượng nạp thấp, trao đổi nhiệt tấm.',
    features: [
      'Máy tính nhiệt thải ra dàn ngưng và năng suất danh định cần chọn theo nhiệt độ ngưng, bầu ướt (bảng hệ số R717 và HFC); lấy số từ giỏ chọn của các app máy nén MYCOM, BITZER, GEA, Copeland, Panasonic.',
      'Bảng tìm nguyên nhân áp suất ngưng cao phía dàn ngưng, bảng áp suất bão hòa NH3 để kiểm tra khí không ngưng.',
      'Giới hạn nước dàn ngưng bay hơi; máy tính số chu kỳ cô đặc, lượng xả đáy và nước bổ sung.',
      'Checklist chạy thử dàn ngưng bay hơi (lưu trạng thái trên máy).',
      'Hệ NH3 lượng nạp thấp: ước tính lượng nạp theo kiểu hệ; trao đổi nhiệt tấm quanh máy nén.',
      'Mở thẳng từng mục bằng liên kết; tab Sổ tay của các app hãng dẫn sang đây.',
    ],
    basis: [
      'Tóm tắt từ tài liệu kỹ thuật của BAC, Evapco, Güntner/ECOSS, thermowave',
      'Tỷ lệ nhiệt dầu máy nén tính từ dữ liệu của app chọn máy nén MYCOM',
    ],
    note: 'Chỉ để tham khảo; đối chiếu tài liệu gốc và catalogue thiết bị trước khi áp dụng.',
    dataIO: 'Không có dữ liệu dự án; số nhập và trạng thái checklist lưu trên trình duyệt.',
  },
  {
    repo: 'Toolkits',
    slug: 'tra-cuu-nhiet-dong',
    entry: 'AppThermoEngine.html',
    name: 'AppThermoEngine',
    group: 'Nhiệt động',
    summary: 'Bộ tra cứu nhanh: tính chất môi chất lạnh, không khí ẩm, cỡ ống gió, tổn thất áp suất đường ống, cách nhiệt.',
    features: [
      'Tính chất môi chất: NH3, CO2, R22, R134a, R410A, R404A, R507A, R449A, R407C, R290, R600a, R1234yf, R1234ze(E), R23, R508B; nước và các dung dịch tải lạnh.',
      'Cách nhiệt và chống đọng sương; công suất lạnh theo lưu lượng.',
      'Chọn cỡ ống và vận tốc; đường ống hai cấp.',
      'Không khí ẩm (psychrometric); đổi đơn vị.',
      'Điện: công suất – dòng điện, máng cáp, sụt áp dây dẫn.',
      'Kho tự động: tính pallet, tần suất robot ASRS.',
      'Thư viện tiêu chuẩn tham chiếu (Standards Hub).',
    ],
    basis: [
      'Lee-Kesler (1975), Rackett-Yamada, Watson (1943) — tính chất môi chất',
      'ASHRAE Handbook — Fundamentals, chương 1 (Hyland-Wexler) — không khí ẩm',
      'ISO 12241 — cách nhiệt thiết bị công nghiệp; ASHRAE 90.1 — cách nhiệt ống gió',
      'ASHRAE Refrigeration Handbook, chương 2 và IIAR Ammonia Refrigeration Piping Handbook — vận tốc ống môi chất',
      'ASME B36.10 — ống thép; Darcy-Weisbach, Colebrook-White (xấp xỉ Swamee-Jain) — tổn thất áp suất',
      'ASHRAE Fundamentals / SMACNA — chọn cỡ ống gió theo vận tốc',
      'IEC 60364-5-52 và TCVN 9208:2012 — dây dẫn, máng cáp',
      'QCVN 02:2022/BXD, Phụ lục A — số liệu tự nhiên',
    ],
    note: 'Tính chất môi chất dùng các tương quan chạy offline, độ chính xác ở mức tham khảo — chưa đạt độ chính xác của phương trình trạng thái (EOS) như CoolProp. Công cụ ghi rõ điều này trên giao diện.',
    dataIO: 'Tab Dự án: xuất/nhập toàn bộ dự án.',
  },
];

export const toolHref = (t: Tool) => `/${t.repo}/${t.entry ?? ''}`;
export const toolPage = (t: Tool) => `/cong-cu/${t.slug}/`;
export const toolImage = (t: Tool) => `/images/cong-cu/${t.slug}.webp`;

export const GROUP_ICON: Record<Tool['group'], IconName> = {
  'Lạnh công nghiệp': 'snow',
  HVAC: 'wind',
  'Tra cứu thiết bị': 'search',
  'Nhiệt động': 'gauge',
};
