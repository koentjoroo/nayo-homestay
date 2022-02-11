import { useTranslation } from "next-i18next"

export default function Hero() {
  const { t } = useTranslation("common")

  return (
    <section
      id="hero"
      className="bg-stone-900 text-white h-screen md:h-[40rem] w-full"
    >
      <div className="mx-auto container text-center h-full flex flex-col items-center justify-center gap-8">
        <h1 className="font-black tracking-tight leading-tight text-[4rem]">
          {t("hero_header")}
        </h1>
        <p className="max-w-prose text-2xl">{t("hero_subheader")}</p>
        <button className="font-bold uppercase tracking-wide text-orange-50 shadow-lg shadow-orange-500/25 px-16 py-4 rounded-full bg-orange-500">
          {t("book_now")}
        </button>
      </div>
    </section>
  )
}
