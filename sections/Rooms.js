import Image from "next/image"

import RoomTypeCard from "components/RoomTypeCard"
import Section from "components/Section"

const roomTypes = [
  {
    name: "Kamar Harian",
    img: "/room-daily.png",
    rate: "Rp150.000/hari",
  },
  {
    name: "Kamar Bulanan",
    img: "/room-monthly.png",
    rate: "Rp1.000.000/bulan",
  },
]

export default function Rooms() {
  return (
    <Section id="rooms" title="Kamar Tersedia">
      <div className="flex flex-wrap justify-center gap-16">
        {roomTypes.map(room => (
          <RoomTypeCard
            key={room.name}
            img={room.img}
            rate={room.rate}
            title={room.name}
          />
        ))}
      </div>
    </Section>
  )
}
