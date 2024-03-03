import { useContext, useState, useEffect } from 'react';
import { cartContext } from '@/contexts';
import { useProducts } from '@/hooks';

export const CartTotals = ({ discount }) => {
  const { cartProducts } = useContext(cartContext);
  const { products, loading } = useProducts();
  const [totalWithShipping, setTotalWithShipping] = useState(0);

  const shippingCost = 49;
  useEffect(() => {
    let total = cartProducts.reduce((total, { quantity, productId }) => {
      const product = products.find((product) => productId === product.id);
      if (product) {
        return total + quantity * product.price;
      }
      return total;
    }, 0);

    const totalAfterDiscount = discount ? total * (1 - discount) : total;

    const finalTotal = document.getElementById('express')?.checked
      ? totalAfterDiscount + shippingCost
      : totalAfterDiscount;
    setTotalWithShipping(finalTotal);
  }, [cartProducts, products, discount, shippingCost]);

  if (loading) {
    return '...loading';
  }

  const handleShippingChange = (event) => {
    let totalBase = cartProducts.reduce((total, { quantity, productId }) => {
      const product = products.find((product) => productId === product.id);
      return product ? total + quantity * product.price : total;
    }, 0);

    totalBase *= 1 - discount;

    if (event.target.id === 'express') {
      setTotalWithShipping(
        event.target.checked ? totalBase + shippingCost : totalBase,
      );
    } else {
      setTotalWithShipping(totalBase);
    }
  };

  return (
    <>
      <h1 className="bg-zinc-400 text-white uppercase font-medium p-3">
        Cart Totals
      </h1>

      <section>
        <h2 className="border-b py-3">
          Subtotal: $
          {(
            totalWithShipping -
            (document.getElementById('express')?.checked ? shippingCost : 0)
          ).toFixed(2)}
        </h2>

        <div className="border-b py-3">
          <form className="flex gap-4">
            <p>Shipping:</p>
            <section className="flex flex-col gap-4 items-start justify-start">
              <div className="flex gap-1">
                <input
                  type="radio"
                  id="standard"
                  name="shipping"
                  className="accent-amber-600 focus:accent-amber-600"
                  onChange={handleShippingChange}
                  defaultChecked
                />
                <label htmlFor="standard">Standard (Free)</label>
              </div>
              <div className="flex gap-1">
                <input
                  type="radio"
                  id="express"
                  name="shipping"
                  className="accent-amber-600 focus:accent-amber-600"
                  onChange={handleShippingChange}
                />
                <label htmlFor="express">Express ($49.00)</label>
              </div>
            </section>
          </form>
        </div>

        <div className="border-b py-3">
          Total: ${totalWithShipping.toFixed(2)}
        </div>
      </section>
    </>
  );
};
