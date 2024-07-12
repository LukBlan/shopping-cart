import "./ImageProductCard.css"
import {useState} from "react";
import {AddToCartButton} from "../../Buttons/AddToCartButton/AddToCartButton.jsx";
import { Link } from "react-router-dom";

function ImageProductCard({ product }) {
  const { image, id, title} = product
  const [ mouseOver, setMouseOver ] = useState(false);

  const toggleMouseOver = () => setMouseOver(!mouseOver)

  return (
    <Link to={`/products/${id}`}>
      <li className="image-product-card" onMouseEnter={toggleMouseOver} onMouseLeave={toggleMouseOver}>
        <img className="product-image" src={image} alt={title} />
        <AddToCartButton id={id} />
      </li>
    </Link>
  )
}

export { ImageProductCard }