import {
  BackgroundImage,
  CategoryBodyContainer,
  CategoryContainer,
} from "./category-item.style.js";

const CategoryItem = ({ categories }) => {
  return (
    <CategoryContainer>
      {/* <div
        className="background-image"
        style={{
          backgroundImage: `url(${categories.imageUrl})`,
        }}
      /> */}
      <BackgroundImage
        style={{
          backgroundImage: `url(${categories.imageUrl})`,
        }}
      />
      <CategoryBodyContainer to={`shop/${categories.title}`}>
        <h2>{categories.title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default CategoryItem;
