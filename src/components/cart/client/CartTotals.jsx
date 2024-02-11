import { cartContext } from '@/contexts';
import { useProducts } from '@/hooks';
import { useContext, useState } from 'react';

export const CartTotals = () => {
  const { cartProducts } = useContext(cartContext);
  const { products, loading } = useProducts();

  if (loading) {
    return '...loading';
  }

  const total = cartProducts.reduce((total, { quantity, productId }) => {
    const product = products.find((product) => {
      return productId === product.id;
    });
    const { price } = product;
    total += quantity * price;

    return total;
  }, 0);

  return (
    <>
      <h1 className=" bg-zinc-400 text-white uppercase font-medium p-3">
        Cart Totals
      </h1>

      <section>
        <h2 className="border-b py-3">Subtotal:</h2>

        <div className="border-b py-3">
          <form className="flex gap-4">
            <p>Shipping:</p>
            <section className="flex flex-col gap-4 items-start justify-start">
              <div className="flex gap-1">
                <input
                  type="radio"
                  id="standard"
                  name="standard"
                  className=" accent-amber-600 focus:accent-amber-600"
                />
                <label htmlFor="standard">Standard (Free)</label>
              </div>
              <div className="flex gap-1">
                <input
                  type="radio"
                  id="express"
                  name="standard"
                  className="accent-amber-600 focus:accent-amber-600"
                />
                <label htmlFor="express">Express ($49.00)</label>
              </div>
            </section>
          </form>
        </div>

        <div className="border-b py-3">
          Total:
          {total}
        </div>
      </section>
    </>
  );
};
