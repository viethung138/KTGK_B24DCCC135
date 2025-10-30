import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";
import type { Post } from "../types/post";

export default function EditPostPage() {
  const blog = useContext(BlogContext);
  const { id } = useParams<{ id: string }>();
  const nav = useNavigate();

  const post = blog.posts.find(p => p.id === id);
  if (!post) {
    return (
      <div className="container">
        <p>Không tìm thấy bài viết để chỉnh sửa.</p>
        <Link className="btn" to="/">Về trang chủ</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>Chỉnh sửa bài viết</h2>
      <PostForm
        mode="edit"
        initial={post}
        onSubmit={(draft) => {
          const updated: Post = {
            id: post.id,
            title: draft.title,
            author: draft.author,
            thumbnail: draft.thumbnail,
            content: draft.content,
            category: draft.category,
            createdAt: post.createdAt,
          };
          blog.upsertPost(updated);
          alert("Cập nhật thành công!");
          nav(`/posts/${post.id}`);
        }}
        onCancel={() => nav(`/posts/${post.id}`)} 
      />
    </div>
  );
}
