import { cartContext } from '@/contexts';
import Link from 'next/link';
import { useContext } from 'react';
import { IoCart } from 'react-icons/io5';

export const CartControls = () => {
  const obj = useContext(cartContext);
  const { cartProducts } = useContext(cartContext);

  const totalQuantity = cartProducts.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <ul className="border border-zinc-200 transition-colors text-black hover:bg-black hover:text-white">
      <li>
        <Link
          href="/cart"
          className="w-20 aspect-square flex justify-center items-center"
        >
          <span className="relative">
            <span className="absolute block w-6 bg-red-500 text-white text-sm -top-4 -right-4 rounded-full text-center">
              {totalQuantity}
            </span>

            <IoCart size={30} />
          </span>
        </Link>
      </li>
    </ul>
  );
};
