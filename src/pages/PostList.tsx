import React, { useContext, useMemo, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";

export default function PostList() {
  const blog = useContext(BlogContext);
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const kw = q.trim().toLowerCase();
    return kw ? blog.posts.filter(p => p.title.toLowerCase().includes(kw)) : blog.posts;
  }, [q, blog.posts]);

  return (
    <div className="container">
      <div className="header-row">
        <div style={{ fontWeight: 800 }}>Danh sách bài viết ({filtered.length})</div>
        <input className="input" placeholder="Lọc theo tiêu đề…" value={q} onChange={(e)=>setQ(e.target.value)} />
        <Link className="btn btn-primary" to="/create">Viết bài mới</Link>
      </div>
      <div className="grid">
        {filtered.map(p => <PostCard key={p.id} post={p} onDelete={blog.removePost} />)}
      </div>
    </div>
  );
}
