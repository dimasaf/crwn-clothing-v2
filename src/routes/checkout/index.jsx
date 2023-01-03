import { useSelector } from "react-redux";
import {
  removeItemFromCart,
  clearItemFromCart,
  addItemToCart,
} from "../../store/cart/cart.action";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item";

import "./checkout.style.scss";
import { useDispatch } from "react-redux";

function Checkout() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const handleDelete = (cartItem) => {
    dispatch(clearItemFromCart(cartItems, cartItem));
  };
  const handleAddQuantity = (cartItem) => {
    dispatch(addItemToCart(cartItems, cartItem));
  };
  const handleReduceQuantity = (cartItem) => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };

  return (
    <div>
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>

        {cartItems.map((item) => {
          return (
            <CheckoutItem
              cartItem={item}
              key={item.id}
              handleClikDelete={() => handleDelete(item)}
              handleAddQtt={() => handleAddQuantity(item)}
              handleReduceQtt={() => handleReduceQuantity(item)}
            />
          );
        })}

        <span className="total">Total : {cartTotal}</span>
      </div>
    </div>
  );
}

export default Checkout;
