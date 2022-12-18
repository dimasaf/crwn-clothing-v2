import "./category-item.style.scss";

const CategoryItem = ({categories}) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${categories.imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{categories.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default CategoryItem