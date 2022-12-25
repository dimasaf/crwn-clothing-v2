import "./cart-item.style.scss";

function CartItem({ item }) {
  return (
    <div className="cart-item-container">
      <img src={item.imageUrl} alt={`${item.name}`} />
      <div className="item-details">
        <span className="name">{item.name}</span>
        <span className="price">
          {item.quantity} x ${item.price}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
