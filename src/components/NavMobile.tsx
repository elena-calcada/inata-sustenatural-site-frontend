"use client"
import Link from "next/link";
import SocialNav from "./SocialNav";

interface Props {
  containerStyles: string;
  onClickCloseNav: () => void
}

const NavMobile = ({ containerStyles, onClickCloseNav }: Props) => {

  return (
    <nav className={`${containerStyles}`}>
      <Link href="/">Home</Link>
      <Link href="/passeios">Passeios</Link>

      <SocialNav onClickCloseNav={onClickCloseNav} containerStyles="flex gap-8 justify-center mt-6" />
    </nav>
  )
}

export default NavMobile