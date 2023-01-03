import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../product-cards/product-card";
import { Preview } from "./categories-detail.style";

import { selectCategories } from "../../store/categories/category.selector";

function CategoriesDetail() {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategories);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Preview>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Preview>
    </>
  );
}

export default CategoriesDetail;
