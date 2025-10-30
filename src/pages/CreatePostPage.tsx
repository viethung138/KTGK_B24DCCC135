import React, { useContext } from "react";
import PostForm from "../components/PostForm";
import { BlogContext } from "../context/BlogContext";
import type { Post } from "../types/post";
import { genId } from "../utils/id";
import { useNavigate } from "react-router-dom";

export default function CreatePostPage() {
  const blog = useContext(BlogContext);
  const nav = useNavigate();

  return (
    <div className="container">
      <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>Tạo bài viết mới</h2>
      <PostForm
        mode="create"
        onSubmit={(draft) => {
          const newPost: Post = {
            id: genId(),
            title: draft.title,
            author: draft.author,
            thumbnail: draft.thumbnail,
            content: draft.content,
            category: draft.category,
            createdAt: new Date().toISOString(),
          };
          blog.setPosts(prev => [newPost, ...prev]);
          alert("Đăng bài thành công!");
          nav("/");
        }}
        onCancel={() => nav("/")} 
      />
    </div>
  );
}
