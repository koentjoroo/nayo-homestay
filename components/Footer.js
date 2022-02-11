import { useTranslation } from "next-i18next"
import Link from "next/link"
import LocaleSwitcher from "./LocaleSwitcher"

const footer = {
  links: [
    { href: "#rooms", text: "available_rooms" },
    { href: "#facilities", text: "homestay_facilities" },
    { href: "#location", text: "homestay_location" },
    { href: "#reviews", text: "customer_reviews" },
    { href: "#booking", text: "room_bookment" },
  ],
  address: "Jalan Rambutan Nomor 11, Sambelegi Kidul, Maguwoharjo, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta",
}

export default function Footer() {
  const { t } = useTranslation('common')

  return (
    <footer className="p-16 text-sm bg-stone-900">
      <div className="container grid grid-rows-3 gap-16 mx-auto md:grid-rows-none md:grid-cols-3">
        <div className="flex flex-col gap-8">
          <span className="font-bold text-stone-50">- Nayo Homestay -</span>
          <div className="text-stone-300">
            <div>0813-2814-4878</div>
            <div>0812-2772-687</div>
            {/* <div>service@nayo.id</div> */}
          </div>
          <span className="text-stone-300">&copy; 2022 Nayo Homestay</span>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-stone-50">{t('information')}</p>
          <ul className="flex flex-col gap-2">
            {footer.links.map(item => (
              <li key={item.href}>
                <Link href={item.href}>
                  <a className="text-stone-300 hover:text-stone-50">
                    {t(item.text)}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-stone-50">{t('address')}</span>
          <p className="text-stone-300">{footer.address}</p>
          <div className="flex items-center text-stone-50">
            <span>{t('language')}:</span>
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </footer>
  )
}
