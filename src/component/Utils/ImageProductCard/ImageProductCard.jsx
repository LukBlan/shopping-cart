import "./ImageProductCard.css"
import {useState} from "react";
import {AddToCartButton} from "../AddToCartButton/AddToCartButton.jsx";

function ImageProductCard({ product }) {
  const { image } = product
  const [ mouseOver, setMouseOver ] = useState(false);

  const toggleMouseOver = () => setMouseOver(!mouseOver)

  return (
    <li className="image-product-card" onMouseEnter={toggleMouseOver} onMouseLeave={toggleMouseOver}>
      <img className="product-image" src={image}/>
      <AddToCartButton />
      {/*{ mouseOver && <AddToCartButton /> }*/}
    </li>
    )
}

export { ImageProductCard }