import cx from "clsx"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import LocaleSwitcher from "./LocaleSwitcher"

const links = [
  { path: "#rooms", text: "room" },
  { path: "#facilities", text: "facility" },
  { path: "#location", text: "location" },
  { path: "#reviews", text: "reviews" },
]

export default function Navbar() {
  const [scrollY, setScrollY] = useState()

  const handleWindowScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleWindowScroll)
    }
  }, [])

  const navClass = cx([
    'fixed top-0 z-50 w-full p-8 transition-colors text-stone-100',
    scrollY > 100 ? 'bg-stone-800/75 backdrop-blur-lg' : 'bg-transparent'
  ])

  return (
    <nav className={navClass}>
      <div className="container flex items-center justify-between mx-auto">
        <span className="font-bold tracking-tight">- Nayo Homestay -</span>
        <span className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <NavLink key={link.path} href={link.path} text={link.text} />
          ))}
        </span>
          <LocaleSwitcher />
      </div>
    </nav>
  )
}

function NavLink(props) {
  const { href, text } = props

  const { t } = useTranslation("common")
  const router = useRouter()
  const isActive = router.asPath === href

  const classes = cx(
    "text-label-lg",
    isActive ? "text-white" : "text-stone-100"
  )

  return (
    <a className={classes} href={href}>
      {t(text)}
    </a>
  )
}
