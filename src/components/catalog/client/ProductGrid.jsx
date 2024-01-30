import { useProducts } from "@/hooks";
import { ProductTile } from ".";
import { css } from "@emotion/css";

const Spinner = () => (
  <div className="flex justify-center items-center h-screen">
    <p className="loader"></p>
  </div>
);

let cache = [];

export const ProductGrid = () => {
  const { products, loading } = useProducts();

  const itemsPerRow = 2;

  const gridCssClass = css`
    display: grid;
    row-gap: 32px;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(${itemsPerRow}, 1fr);
    }
  `;

  if (loading) {
    return <Spinner />;
  }

  return (
    <ul className={gridCssClass}>
      {products.map((product) => {
        const { id } = product;

        return (
          <li key={id}>
            <ProductTile product={product}></ProductTile>
          </li>
        );
      })}
    </ul>
  );
};
