import { useState } from "react";
import "./b2.css";
import ColorBox from "./ColorBox";

export default function ChangeColor() {
  const [color, setColor] = useState("");

  return (
    <section className="section">
      <h2>Bài 2: Color Picker</h2>

      <div className="b2-controls">
        <button
          type="button"
          className={`btn ${color === "red" ? "active" : ""}`}
          onClick={() => setColor("red")}
        >
          Đỏ
        </button>
        <button
          type="button"
          className={`btn ${color === "green" ? "active" : ""}`}
          onClick={() => setColor("green")}
        >
          Xanh
        </button>
        <button
          type="button"
          className={`btn ${color === "yellow" ? "active" : ""}`}
          onClick={() => setColor("yellow")}
        >
          Vàng
        </button>
      </div>

      <ColorBox color={color} />
    </section>
  );
}
