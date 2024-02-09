import { useProducts } from '@/hooks';
import { ProductTile } from '.';
import { css } from '@emotion/css';
import { useContext, useEffect, useState } from 'react';
import { uiContext } from '@/contexts';
import Spinner from '@/components/common/client/Spinner';
import Error404 from '@/components/common/client/Error404';

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

  const gridCssClass = `grid row-gap-8 ${
    itemsPerRow === '1'
      ? 'grid-cols-1'
      : itemsPerRow === '2'
      ? 'grid-cols-2'
      : 'grid-cols-4'
  } ${animate ? 'animate-fadeIn' : ''}`;

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
  );
};
