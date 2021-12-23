import Link from "next/link"

const footer = {
  links: [
    { href: "#rooms", text: "Kamar Tersedia" },
    { href: "#facilities", text: "Fasilitas Penginapan" },
    { href: "#location", text: "Lokasi Penginapan" },
    { href: "#reviews", text: "Ulasan Pelanggan" },
    { href: "#booking", text: "Booking Kamar" },
  ],
  address:
    "Jalan Rambutan Nomor 11, Sambelegi Kidul, Maguwoharjo, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta",
}

export default function Footer() {
  return (
    <footer className="bg-stone-900  text-sm p-16">
      <div className="mx-auto container grid grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-16">
        <div className="flex flex-col gap-8">
          <span className="font-bold text-stone-50">- Nayo Homestay -</span>
          <div className="text-stone-300">
            <div>08XXXXXXXXXX</div>
            <div>service@nayo.id</div>
          </div>
          <span className="text-stone-300">&copy; 2022 Nayo Homestay</span>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-stone-50">Informasi</p>
          <ul className="flex flex-col gap-2">
            {footer.links.map(item => (
              <li key={item.href}>
                <Link href={item.href}>
                  <a className="text-stone-300 hover:text-stone-50">
                    {item.text}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-stone-50">Alamat</span>
          <p className="text-stone-300">{footer.address}</p>
        </div>
      </div>
    </footer>
  )
}
