import Link from 'next/link';
import { IoReturnDownBackSharp } from 'react-icons/io5';

export default function ContinueShopping() {
  return (
    <div>
      <Link
        href="../../"
        className="gap-2 flex items-center justify-center border border-black text-black text-center lg:text-xl p-7 transition-colors hover:bg-amber-600 cursor-pointer hover:text-white hover:border-amber-600"
      >
        <IoReturnDownBackSharp size={30} />
        <span> Back to shop </span>
      </Link>
    </div>
  );
}
