export default function ProductList({ products, onAdd }) {
  return (
    <ul className="b3-products">
      {products.map((p) => (
        <li key={p.id} className="b3-product">
          <span className="b3-product-name">
            {p.name} - {formatPrice(p.price)}
          </span>
          <button className="btn" type="button" onClick={() => onAdd(p)}>
            Thêm vào giỏ
          </button>
        </li>
      ))}
    </ul>
  );
}

function formatPrice(v) {
  return v.toLocaleString("vi-VN") + "đ";
}
