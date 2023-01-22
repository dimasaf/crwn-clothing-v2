import { Route, Routes, useParams } from "react-router-dom";
import Categories from "../../components/categories-container/categories";
import CategoriesDetail from "../../components/category-detail/categories-detail";

import "./shop.style.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<Categories />} />
      <Route path=":category" element={<CategoriesDetail />} />
    </Routes>
  );
};

export default Shop;
