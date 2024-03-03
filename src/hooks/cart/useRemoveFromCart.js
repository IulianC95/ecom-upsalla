import { cartContext } from '@/contexts';
import { baseUrl } from '@/index';
import { useContext, useState } from 'react';

export const useRemoveFromCart = () => {
  const { setCartProducts, cartProducts, cartId } = useContext(cartContext);
  const [loading, setLoading] = useState(false);

  const removeFromCart = (productId, removeAll = false) => {
    const newProducts = [...cartProducts];
    const productIndex = newProducts.findIndex(
      (product) => product.productId === productId,
    );

    if (productIndex !== -1) {
      if (removeAll) {
        newProducts.splice(productIndex, 1);
      } else {
        newProducts[productIndex].quantity -= 1;
        if (newProducts[productIndex].quantity <= 0) {
          newProducts.splice(productIndex, 1);
        }
      }
    } else {
      return;
    }

    setLoading(true);
    fetch(`${baseUrl}/carts/${cartId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ products: newProducts }),
    })
      .then((response) => response.json())
      .then((cart) => {
        setCartProducts(newProducts);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { removeFromCart, loading };
};
