// import React from "react";
import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false);

  function handleClick() {
    return (
      setCart((cart) => !cart)
    )
  }

  return (
    <li className={cart ? "in-cart" : " "}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{cart ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
