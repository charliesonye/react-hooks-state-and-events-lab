import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [darkLighting, setDarkLighting] = useState(false)
  const appClass = darkLighting ? "App dark" : "App light"
  const lightingMode = darkLighting ? "Dark Mode" : "Light Mode"
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={()=> setDarkLighting(!darkLighting)}>{lightingMode}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
