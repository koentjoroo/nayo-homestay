import { useTranslation } from "next-i18next"

export default function Hero() {
  const { t } = useTranslation("common")

  return (
    <section
      id="hero"
      className="bg-fixed bg-joglo-pond bg-cover bg-center text-white h-screen md:h-[40rem] w-full"
    >
      <div className="container flex flex-col items-center justify-center h-full gap-8 mx-auto text-center">
        <h1 className="font-black tracking-tight leading-tight text-[4rem]">
          {t("hero_header")}
        </h1>
        <p className="text-2xl max-w-prose">{t("hero_subheader")}</p>
        <a href="#booking" className="px-16 py-4 font-bold tracking-wide uppercase bg-orange-500 rounded-full shadow-lg text-orange-50 shadow-orange-500/25">
          {t("book_now")}
        </a>
      </div>
    </section>
  )
}
