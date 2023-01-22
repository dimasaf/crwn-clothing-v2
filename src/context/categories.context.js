// import { createContext, useEffect, useState } from "react";

// import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

// export const CategoriesContext = createContext({
//   categoryMap: {},
// });

// export const CategoriesProvider = ({ children }) => {
//   const [categoriesMap, setCategoriesMap] = useState({});

//   useEffect(() => {
//     const categoryMap = async () => {
//       const res = await getCategoriesAndDocuments();
//       setCategoriesMap(res);
//     };

//     categoryMap();
//   }, []);

//   const value = { categoriesMap, setCategoriesMap };

//   return (
//     <CategoriesContext.Provider value={value}>
//       {children}
//     </CategoriesContext.Provider>
//   );
// };
