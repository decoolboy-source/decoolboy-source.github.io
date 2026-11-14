// Mỗi công cụ là một repo riêng, chạy chung origin tại /<repo>/.
// `repo` phải ghi đúng chữ hoa/thường như bảng mục 6 của CLAUDE.md;
// scripts/check-links.mjs đối chiếu danh sách này với bảng đó khi build.
export interface Tool {
  repo: string;
  name: string;
  group: 'Lạnh công nghiệp' | 'HVAC' | 'Tra cứu thiết bị' | 'Nhiệt động';
  summary: string;
}

export const TOOLS: Tool[] = [
  {
    repo: 'CSHLCaculator',
    name: 'Cold Storage Heat Load Calculator (CSHL)',
    group: 'Lạnh công nghiệp',
    summary: 'Tính tải nhiệt kho lạnh, kèm thư viện tính chất sản phẩm thực phẩm, xuất báo cáo Excel.',
  },
  {
    repo: 'IrsWorkflows',
    name: 'Suite thiết kế kho lạnh NH3',
    group: 'Lạnh công nghiệp',
    summary: 'Hub Shell kết nối 4 công cụ: thiết kế hệ lạnh NH3, bình chứa NH3, bình áp lực và dự toán BOQ.',
  },
  {
    repo: 'ACHLCaculation',
    name: 'MultiHVAC Calculator',
    group: 'HVAC',
    summary: 'Tính tải nhiệt điều hòa cho phòng sạch, trung tâm dữ liệu và phòng điện.',
  },
  {
    repo: 'MCselect',
    name: 'Tra cứu máy nén lạnh',
    group: 'Tra cứu thiết bị',
    summary: 'Tra cứu máy nén lạnh nhiều hãng (có Mycom), lập phiếu yêu cầu báo giá.',
  },
  {
    repo: 'ECselect',
    name: 'Tra cứu thiết bị giải nhiệt',
    group: 'Tra cứu thiết bị',
    summary: 'Tra cứu dàn ngưng bay hơi và tháp giải nhiệt (WXR, EVAPCO…).',
  },
  {
    repo: 'EEselect',
    name: 'Tra cứu thiết bị bay hơi',
    group: 'Tra cứu thiết bị',
    summary: 'Máy đá vảy, chiller màng rơi, bộ trao đổi nhiệt dạng tấm (PHE).',
  },
  {
    repo: 'Toolkits',
    name: 'AppThermoEngine',
    group: 'Nhiệt động',
    summary: 'Tra cứu tính chất nhiệt động môi chất và không khí ẩm.',
  },
];
