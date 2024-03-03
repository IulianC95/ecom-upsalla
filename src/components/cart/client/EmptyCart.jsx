import Image from 'next/image';
import ContinueShopping from './ContinueShopping';

export const EmptyCart = () => {
  return (
    <section className="h-dvh">
      <div className="flex items-center justify-center h-5/6">
        <Image
          src="/images/cart-empty.png"
          alt="Empty cart"
          width={500}
          height={500}
        ></Image>
      </div>
      <ContinueShopping />
    </section>
  );
};
