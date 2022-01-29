import React, {useState} from "react";

function Item({ name, category }) {
  const [liClassName, setliClassName] = useState(false)
  const lichanger = liClassName ? "in-cart": ""
  const btnChanger = liClassName === true ? "remove" : "add"
  const btnTextContent = liClassName === true ? "Remove From Cart" : "Add to Cart"

  return (
    <li className= {lichanger}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnChanger} onClick={()=> setliClassName(!liClassName)}>{btnTextContent}</button>
    </li>
  );
}

export default Item;
