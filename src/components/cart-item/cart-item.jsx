import { CartItemContainer, ItemDetails } from "./cart-item.style";

const CartItem = ({ item }) => {
  // const { name, imageUrl, price, quantity } = item;

  return (
    <CartItemContainer>
      <img src={item.imageUrl} alt={`${item.name}`} />
      <ItemDetails>
        <span>{item.name}</span>
        <span>
          {item.quantity} x ${item.price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
