import "./cart-dropdown.styles.scss";
import Button from "../Button/button";
import CartItem from "../cart-item/cart-item";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems?.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>

      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
