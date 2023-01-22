import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../product-cards/product-card";
import Spinner from "../spinner/spinner";
import { Preview } from "./categories-detail.style";

import {
  selectCategories,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";

function CategoriesDetail() {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategories);
  const [products, setProducts] = useState(categoriesMap[category]);
  const isLoading = useSelector(selectCategoriesIsLoading);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Preview>
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Preview>
      )}
    </>
  );
}

export default CategoriesDetail;
