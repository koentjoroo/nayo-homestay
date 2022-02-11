import shape from "blobshape"
import Section from "components/Section"
import { useTranslation } from "next-i18next"
import { createElement } from "react"
import { BiBed, BiCloset } from "react-icons/bi"
import { FaToilet } from "react-icons/fa"
import { FiTv, FiWifi, FiWind } from "react-icons/fi"
import { MdOutlineKitchen, MdOutlineShower } from "react-icons/md"

const facilities = [
  { icon: FiWind, name: "air_conditioner" },
  { icon: FiTv, name: "television" },
  { icon: BiCloset, name: "closet" },
  { icon: BiBed, name: "spring_bed" },
  { icon: FaToilet, name: "indoor_bathroom" },
  { icon: MdOutlineShower, name: "hot_shower" },
  { icon: MdOutlineKitchen, name: "shared_kitchen" },
  { icon: FiWifi, name: "free_wifi_and_electricity" },
]

export default function FacilitiesSection() {
  const { t } = useTranslation("common")

  return (
    <Section id="facilities" title={t("homestay_facilities")}>
      <div className="flex flex-wrap justify-center gap-8">
        {facilities.map((facility, index) => (
          <div
            key={facility.name}
            className="flex flex-col items-center w-64 gap-8 p-8 transition-shadow border rounded-md border-stone-200 hover:shadow-md"
          >
            <div className="relative flex items-center justify-center pt-4">
              <svg
                viewBox="0 0 32 32"
                className="absolute w-16 -z-10 fill-orange-100"
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
            <p className="text-xs font-bold tracking-widest text-center uppercase text-stone-800">
              {t(facility.name)}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
