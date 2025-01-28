import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <Link
      href={href}
      className={`font-medium hover:text-blueColor-base ${isActive ? 'text-blueColor-base/60' : 'text-blueColor-dark'}`}
    >
      {children}
    </Link>
  )
}
