import { useProducts } from '@/hooks';
import { ProductTile, ProductsPerPage } from '.';
import { css } from '@emotion/css';
import { useContext, useEffect, useState } from 'react';
import { uiContext } from '@/contexts';
import { Error404, Spinner } from '@/components/common/client';

export const ProductGrid = () => {
  const { itemsPerRow, pagination, setPagination } = useContext(uiContext);
  const { perPage, page } = pagination;
  const { products, loading, error } = useProducts();
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const [animate, setAnimate] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const filteredProducts =
      selectedCategory === 'all'
        ? products
        : products.filter((product) => product.category === selectedCategory);

    const newPaginatedProducts = filteredProducts
      .slice()
      .splice(perPage * (page - 1), perPage);

    setPaginatedProducts(newPaginatedProducts);
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 1000);
    setPagination({ ...pagination, total: filteredProducts.length });
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, perPage, page, itemsPerRow, selectedCategory]);

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
      <section className="flex flex-col justify-center items-center">
        <ProductsPerPage onChange={handleProductsPerPageChange} />
        <div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="mb-4"
          >
            <option value="all">All Categories</option>
            <option value="men's clothing">Men Clothing</option>
            <option value="women's clothing">Women Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
      </section>
      <ul className={`${gridCssClass} gap-2`}>
        {paginatedProducts.map((product) => {
          const { id } = product;

          return (
            <li key={id} className="flex justify-center">
              <ProductTile product={product}></ProductTile>
            </li>
          );
        })}
      </ul>
    </>
  );
};
