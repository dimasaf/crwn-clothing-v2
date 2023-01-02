import { ReactComponent as CartIcons } from "../../assets/shopping-bag.svg";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";

function CartIcon({ handleOpen, totalCartItem }) {
  return (
    <CartIconContainer onClick={handleOpen}>
      <CartIcons className="shopping-icon" />
      <ItemCount>{totalCartItem}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
