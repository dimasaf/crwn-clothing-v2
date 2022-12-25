import Button from "../Button/button";
import "./product-card.style.scss";

function ProductCard({ product }) {
  return (
    <div className="product-card-container">
      <img src={product.imageUrl} alt="..." />
      <div className="footer">
        <div className="name">{product.name}</div>
        <div className="price">{product.price}</div>
      </div>
      <Button buttonType="inverted">Add To Card</Button>
    </div>
  );
}

export default ProductCard;
