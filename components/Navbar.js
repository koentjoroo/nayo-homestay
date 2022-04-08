import { Transition } from "@headlessui/react"
import cx from "clsx"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { HiMenu } from "react-icons/hi"
import LocaleSwitcher from "./LocaleSwitcher"

const links = [
  { path: "#rooms", text: "room" },
  { path: "#facilities", text: "facility" },
  { path: "#location", text: "location" },
  { path: "#reviews", text: "reviews" },
]

export default function Navbar() {
  const { t } = useTranslation("common")
  const [scrollY, setScrollY] = useState()
  const [mobileNavIsVisibile, setMobileNavVisibility] = useState(false)

  const handleWindowScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleWindowScroll, { passive: true })
    }
  }, [])

  const navClass = cx([
    "fixed top-0 z-50 w-full p-8 transition-colors text-stone-100",
    scrollY > 100 ? "bg-stone-800/75 backdrop-blur-lg" : "bg-transparent",
  ])

  return (
    <>
      <nav className={navClass}>
        <div className="container mx-auto flex items-center justify-center md:justify-between">
          <span className="font-bold tracking-tight">- Nayo Homestay -</span>
          <span className="hidden items-center gap-8 md:flex">
            {links.map(link => (
              <NavLink key={link.path} href={link.path} text={link.text} />
            ))}
          </span>
          <span className="hidden md:flex">
            <LocaleSwitcher />
          </span>
        </div>
      </nav>
      <Transition
        show={mobileNavIsVisibile}
        enter="duration-300 transition-opacity fixed z-20 inset-0"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        leave="duration-300 transition-opacity fixed z-20 inset-0"
      >
        <div className="fixed inset-0 z-20 bg-black/50"></div>
      </Transition>
      <Transition
        show={mobileNavIsVisibile}
        enter="transition-all fixed z-30 inset-x-0 bottom-0"
        enterFrom="opacity-0 translate-y-10"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all fixed z-20 inset-x-0 bottom-0"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-10"
      >
        <ul className="fixed inset-x-0 bottom-0 z-20 flex flex-col justify-end bg-white p-2">
          {links.map(link => (
            <li
              key={link.path}
              className="my-2 rounded-sm p-4 text-center transition-colors focus:bg-stone-800/25"
            >
              <NavLink
                key={link.path}
                href={link.path}
                text={link.text}
                isMobile
              />
            </li>
          ))}
          <li
            className="my-2 rounded-sm bg-red-100 p-4 text-center text-red-500 transition-colors focus:bg-red-300"
            onClick={() => setMobileNavVisibility(false)}
          >
            <button className="font-bold uppercase">{t("close")}</button>
          </li>
        </ul>
      </Transition>
      <span className="fixed bottom-0 right-0 z-10 rounded-tl-full bg-orange-500 pl-8 pt-8 pr-4 pb-4 text-white md:hidden">
        <button
          className="rounded-full bg-white/0 p-0 transition-colors focus:bg-white/25"
          onClick={() => setMobileNavVisibility(true)}
          aria-label={t("navigation_menu")}
        >
          <HiMenu size="1.5em" />
        </button>
      </span>
    </>
  )
}

function NavLink(props) {
  const { href, text, isMobile } = props

  const { t } = useTranslation("common")
  const router = useRouter()
  const isActive = router.asPath === href

  const classes = cx(
    "text-label-lg",
    !isMobile && "text-stone-100",
    isMobile && "w-full text-stone-500",
    isActive && !isMobile && "text-white",
    isActive && isMobile && "text-stone-800"
  )

  return (
    <a className={classes} href={href}>
      {t(text)}
    </a>
  )
}
