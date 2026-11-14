import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Dự án: chỉ loại hình, vùng, năm, số liệu SI, môi chất, vai trò.
// Không có trường tên chủ đầu tư hay ảnh công trình (CLAUDE.md mục 3.2).
const duAn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/du-an' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    loaiHinh: z.string(),
    vung: z.array(z.string()).min(1),
    namBatDau: z.number().int(),
    namKetThuc: z.number().int(),
    soDuAn: z.number().int().positive(),
    hangMuc: z.array(z.string()).default([]),
    moiChat: z.array(z.string()).default([]),
    vaiTro: z.string().optional(),
    thuTu: z.number().default(0),
  }),
});

// Bài viết: bắt buộc ghi căn cứ cho hệ số, công thức (CLAUDE.md mục 3.3).
const baiViet = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/bai-viet' }),
  // loai 'ky-thuat' (mặc định): bắt buộc có canCu. loai 'gioi-thieu': bài không chứa hệ số, công thức.
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      loai: z.enum(['ky-thuat', 'gioi-thieu']).default('ky-thuat'),
      ngayDang: z.coerce.date(),
      ngayCapNhat: z.coerce.date().optional(),
      canCu: z.array(z.string()).default([]),
      nhap: z.boolean().default(false),
    })
    .refine((d) => d.loai !== 'ky-thuat' || d.canCu.length > 0, {
      message: 'Bài kỹ thuật phải ghi căn cứ (TCVN/QCVN/ASHRAE/ASME) trong canCu.',
      path: ['canCu'],
    }),
});

export const collections = { 'du-an': duAn, 'bai-viet': baiViet };
