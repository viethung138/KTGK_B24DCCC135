import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { formatVNDate } from "../utils/date";


export default function PostDetailPage() {
  const blog = useContext(BlogContext);           
  const { id } = useParams<{ id: string }>();     
  const nav = useNavigate();                    

  const post = blog.posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="container">
        <p>Không tìm thấy bài viết.</p>
        <Link className="btn" to="/">Về trang chủ</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 8 }}>
        <button className="btn" onClick={() => nav(-1)}>◀ Quay lại</button>

        <div style={{ flex: 1 }} />

        <Link className="btn" to={`/posts/edit/${post.id}`}>Chỉnh sửa</Link>

        <button
          className="btn btn-danger"
          onClick={() => {
            if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
              blog.removePost(post.id);
              nav("/");
            }
          }}
        >
          Xóa bài viết
        </button>
      </div>

      <img className="detail-cover" src={post.thumbnail} alt={post.title} />

      <h1 style={{ marginTop: 12 }}>{post.title}</h1>

      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          margin: "6px 0 16px",
          flexWrap: "wrap",
        }}
      >
        <span className="badge">{post.category}</span>
        <span className="muted">Tác giả: {post.author}</span>
        <span className="muted">Ngày đăng: {formatVNDate(post.createdAt)}</span>
      </div>

      <article style={{ lineHeight: 1.7, whiteSpace: "pre-wrap" }}>
        {post.content}
      </article>
    </div>
  );
}
