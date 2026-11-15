// Tiện ích cho bài viết: danh sách đã đăng, thời gian đọc.
import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'bai-viet'>;

export async function publishedPosts(): Promise<Post[]> {
  return (await getCollection('bai-viet', ({ data }) => !data.nhap))
    .sort((a, b) => b.data.ngayDang.valueOf() - a.data.ngayDang.valueOf() || a.id.localeCompare(b.id));
}

/** Số phút đọc, tính 200 từ/phút trên nội dung Markdown (bỏ cú pháp và liên kết). */
export function readingMinutes(post: Post): number {
  const text = (post.body ?? '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`|-]/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export const typeLabel = (p: Post) => (p.data.loai === 'ky-thuat' ? 'Kỹ thuật' : 'Giới thiệu');
