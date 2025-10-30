import React, { useMemo } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./pages/PostList";
import CreatePostPage from "./pages/CreatePostPage";
import PostDetailPage from "./pages/PostDetailPage";
import EditPostPage from "./pages/EditPostPage";
import { BlogContext } from "./context/BlogContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { initialPosts } from "./data/seed";
import type { Post } from "./types/post";

export default function App() {
  const [posts, setPosts] = useLocalStorage<Post[]>("__blog_posts__", initialPosts);

  const removePost = (id: string) => setPosts(prev => prev.filter(p => p.id !== id));

  const upsertPost = (p: Post) =>
    setPosts(prev => {
      const i = prev.findIndex(x => x.id === p.id);
      if (i === -1) return [p, ...prev]; 
      const clone = [...prev];
      clone[i] = p;
      return clone;
    });

  const ctxValue = useMemo(
    () => ({ posts, setPosts, removePost, upsertPost }),
    [posts]
  );

  return (
    <BlogContext.Provider value={ctxValue}>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/create" element={<CreatePostPage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/posts/edit/:id" element={<EditPostPage />} />
        {/* 404 đơn giản */}
        <Route
          path="*"
          element={
            <div className="container">
              <h3>Trang không tồn tại</h3>
              <Link className="btn" to="/">Về trang chủ</Link>
            </div>
          }
        />
      </Routes>
    </BlogContext.Provider>
  );
}
