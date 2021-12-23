import { useRouter } from "next/router"

import cx from "clsx"

const links = [
  { path: "#rooms", text: "Kamar" },
  { path: "#facilities", text: "Fasilitas" },
  { path: "#location", text: "Lokasi" },
  { path: "#reviews", text: "Ulasan" },
]

export default function Navbar() {
  return (
    <nav className="z-50 bg-stone-800 sticky top-0 text-stone-100 w-full p-8">
      <div className="mx-auto container flex justify-between items-center">
        <span className="tracking-tight font-bold">- Nayo Homestay -</span>
        <span className="flex items-center gap-8">
          {links.map(link => (
            <NavLink key={link.path} href={link.path} text={link.text} />
          ))}
        </span>
      </div>
    </nav>
  )
}

function NavLink(props) {
  const { href, text } = props

  const router = useRouter()
  const isActive = router.asPath === href

  const classes = cx(
    "text-label-lg",
    isActive ? "text-white" : "text-stone-100"
  )

  return (
    <a className={classes} href={href}>
      {text}
    </a>
  )
}
