import "./directory.style.scss";
import CategoryItem from "../category-item/category-item";

function Directory({categories}) {
  return (
    <div className="categories-container">
        {categories.map((item) => {
            return <CategoryItem key={item.id} categories={item} />;
        })}
    </div>
  )
}

export default Directory