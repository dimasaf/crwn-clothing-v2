import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CategoriesPreview from "../../components/categories-preview/categories-preview";
import { selectCategories } from "../../store/categories/category.selector";
import { setCategories } from "../../store/categories/category.action";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    const categoryMap = async () => {
      const res = await getCategoriesAndDocuments();
      dispatch(setCategories(res));
    };

    categoryMap();
  }, [dispatch]);

  return (
    <>
      {Object.keys(categories).map((title) => {
        return (
          <CategoriesPreview
            title={title}
            key={title}
            products={categories[title]}
            link={title}
          />
        );
      })}
    </>
  );
};

export default Categories;
