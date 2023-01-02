import ProductCard from "../product-cards/product-card";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./categories-preview-style";

function CategoriesPreview({ title, products, link }) {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={link}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
}

export default CategoriesPreview;
