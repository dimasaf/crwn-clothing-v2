import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview";
import {
  selectCategories,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";
import { fetchCategoriesStart } from "../../store/categories/category.action";
import Spinner from "../spinner/spinner";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectCategoriesIsLoading);

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categories).map((title) => {
          return (
            <CategoriesPreview
              title={title}
              key={title}
              products={categories[title]}
              link={title}
            />
          );
        })
      )}
    </>
  );
};

export default Categories;
