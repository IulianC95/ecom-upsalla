import { cartContext } from '@/contexts';
import Link from 'next/link';
import { useContext } from 'react';

export const CartControls = () => {
  const obj = useContext(cartContext);

  return (
    <ul className="border border-zinc-200 transition-colors hover:bg-neutral-900 hover:text-white">
      <li>
        <Link
          href="/cart"
          className="w-20 aspect-square flex justify-center items-center"
        >
          <span className="relative">
            {/* Cart - add react icon */}
            <span className="absolute block w-5 bg-black text-white text-sm -top-4 -right-4 rounded-full"></span>
            1
          </span>
        </Link>
      </li>
    </ul>
  );
};
