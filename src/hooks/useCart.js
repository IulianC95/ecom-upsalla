import { useEffect, useState } from 'react';
import { baseUrl } from '..';

export const useCart = (cartId) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${baseUrl}/carts/${cartId}`)
      .then((response) => {
        return response.json();
      })
      .then(() => {
        console.log(cart);
      });
  }, [cartId]);

  return { cartProducts, loading, error };
};
