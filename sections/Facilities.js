import { createElement } from "react"

import shape from "blobshape"
import { FaToilet } from "react-icons/fa"
import { FiWind, FiTv, FiWifi } from "react-icons/fi"
import { BiCloset, BiBed } from "react-icons/bi"
import { MdOutlineShower, MdOutlineKitchen } from "react-icons/md"

import Section from "components/Section"

const facilities = [
  { icon: FiWind, name: "Air Conditioner" },
  { icon: FiTv, name: "Televisi" },
  { icon: BiCloset, name: "Almari" },
  { icon: BiBed, name: "Spring Bed" },
  { icon: FaToilet, name: "Kamar Mandi Dalam" },
  { icon: MdOutlineShower, name: "Shower Air Hangat" },
  { icon: MdOutlineKitchen, name: "Dapur Bersama" },
  { icon: FiWifi, name: "Free WiFi & Listrik" },
]

export default function FacilitiesSection() {
  return (
    <Section id="facilities" title="Fasilitas Penginapan">
      <div className="flex justify-center flex-wrap gap-8">
        {facilities.map((facility, index) => (
          <div
            key={facility.name}
            className="w-64 flex flex-col items-center gap-8 p-8 rounded-md border border-stone-200 hover:shadow-md transition-shadow"
          >
            <div className="relative flex justify-center pt-4 items-center">
              <svg
                viewBox="0 0 32 32"
                className="-z-10 absolute w-16 fill-orange-100"
              >
                <path
                  d={
                    shape({ size: 32, growth: 8, edges: 8, seed: "42" + index })
                      .path
                  }
                />
              </svg>
              {createElement(facility.icon, {
                className: "text-2xl text-orange-500",
              })}
            </div>
            <p className="text-xs uppercase font-bold text-stone-800 tracking-widest">
              {facility.name}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
