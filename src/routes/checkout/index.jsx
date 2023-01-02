import { useContext } from "react";

import CheckoutItem from "../../components/checkout-item/checkout-item";

import { CartContext } from "../../context/cart.context";
import "./checkout.style.scss";

function Checkout() {
  const { cartItems, clearItemCart, addItemToCart, removeItemCart, cartTotal } =
    useContext(CartContext);

  const handleDelete = (cartItem) => {
    clearItemCart(cartItem);
  };
  const handleAddQuantity = (cartItem) => {
    addItemToCart(cartItem);
  };
  const handleReduceQuantity = (cartItem) => {
    removeItemCart(cartItem);
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
