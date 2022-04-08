import { useTranslation } from "next-i18next"

export default function Hero() {
  const { t } = useTranslation("common")

  return (
    <section
      id="hero"
      className="h-screen w-full bg-joglo-pond bg-cover bg-fixed bg-center text-white md:h-[40rem]"
    >
      <div className="container mx-auto flex h-full flex-col items-center justify-center gap-8 text-center">
        <h1 className="text-5xl font-black leading-tight tracking-tight md:text-[4rem]">
          {t("hero_header")}
        </h1>
        <p className="max-w-prose text-2xl">{t("hero_subheader")}</p>
        <a
          href="#booking"
          className="rounded-full bg-orange-500 px-16 py-4 font-bold uppercase tracking-wide text-orange-50 shadow-lg shadow-orange-500/25"
        >
          {t("book_now")}
        </a>
      </div>
    </section>
  )
}
