import Image from "next/image"
import { Tab } from "@headlessui/react"

import Section from "components/Section"

const tabs = ["Kamar Harian", "Kamar Bulanan"]
const dailyRooms = [
  {
    id: 123,
    name: "Single Large Bed",
    rate: "Rp150.000/hari",
    facilities: ["Single Large Bed", "Kamar Mandi Dalam", "Almari Besar"],
  },
  {
    id: 456,
    name: "Twin Small Bed",
    rate: "Rp150.000/hari",
    facilities: ["Twin Small Bed", "Kamar Mandi Dalam", "Almari Besar"],
  },
]
const monthlyRooms = [
  {
    id: 123,
    name: "Bulanan A",
    rate: "Rp1.000.000/bulan",
    facilities: ["Single Medium Bed", "Kamar Mandi Dalam", "Almari Sedang"],
  },
  {
    id: 234,
    name: "Bulanan B",
    rate: "Rp1.250.000/bulan",
    facilities: [
      "Single Medium Bed",
      "Kamar Mandi Dalam",
      "Almari Sedang",
      "Air Conditioner",
    ],
  },
  {
    id: 345,
    name: "Bulanan c",
    rate: "Rp1.500.000/bulan",
    facilities: [
      "Single Large Bed",
      "Kamar Mandi Dalam",
      "Almari Besar",
      "Air Conditioner",
    ],
  },
]

export default function Rooms() {
  return (
    <Section id="rooms" title="Kamar Tersedia">
      <div className="flex flex-col items-center gap-8">
        <Tab.Group>
          <Tab.List className="bg-stone-100 p-4 rounded-md flex gap-4">
            {tabs.map(tab => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  selected
                    ? "px-8 py-4 rounded-md bg-orange-500 hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/50 text-white uppercase font-bold tracking-wide"
                    : "px-8 py-4 rounded-md hover:bg-stone-300 transition-colors text-stone-500 uppercase font-bold tracking-wide"
                }
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="flex flex-wrap justify-center gap-8">
                {dailyRooms.map(room => (
                  <div
                    key={room.id}
                    className="w-[360px] lg:w-[480px] flex flex-col items-center gap-4 p-8 rounded-md border border-stone-100 hover:shadow-md transition-shadow text-center"
                  >
                    <div className="w-full aspect-video relative">
                      <Image
                        className="rounded-md"
                        src="/room-daily.png"
                        alt={room.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <h5 className="font-black text-2xl leading-relaxed">
                      {room.name}
                    </h5>
                    <p className="text-stone-500 uppercase font-bold">
                      {room.rate}
                    </p>
                    <ul className="flex justify-center gap-2 flex-wrap">
                      {room.facilities.map(item => (
                        <li
                          key={item}
                          className="rounded-full px-4 uppercase font-bold tracking-widest text-xs py-2 bg-orange-100 hover:bg-orange-200 text-orange-500 transition-colors"
                        >
                          {item}
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
                    className="w-[360px] lg:w-[480px] flex flex-col items-center gap-4 p-8 rounded-md border border-stone-100 hover:shadow-md transition-shadow text-center"
                  >
                    <div className="w-full aspect-video relative">
                      <Image
                        className="rounded-md"
                        src="/room-daily.png"
                        alt={room.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <h5 className="font-black text-2xl leading-relaxed">
                      {room.name}
                    </h5>
                    <p className="text-stone-500 uppercase font-bold">
                      {room.rate}
                    </p>
                    <ul className="flex justify-center gap-2 flex-wrap">
                      {room.facilities.map(item => (
                        <li
                          key={item}
                          className="rounded-full px-4 uppercase font-bold tracking-widest text-xs py-2 bg-orange-100 hover:bg-orange-200 text-orange-500 transition-colors"
                        >
                          {item}
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
