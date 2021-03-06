import Section from "components/Section"
import { useTranslation } from "next-i18next"
import { FiStar } from "react-icons/fi"

const reviews = {
  left: [
    {
      name: "Vivin Nur Aziza",
      rating: 5.0,
      content:
        "Bagus bnget buat tempat nginep kalo lagi di Jogja...ada kolam ikannya..suasana adem teduh dan harga bersahabat",
    },
    {
      name: "Warti Cantik",
      rating: 5.0,
      content:
        "Nyaman sangat cocok buat menepi dari hingar bingar kota..adeem...plus suara gemericik..air,,makin sejuk ajaðð",
    },
    {
      name: "Jofan Rizaldi",
      rating: 5.0,
      content: "Tempat yang nyaman dan dekat bandara",
    },
  ],
  center: [
    {
      name: "Imtitsal",
      rating: 5.0,
      content:
        "Dengan harga yang sangat bersahabat, anda bisa menikmati ruangan seluas kisaran 3Ã5 meter yang mempunyai 2 single size bed atau 1 double size bed dilengkapi TV, lemari yang cukup besar, dan AC. Untuk parkir mobil nya lumayan sempit hanya bisa 4 mobil saja. Selama perjalanan ke kamar, anda dapat melihat beberapa ikan yang berenang di samping karena ada 4 kamar yang dibawahnya terdapat kolam. Dan juga di sekitar lokasi dapat ditemukan para penjual makanan dan jajanan.",
    },
    {
      name: "Rohmad Khuzaeni",
      rating: 4.0,
      content: "Asri Aman dan nyaman",
    },
  ],
  right: [
    {
      name: "Boby Ibnu Rizal",
      rating: 5.0,
      content:
        "Tempat yang nyaman untuk singgah di kota Jogja, dengan fasilitas yang cukup dan biaya yang terjangkau, sangat rekomended bagi para traveller",
    },
    {
      name: "Hidayat Susanto",
      rating: 5.0,
      content:
        "Tempat menyenangkan,,yang punya juga sangat ramah,,pokoke mantul",
    },
    {
      name: "Ros Rosmiyati",
      rating: 5.0,
      content: "Nyaman, bersih sirkulasi udara masih bagus",
    },
  ],
}

function ReviewCard(props) {
  const { item } = props

  return (
    <figure className="flex flex-col gap-4 rounded-md bg-white p-8">
      <figcaption className="flex items-baseline justify-between">
        <h3 className="text-xl font-black text-stone-800">{item.name}</h3>
        <span className="flex gap-4">
          <span>{item.rating.toPrecision(2)}</span>
          <FiStar className="fill-yellow-400" />
        </span>
      </figcaption>
      <blockquote className="leading-8 text-stone-500">
        {item.content}
      </blockquote>
    </figure>
  )
}

export default function Reviews() {
  const { t } = useTranslation("common")

  return (
    <Section
      id="reviews"
      title={t("customer_reviews")}
      className="bg-orange-100"
    >
      <p className="my-16 text-center text-stone-800">
        Mendapatkan rating <span className="text-orange-500">4.8</span> dari 12
        ulasan di Google
      </p>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <ul className="hidden space-y-8 lg:block">
          {reviews.left.map(item => (
            <li key={item.name}>
              <ReviewCard item={item} />
            </li>
          ))}
        </ul>
        <ul className="space-y-8">
          {reviews.center.map(item => (
            <li key={item.name}>
              <ReviewCard item={item} />
            </li>
          ))}
        </ul>
        <ul className="hidden space-y-8 xl:block">
          {reviews.right.map(item => (
            <li key={item.name}>
              <ReviewCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
