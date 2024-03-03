import { cartContext } from '@/contexts';
import { useContext } from 'react';
import { CartControls, CartLineItem, EmptyCart } from '.';
import { Spinner } from '@/components/common/client';
export const CartDisplay = () => {
  const { cartProducts, loading } = useContext(cartContext);

  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <table>
      <thead className="border-b p-3 h-12">
        <tr className="uppercase text-gray-400 font-normal">
          <th></th>
          <th></th>
          <th className="px-2">Product</th>
          <th className="px-2">Price</th>
          <th className="px-2">Quantity</th>
          <th className="px-2">Total</th>
        </tr>
      </thead>

      <tbody>
        {cartProducts.map((cartProduct) => {
          return (
            <CartLineItem
              key={cartProduct.productId}
              product={cartProduct}
            ></CartLineItem>
          );
        })}
      </tbody>
    </table>
  );
};
