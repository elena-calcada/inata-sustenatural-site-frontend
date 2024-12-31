"use client"

import Link from "next/link";

interface Props {
  containerStyles: string;
}

const Nav = ({ containerStyles }: Props) => {
  return (
    <div className="flex gap-24 items-center justify-center">
      <nav className={`${containerStyles}`}>
        <Link href="/" className="cursor-pointer hover:text-blueColor-base transition-all text-center max-w-[100px] leading-5">Home</Link>
        <Link href="/destinos" className="cursor-pointer hover:text-blueColor-base transition-all text-center max-w-[100px] leading-5">Passeios</Link>
      </nav>
    </div>
  )
}

export default Nav
