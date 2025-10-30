// Tạo id đơn giản đủ dùng (có time để giảm đụng hàng)
export function genId() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
