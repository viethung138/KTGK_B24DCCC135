export default function Cart({ items, onInc, onDec, onRemove }) {
  const total = items.reduce((s, it) => s + it.price * it.qty, 0);

  return (
    <>
      <h3>Giỏ hàng</h3>

      {items.length === 0 ? (
        <p>Chưa có sản phẩm.</p>
      ) : (
        <ul className="b3-cart-list">
          {items.map((it) => (
            <li key={it.id} className="b3-cart-item">
              <span className="b3-cart-name">{it.name}</span>

              <div className="b3-cart-qty">
                <button className="b3-qty-btn" onClick={() => onDec(it.id)}>
                  -
                </button>
                <span className="b3-qty">{it.qty}</span>
                <button className="b3-qty-btn" onClick={() => onInc(it.id)}>
                  +
                </button>
              </div>

              <span className="b3-cart-sub">
                {formatPrice(it.price * it.qty)}
              </span>

              <button className="btn-delete" onClick={() => onRemove(it.id)}>
                Xóa
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="b3-total">
        Tổng tiền: <strong>{formatPrice(total)}</strong>
      </div>
    </>
  );
}

function formatPrice(v) {
  return v.toLocaleString("vi-VN") + "đ";
}
