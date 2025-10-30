import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">📝 Blog Manager</div>
      <NavLink to="/" end className={({ isActive }) => "navlink" + (isActive ? " active" : "")}>
        Trang chủ
      </NavLink>
      <div style={{ flex: 1 }} />
      <Link to="/create" className="btn btn-primary">Viết bài</Link>
    </nav>
  );
}
