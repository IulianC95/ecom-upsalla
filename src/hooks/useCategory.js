import { useState, useEffect } from 'react';
import { baseUrl } from '..';

export const useCategory = (category, currentProductId) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${baseUrl}/products/category/${category}`,
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const filteredData = data
          .filter((product) => product.id !== currentProductId)
          .slice(0, 3);
        setRelatedProducts(filteredData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [category, currentProductId]);

  return { relatedProducts, loading, error };
};
