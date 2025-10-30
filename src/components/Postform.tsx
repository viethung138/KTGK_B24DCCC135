import React, { useState } from "react";
import type { Category, Post } from "../types/post";

export default function PostForm({
  initial,
  onSubmit,
  mode,
  onCancel,
}: {
  initial?: Partial<Post>;
  onSubmit: (draft: Omit<Post, "id" | "createdAt"> & Partial<Pick<Post, "id" | "createdAt">>) => void;
  mode: "create" | "edit";
  onCancel?: () => void; 
}) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [author, setAuthor] = useState(initial?.author ?? "");
  const [thumbnail, setThumbnail] = useState(
    initial?.thumbnail ??
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop"
  );
  const [content, setContent] = useState(initial?.content ?? "");
  const [category, setCategory] = useState<Category>(
    (initial?.category as Category) ?? "Công nghệ"
  );

  function validate(): string[] {
    const errs: string[] = [];
    if (!title || title.trim().length < 10) errs.push("Tiêu đề bắt buộc, ít nhất 10 ký tự.");
    if (!author || author.trim().length < 3) errs.push("Tác giả bắt buộc, ít nhất 3 ký tự.");
    if (!content || content.trim().length < 50) errs.push("Nội dung bắt buộc, ít nhất 50 ký tự.");
    return errs;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const errs = validate();
        if (errs.length) return alert("Lỗi:\n- " + errs.join("\n- "));
        onSubmit({
          id: initial?.id,
          title: title.trim(),
          author: author.trim(),
          thumbnail: thumbnail.trim(),
          content: content.trim(),
          category,
          createdAt: initial?.createdAt, 
        });
      }}
    >
      <div className="form-row">
        <label className="label">Tiêu đề</label>
        <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ít nhất 10 ký tự" />
      </div>

      <div className="form-row">
        <label className="label">Tác giả</label>
        <input className="input" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Ít nhất 3 ký tự" />
      </div>

      <div className="form-row">
        <label className="label">URL ảnh thumbnail</label>
        <input className="input" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} placeholder="https://…" />
      </div>

      <div className="form-row">
        <label className="label">Thể loại</label>
        <select className="select" value={category} onChange={(e) => setCategory(e.target.value as Category)}>
          <option>Công nghệ</option>
          <option>Du lịch</option>
          <option>Ẩm thực</option>
          <option>Đời sống</option>
          <option>Khác</option>
        </select>
      </div>

      <div className="form-row">
        <label className="label">Nội dung</label>
        <textarea className="textarea" rows={12} value={content} onChange={(e) => setContent(e.target.value)} placeholder="Ít nhất 50 ký tự" />
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <button type="submit" className="btn btn-primary">{mode === "create" ? "Đăng bài" : "Cập nhật"}</button>
        <button type="button" className="btn" onClick={() => onCancel ? onCancel() : history.back()}>
          Hủy
        </button>
      </div>
    </form>
  );
}
