import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { formatVNDate } from "../utils/date";
import type { Post } from "../types/post";

export default function PostCard({
  post,
  onDelete,
}: {
  post: Post;
  onDelete: (id: string) => void;
}) {
  const shortDesc = useMemo(
    () => post.content.slice(0, 100) + (post.content.length > 100 ? "…" : ""),
    [post.content]
  );

  return (
    <div className="card">
      <img className="card-thumb" src={post.thumbnail} alt={post.title} />
      <div className="card-body">
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span className="badge">{post.category}</span>
          <span style={{ marginLeft: "auto" }} className="muted">
            {formatVNDate(post.createdAt)}
          </span>
        </div>
        <h3 style={{ margin: "4px 0 0", fontSize: 16 }}>{post.title}</h3>
        <div className="muted">Tác giả: {post.author}</div>
        <p style={{ marginTop: 6, lineHeight: 1.4 }}>{shortDesc}</p>
        <div className="btn-row" style={{ marginTop: "auto" }}>
          <Link className="btn" to={`/posts/${post.id}`}>Đọc thêm</Link>
          <button
            className="btn btn-danger"
            onClick={() => {
              if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) onDelete(post.id);
            }}
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
}
