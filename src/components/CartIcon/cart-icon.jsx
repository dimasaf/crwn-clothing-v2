import { ReactComponent as CartIcons } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

function CartIcon({ handleOpen, totalCartItem }) {
  return (
    <div className="cart-icon-container" onClick={handleOpen}>
      <CartIcons className="shopping-icon" />
      <span className="item-count">{totalCartItem}</span>
    </div>
  );
}

export default CartIcon;
