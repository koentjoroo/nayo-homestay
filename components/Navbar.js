import cx from "clsx"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import LocaleSwitcher from "./LocaleSwitcher"

const links = [
  { path: "#rooms", text: "room" },
  { path: "#facilities", text: "facility" },
  { path: "#location", text: "location" },
  { path: "#reviews", text: "reviews" },
]

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full p-8 bg-stone-800 text-stone-100">
      <div className="container flex items-center justify-between mx-auto">
        <span className="font-bold tracking-tight">- Nayo Homestay -</span>
        <span className="flex items-center gap-8">
          {links.map(link => (
            <NavLink key={link.path} href={link.path} text={link.text} />
          ))}
          <LocaleSwitcher />
        </span>
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
