import type { Post } from "../types/post";
import { genId } from "../utils/id";

export const initialPosts: Post[] = [
  {
    id: genId(),
    title: "React Router v6: Tư duy định tuyến hiện đại",
    author: "Nguyễn Việt Hùng",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    content: "React Router v6 mang đến cách tiếp cận mới trong định tuyến SPA: <Routes> thay cho <Switch>, Route lồng nhau gọn hơn, và useNavigate thay useHistory. Bài viết đi từ cấu hình cơ bản đến các pattern hay gặp.",
    category: "Công nghệ",
    createdAt: new Date().toISOString(),
  },
  {
    id: genId(),
    title: "Checklist săn hoàng hôn ở Đà Lạt cho người mới",
    author: "Phan Thanh Minh",
    thumbnail: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop",
    content: "Đà Lạt có những buổi chiều đỏ rực. Từ đồi cỏ hồng đến Langbiang, đây là checklist ngắn giúp bạn chọn góc chụp, tính thời gian và tránh đông người.",
    category: "Du lịch",
    createdAt: new Date().toISOString(),
  },
  {
    id: genId(),
    title: "Bí quyết nấu phở bò trong bếp nhỏ",
    author: "Trần Thu Phương",
    thumbnail: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    content: "Phở bò cầu kỳ nhưng có thể nấu ngon trong căn bếp nhỏ: chọn xương, xử lý mùi, ninh nước trong, cân bằng quế hồi gừng hành…",
    category: "Ẩm thực",
    createdAt: new Date().toISOString(),
  },
  {
    id: genId(),
    title: "Thử thách 30 ngày viết nhật ký tối giản",
    author: "Hoàng Đức Anh",
    thumbnail: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
    content: "Mỗi tối 5 phút: 3 điều biết ơn, 1 điều cần cải thiện, 1 câu hỏi cho ngày mai. Sau 30 ngày, năng lượng tinh thần khác hẳn.",
    category: "Đời sống",
    createdAt: new Date().toISOString(),
  },
  {
    id: genId(),
    title: "Signals vs State: hướng đi sau hooks?",
    author: "Lê Hải Nam",
    thumbnail: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
    content: "Signals được nhiều framework coi là tương lai của state: fine-grained reactivity, ít re-render. Bài viết phân tích ưu/nhược so với useState/useReducer.",
    category: "Công nghệ",
    createdAt: new Date().toISOString(),
  },
  {
    id: genId(),
    title: "Một ngày không điện thoại: trải nghiệm đáng thử",
    author: "Nguyễn Thanh Tùng",
    thumbnail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    content: "Tắt điện thoại 24 giờ nghe khó, nhưng mở ra nhiều khoảng lặng thú vị. Những gì tôi thấy, đã làm, và vì sao bạn nên thử.",
    category: "Khác",
    createdAt: new Date().toISOString(),
  },
];
