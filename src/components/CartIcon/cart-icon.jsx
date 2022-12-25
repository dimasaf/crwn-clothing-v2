import { ReactComponent as CartIcons } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

function CartIcon({ handleOpen }) {
  return (
    <div className="cart-icon-container" onClick={handleOpen}>
      <CartIcons className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

export default CartIcon;
