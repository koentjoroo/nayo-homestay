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
      <div className="z-10 rounded-md bg-white w-3/4 shadow-md p-8 flex flex-col items-center gap-2 -mt-24">
        <h5 className="text-orange-500 text-2xl">{props.title}</h5>
        <p className="text-stone-500">
          {t("start_at")}{" "}
          <span className="text-stone-800 font-bold">{props.rate}</span>
        </p>
        <Link href="/available-rooms">
          <a className="py-2 px-8 bg-orange-500 shadow-md hover:bg-orange-600 transition shadow-orange-500/50 rounded-full uppercase cursor-pointer tracking-wider text-sm text-orange-50 font-bold">
            {t("see_room_detail")} &rarr;
          </a>
        </Link>
      </div>
    </div>
  )
}
