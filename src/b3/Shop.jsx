import { useState } from "react";
import "./b3.css";
import ProductList from "./ProductList";
import Cart from "./Cart";

const PRODUCTS = [
  { id: "book", name: "Sách", price: 10000 },
  { id: "pen",  name: "Bút",  price: 5000  },
  { id: "note", name: "Vở",   price: 7000  },
];

export default function Shop() {
  // cart: map theo id -> { id, name, price, qty }
  const [cart, setCart] = useState({});

  const addToCart = (p) =>
    setCart((prev) => {
      const next = { ...prev };
      next[p.id] = next[p.id]
        ? { ...next[p.id], qty: next[p.id].qty + 1 }
        : { ...p, qty: 1 };
      return next;
    });

  const inc = (id) =>
    setCart((prev) => {
      const next = { ...prev };
      if (next[id]) next[id].qty += 1;
      return next;
    });

  const dec = (id) =>
    setCart((prev) => {
      const next = { ...prev };
      if (!next[id]) return next;
      next[id].qty -= 1;
      if (next[id].qty <= 0) delete next[id];
      return next;
    });

  const remove = (id) =>
    setCart((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });

  const items = Object.values(cart);

  return (
    <section className="section">
      <h2>Bài 3: Giỏ hàng</h2>

      <h3>Sản phẩm</h3>
      <ProductList products={PRODUCTS} onAdd={addToCart} />

      <Cart items={items} onInc={inc} onDec={dec} onRemove={remove} />
    </section>
  );
}
