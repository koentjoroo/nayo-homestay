import { Tab } from "@headlessui/react"
import Section from "components/Section"
import { useTranslation } from "next-i18next"
import Image from "next/image"

const tabs = ["daily_rooms", "monthly_rooms"]
const dailyRooms = [
  {
    id: 123,
    name: "Single Large Bed",
    rate: 150000,
    img: "/single_large_bed.webp",
    facilities: ["Single Large Bed", "big_closet", "all_facilities_included"],
  },
  {
    id: 456,
    name: "Twin Small Bed",
    rate: 150000,
    img: "/twin_small_bed.webp",
    facilities: ["Twin Small Bed", "big_closet", "all_facilities_included"],
  },
]
const monthlyRooms = [
  {
    id: 123,
    name: "A",
    rate: 1000000,
    img: "/room-monthly.png",
    facilities: [
      "Single Medium Bed",
      "medium_closet",
      "all_facilities_included",
      "without_air_conditioner",
    ],
  },
  {
    id: 234,
    name: "B",
    rate: 1250000,
    img: "/room-monthly.png",
    facilities: [
      "Single Medium Bed",
      "medium_closet",
      "all_facilities_included",
      "with_air_conditioner",
    ],
  },
  {
    id: 345,
    name: "C",
    rate: 1500000,
    img: "/single_large_bed.webp",
    facilities: [
      "Single Large Bed",
      "big_closet",
      "all_facilities_included",
      "with_air_conditioner",
    ],
  },
]

export default function Rooms() {
  const { t, i18n } = useTranslation()
  const p = price => price.toLocaleString(i18n.language)

  return (
    <Section id="rooms" title={t("available_rooms")}>
      <div className="flex flex-col items-center gap-8">
        <Tab.Group>
          <Tab.List className="flex gap-4 rounded-md bg-stone-100 p-4">
            {tabs.map(tab => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  selected
                    ? "rounded-md bg-orange-500 px-8 py-4 font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-500/50 transition-colors hover:bg-orange-600"
                    : "rounded-md px-8 py-4 font-bold uppercase tracking-wide text-stone-500 transition-colors hover:bg-stone-300"
                }
              >
                {t(tab)}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="flex flex-wrap justify-center gap-8">
                {dailyRooms.map(room => (
                  <div
                    key={room.id}
                    className="flex w-[240px] flex-col items-center gap-4 rounded-md border border-stone-100 p-4 text-center transition-shadow hover:shadow-md md:p-8 lg:w-[480px] xs:w-[360px]"
                  >
                    <div className="relative aspect-video w-full">
                      <Image
                        className="rounded-md"
                        src={room.img}
                        alt={room.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <h3 className="text-2xl font-black leading-relaxed">
                      {room.name}
                    </h3>
                    <p className="font-bold uppercase text-stone-500">
                      Rp{p(room.rate)}/{t("day")}
                    </p>
                    <ul className="flex flex-wrap justify-center gap-2">
                      {room.facilities.map(item => (
                        <li
                          key={item}
                          className="rounded-full bg-orange-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-orange-500 transition-colors hover:bg-orange-200"
                        >
                          {t(item)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="flex flex-wrap justify-center gap-8">
                {monthlyRooms.map(room => (
                  <div
                    key={room.id}
                    className="flex w-[360px] flex-col items-center gap-4 rounded-md border border-stone-100 p-8 text-center transition-shadow hover:shadow-md lg:w-[480px]"
                  >
                    <div className="relative aspect-video w-full">
                      <Image
                        className="rounded-md"
                        src={room.img}
                        alt={room.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <h3 className="text-2xl font-black leading-relaxed">
                      {t("monthly")} {room.name}
                    </h3>
                    <p className="font-bold uppercase text-stone-500">
                      Rp{p(room.rate)}/{t("month")}
                    </p>
                    <ul className="flex flex-wrap justify-center gap-2">
                      {room.facilities.map(item => (
                        <li
                          key={item}
                          className="rounded-full bg-orange-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-orange-500 transition-colors hover:bg-orange-200"
                        >
                          {t(item)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Section>
  )
}
