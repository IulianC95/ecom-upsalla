import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';

export const OffCanvasMenu = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <button
        title="Menu"
        type="button"
        onClick={() => {
          setOpen(!open);
        }}
        className="relative z-10 transition-colors hover:text-amber-600"
      >
        {!open ? <CgMenu size={32}></CgMenu> : <IoClose size={32}></IoClose>}
      </button>

      <nav
        className={`${
          open ? 'translate-y-full' : ''
        } bg-neutral-900 transition-transform transform-gpu text-white w-dvw h-dvh fixed left-0 -top-full z-0 lg:w-1/3`}
      >
        <ul className="lg:pl-24 gap-y-5 uppercase flex flex-col justify-center items-center lg:items-start h-full text-3xl">
          <li className="transition-colors hover:text-amber-600">
            <Link href="/" title="Home">
              Home
            </Link>
          </li>

          <li className="transition-colors hover:text-amber-600">
            <Link href="/contact" title="Contact">
              Contact Us
            </Link>
          </li>

          <li className="transition-colors hover:text-amber-600">
            <Link href="/about-us" title="About us">
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
