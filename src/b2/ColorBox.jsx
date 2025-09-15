export default function ColorBox({ color }) {
  return (
    <div
      className="b2-box"
      style={{ backgroundColor: color || "transparent" }}
      role="img"
      aria-label={`Màu hiện tại: ${color || "trống"}`}
    />
  );
}
