'use client';
import {
  CartControls,
  CartDisplay,
  CartTotals,
  Coupon,
  EmptyCart,
} from '@/components/cart/client';
import ContinueShopping from '@/components/cart/client/ContinueShopping';
import { Promo } from '@/components/catalog/client';
import { cartContext } from '@/contexts';
import { useContext, useState } from 'react';

export default function CartPage() {
  const { cartProducts } = useContext(cartContext);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleCouponApply = (code) => {
    if (code === 'winter20') {
      setDiscount(0.2);
    } else {
      setDiscount(0);
    }
    setCouponCode(code);
  };

  if (cartProducts.length === 0) {
    return <EmptyCart />;
  }
  return (
    <div className="container px-4 lg:px-0 mx-auto mb-12">
      <header className="flex justify-between text-zinc-400">
        <ContinueShopping></ContinueShopping>
        <CartControls></CartControls>
      </header>

      <section className="mt-16 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 grid gap-y-12">
          <CartDisplay></CartDisplay>
          <Coupon onApply={handleCouponApply}></Coupon>
        </div>

        <aside className="lg:col-span-4">
          <CartTotals discount={discount}></CartTotals>

          <div>
            <button
              type="button"
              title="Proceed to Checkout"
              className="bg-black text-white transition-colors hover:bg-amber-600 uppercase text-center font-semibold w-full py-4"
            >
              Proceed to Checkout
            </button>
          </div>
        </aside>
      </section>
      <Promo></Promo>
    </div>
  );
}
