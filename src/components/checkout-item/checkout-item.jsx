import React from "react";
import {
  CheckoutItemContainer,
  ImageContainer,
  ItemContent,
  RemoveButton,
} from "./checkout-item.styles";

function CheckoutItem({
  cartItem,
  handleClikDelete,
  handleReduceQtt,
  handleAddQtt,
}) {
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={cartItem.imageUrl} alt={cartItem.name} />
      </ImageContainer>
      <ItemContent>{cartItem.name}</ItemContent>
      <ItemContent>
        <div onClick={handleReduceQtt}>&#10094;</div>
        <div className="value">{cartItem.quantity}</div>
        <div onClick={handleAddQtt}>&#10095;</div>
      </ItemContent>

      <ItemContent>{cartItem.price}</ItemContent>

      <RemoveButton onClick={handleClikDelete}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}

export default CheckoutItem;
