"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { MdClose, MdMenu } from "react-icons/md"
import Nav from "./Nav"
import NavMobile from "./NavMobile"
import SocialNav from "./SocialNav"

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false)
  const [openNav, setOpenNav] = useState(false)
  const [shadow, setShadow] = useState(false)

  async function handleCloseNav() {
    setOpenNav(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 50) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener("scroll", handleShadow)
  }, [])

  return (
    <header className={`${headerActive ? 'h-[72px]' : 'h-20'} 'fixed w-full h-[80px] top-0 z-50 bg-background transition-all shadow-lg' ${shadow && 'fixed w-full h-[80px] top-0 z-50 transition-all shadow-lg'}`}>
      <div className="px-[15px] md:px-[24px] lg:px-[64px] mx-auto h-full flex items-center justify-between xl:max-w-[1400px]">
        <Link href='/'>
          <Image src="/assets/logo.png" width={146} height={96} alt="Logo da Inata Sustenatural" />
        </Link>

        <NavMobile onClickCloseNav={handleCloseNav} containerStyles={`${headerActive ? 'top-[70px]' : 'top-[80px]'} ${openNav ? 'max-h-max pt-8 pb-10 border-t border-black/10' : 'max-h-0 pt-0 pb-0 overflow-hidden border-black/0'} bg-white w-full left-0 flex flex-col gap-6 text-center fixed text-base text-titleColor font-semibold transition-all xl:hidden`} />

        <Nav containerStyles="hidden xl:flex xl:items-center xl:justify-between gap-6 2xl:gap-8 text-base text-textColor font-semibold" />
        <SocialNav onClickCloseNav={handleCloseNav} containerStyles="hidden xl:flex" />

        <button
          onClick={() => setOpenNav(!openNav)}
          className={`xl:hidden ${shadow ? 'text-primary' : 'text-blueColor-logoColor'}`}
        >
          {!openNav ?
            <MdMenu className="text-4xl" /> :
            <MdClose className="text-4xl" />}
        </button>
      </div>
    </header>
  )
}

export default Header