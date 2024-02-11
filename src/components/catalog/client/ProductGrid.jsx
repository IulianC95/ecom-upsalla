import { useProducts } from '@/hooks';
import { ProductTile } from '.';
import { css } from '@emotion/css';
import { useContext, useEffect, useState } from 'react';
import { uiContext } from '@/contexts';
import Spinner from '@/components/common/client/Spinner';
import Error404 from '@/components/common/client/Error404';
import ProductsPerPage from './ProductsPerPage';

export const ProductGrid = () => {
  const { itemsPerRow, pagination, setPagination } = useContext(uiContext);
  const { perPage, page } = pagination;
  const { products, loading, error } = useProducts();
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const newPaginatedProducts = products
      .slice()
      .splice(perPage * (page - 1), perPage);

    setPaginatedProducts(newPaginatedProducts);
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 1000);
    return () => clearTimeout(timer);
  }, [products, perPage, page, itemsPerRow]);

  const gridCssClass = css`
    display: grid;
    row-gap: 32px;
    animation: ${animate ? 'fadeIn 1s' : 'none'};

    @media (min-width: 1024px) {
      grid-template-columns: repeat(${itemsPerRow}, 1fr);
    }
  `;

  const handleProductsPerPageChange = (newPerPage) => {
    setPagination({ ...pagination, perPage: newPerPage, page: 1 });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner></Spinner>;
      </div>
    );
  }

  if (error.trim().length > 0) {
    return <Error404></Error404>;
  }

  return (
    <>
      <ProductsPerPage onChange={handleProductsPerPageChange} />
      <ul className={`${gridCssClass} gap-2`}>
        {paginatedProducts.map((product) => {
          const { id } = product;

          return (
            <li key={id}>
              <ProductTile product={product}></ProductTile>
            </li>
          );
        })}
      </ul>
    </>
  );
};
