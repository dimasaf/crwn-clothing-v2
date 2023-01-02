import { useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";

import CategoriesPreview from "../../components/categories-preview/categories-preview";

const Categories = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <CategoriesPreview
            title={title}
            key={title}
            products={categoriesMap[title]}
            link={title}
          />
        );
      })}
    </>
  );
};

export default Categories;
