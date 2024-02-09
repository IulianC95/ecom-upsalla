import { cartContext } from '@/contexts';
import { useContext } from 'react';

export const AddToCart = ({ product }) => {
  const { title, id } = product;
  const { setCartProducts, cartProducts } = useContext(cartContext);
  const loading = false;

  const onClick = () => {
    setCartProducts([
      ...cartProducts,
      {
        quantity: 1,
        productId: id,
      },
    ]);
  };

  return (
    <button
      className="bg-black text-white uppercase font-medium text-sm my-1 py-3 px-6 hover:bg-green-600 transition-colors"
      type="button"
      disabled={loading}
      title={`Add ${title} to cart`}
      onClick={onClick}
    >
      {loading ? '...loading' : 'Add to Cart'}
    </button>
  );
};
