import Section from "components/Section"
import { useTranslation } from "next-i18next"
import { useEffect, useRef, useState } from "react"

export default function Location() {
  const { t } = useTranslation("common")
  const [showMap, setShowMap] = useState(false)
  const thisEl = useRef(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const callback = ([entry]) => {
        if (entry.isIntersecting && !showMap) setShowMap(entry.isIntersecting)
      }
      const observer = new IntersectionObserver(callback)
      thisEl.current && observer.observe(thisEl.current)

      return () => observer.unobserve(thisEl.current)
    }
  }, [])

  return (
    <Section id="location" title={t("homestay_location")}>
      <div className="flex flex-col gap-8" ref={thisEl}>
        {showMap && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.098708850298!2d110.43423951442101!3d-7.7793578943936215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5b05a54ab573%3A0xd219c94d757964eb!2sNayo%20Homestay!5e0!3m2!1sen!2sid!4v1640170643697!5m2!1sen!2sid"
            className="aspect-square w-full rounded-md border-0 lg:aspect-video"
            loading="lazy"
            title={t("nayo_homestay_map")}
            allowFullScreen
          ></iframe>
        )}
        <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:items-start lg:text-left">
          <div className="flex max-w-prose flex-col gap-2">
            <span className="font-bold uppercase tracking-wider text-stone-800">
              {t("address")}
            </span>
            <p className="text-stone-500">
              Jalan Rambutan Nomor 11, Sambelegi Kidul, Maguwoharjo, Kec. Depok,
              Kabupaten Sleman, Daerah Istimewa Yogyakarta
            </p>
          </div>
          <a
            className="font-bold uppercase tracking-widest text-orange-500 hover:text-orange-600"
            href="https://goo.gl/maps/8m5oDT5yLz79WcRy5"
          >
            {t("check_on_gmaps")} &rarr;
          </a>
        </div>
      </div>
    </Section>
  )
}
