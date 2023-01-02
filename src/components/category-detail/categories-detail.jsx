import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../context/categories.context";
import { useParams } from "react-router-dom";
import ProductCard from "../product-cards/product-card";
import { Preview } from "./categories-detail.style";

function CategoriesDetail() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

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
