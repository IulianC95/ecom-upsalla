import Link from "next/link";
import { OffCanvasMenu } from "../client";
import { GiShop } from "react-icons/gi";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// consider jsx is anormal data type

const jsxLogo = (
  <span className="text-3xl">
    <GiShop></GiShop>
  </span>
);

const fbLogo = (
  <span className="text-2xl">
    <FaFacebookF></FaFacebookF>
  </span>
);

const xLogo = (
  <span className="text-2xl">
    <FaXTwitter></FaXTwitter>
  </span>
);

const googleLogo = (
  <span className="text-2xl">
    <FaGoogle></FaGoogle>
  </span>
);

export const Header = () => {
  return (
    <div className="p-4 bg-neutral-900 text-white flex lg:flex-col justify-between h-full items-center">
      {/* forced exaple */}
      <Link href="/" className="relative z-10 transition-colors hover:text-amber-600">
        {jsxLogo}
      </Link>

      <OffCanvasMenu></OffCanvasMenu>

      {/* social */}
      <ul className="hidden lg:flex flex-col gap-4 z-10">
        <li className="transition-colors hover:text-amber-600">
          <Link href="https://www.facebook.com/" target="_blank">
            {fbLogo}
          </Link>
        </li>
        <li className="transition-colors hover:text-amber-600">
          <Link href="https://twitter.com/" target="_blank">
            {xLogo}
          </Link>
        </li>
        <li className="transition-colors hover:text-amber-600">
          <Link
            href="https://support.google.com/answer/2451065?hl=en"
            target="_blank"
          >
            {googleLogo}
          </Link>
        </li>
      </ul>
    </div>
  );
};
