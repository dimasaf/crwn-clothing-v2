import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/button";
import "./product-card.style.scss";
import { selectCartItems } from "../../store/cart/cart.selector";

import { addItemToCart } from "../../store/cart/cart.action";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={product.imageUrl} alt="..." />
      <div className="footer">
        <div className="name">{product.name}</div>
        <div className="price">{product.price}</div>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add To Card
      </Button>
    </div>
  );
}

export default ProductCard;
