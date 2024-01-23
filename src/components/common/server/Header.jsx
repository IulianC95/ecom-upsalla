import Link from "next/link"
import { OffCanvasMenu } from "../client";

// consider jsx is anormal data type

const jsxLogo = <span className="bg-white block w-4 aspect-square rounded-full"></span>

export const Header = () => {


    return <div className="p-4 bg-neutral-900 text-white flex lg:flex-col justify-between h-full items-center">
        {/* forced exaple */}
        <Link href='/' className="relative z-10">
            {jsxLogo}
        </Link>

        <OffCanvasMenu></OffCanvasMenu>

        <ul className="hidden lg:block">
            <li>
                {jsxLogo}
            </li>
        </ul>
    </div>
}