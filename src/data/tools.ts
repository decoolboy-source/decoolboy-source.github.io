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
    repo: 'MCselect',
    slug: 'tra-cuu-may-nen',
    name: 'Tra cứu máy nén lạnh',
    group: 'Tra cứu thiết bị',
    summary: 'Tra cứu thông số vận hành máy nén lạnh nhiều hãng, lập phiếu yêu cầu báo giá.',
    features: [
      'Hãng: MYCOM (Mayekawa), BITZER, GEA Grasso, Panasonic, Copeland.',
      'Lọc theo hãng → loại gas → nhiệt độ ngưng tụ → nhiệt độ bay hơi; tra theo model hoặc theo công suất lạnh.',
      'Giỏ chọn thiết bị, thông tin dự án, điều kiện thương mại.',
      'Xuất phiếu yêu cầu báo giá dạng CSV, PDF, Word.',
    ],
    basis: ['Dữ liệu trích từ catalogue của hãng; đối chiếu catalogue gốc trước khi chọn máy'],
    dataIO: 'Trang Báo cáo: xuất/nhập phiếu dự án (thiết bị đã chọn, thông tin dự án).',
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
    repo: 'ECselect',
    slug: 'tra-cuu-thiet-bi-giai-nhiet',
    name: 'Tra cứu thiết bị giải nhiệt',
    group: 'Tra cứu thiết bị',
    summary: 'Tra cứu dàn ngưng bay hơi và tháp giải nhiệt theo catalogue nhiều hãng.',
    features: [
      'Hãng: WXR, Heng An, OceanBlue, EVAPCO, Baltimore Aircoil (BAC), Liang Chi.',
      'Chọn model theo công suất, có nội suy giữa các điểm catalogue.',
      'Danh sách báo giá kèm thông tin dự án; xuất CSV, PDF, Word.',
    ],
    basis: ['Dữ liệu trích từ catalogue của hãng; đối chiếu catalogue gốc trước khi chọn thiết bị'],
    dataIO: 'Trang Báo giá: xuất/nhập danh sách thiết bị và thông tin dự án.',
  },
  {
    repo: 'EEselect',
    slug: 'tra-cuu-thiet-bi-bay-hoi',
    name: 'Tra cứu thiết bị bay hơi',
    group: 'Tra cứu thiết bị',
    summary: 'Máy đá vảy, chiller màng rơi, bộ trao đổi nhiệt dạng tấm (PHE).',
    features: [
      'Snowkey: bốc hơi đá vảy, máy đá vảy hoàn chỉnh, máy on-board, silo trữ đá, hệ vận chuyển đá.',
      'GENEGLACE: máy tạo đá vảy F600 / F800 / F900 / F2000.',
      'Thermowave: bộ trao đổi nhiệt dạng tấm thermolineVario — chọn khung theo diện tích trao đổi nhiệt.',
      'WXR: chiller màng rơi (falling film) — chọn model theo môi chất và công suất.',
      'Lập phiếu yêu cầu báo giá (RFQ) nhiều thiết bị; xuất CSV, PDF, Word.',
    ],
    basis: ['Dữ liệu trích từ catalogue của hãng; đối chiếu bản PDF gốc trước khi thiết kế hoặc đặt hàng'],
    dataIO: 'Trang Báo cáo → Sao lưu dữ liệu: xuất/nhập phiếu dự án.',
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
