import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  const [mode, setMode] = useState(false)

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = false ? "App dark" : "App light"

  function handleClick() {
  setMode((mode) => !mode)
}

  return (
    <div className={mode ? "App dark" : 'App light'}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{mode ? 'Light Mode' : 'Dark Mode' }</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
