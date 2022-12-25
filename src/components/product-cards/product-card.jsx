import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button from "../Button/button";
import "./product-card.style.scss";

function ProductCard({ product }) {
  const { addItemToCart } = useContext(CartContext);

  const addProductItemToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={product.imageUrl} alt="..." />
      <div className="footer">
        <div className="name">{product.name}</div>
        <div className="price">{product.price}</div>
      </div>
      <Button
        buttonType="inverted"
        onClick={() => addProductItemToCart(product)}
      >
        Add To Card
      </Button>
    </div>
  );
}

export default ProductCard;
