import "./home.style.scss";
import CategoryItem from "../../components/category-item/category-item";

function Home({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((item) => {
        return <CategoryItem key={item.id} categories={item} />;
      })}
    </div>
  );
}

export default Home;
