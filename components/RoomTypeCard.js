import { useTranslation } from "next-i18next"
import Image from "next/image"
import Link from "next/link"

export default function RoomTypeCard(props) {
  const { t } = useTranslation("common")
  return (
    <div className="flex flex-col items-center">
      <Image
        className="rounded-lg"
        src={props.img}
        width="480px"
        height="360px"
        alt={props.title}
      />
      <div className="z-10 -mt-24 flex w-3/4 flex-col items-center gap-2 rounded-md bg-white p-8 shadow-md">
        <h3 className="text-2xl text-orange-500">{props.title}</h3>
        <p className="text-stone-500">
          {t("start_at")}{" "}
          <span className="font-bold text-stone-800">{props.rate}</span>
        </p>
        <Link href="/available-rooms">
          <a className="cursor-pointer rounded-full bg-orange-500 py-2 px-8 text-sm font-bold uppercase tracking-wider text-orange-50 shadow-md shadow-orange-500/50 transition hover:bg-orange-600">
            {t("see_room_detail")} &rarr;
          </a>
        </Link>
      </div>
    </div>
  )
}
