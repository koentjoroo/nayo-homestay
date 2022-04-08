import Layout from "components/Layout"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Booking from "sections/Booking"
import Facilities from "sections/Facilities"
import Hero from "sections/Hero"
import Location from "sections/Location"
import Reviews from "sections/Reviews"
import Rooms from "sections/Rooms"

export default function Home() {
  const { t } = useTranslation("meta")

  return (
    <Layout title={t("index_title")} description={t("index_description")}>
      <Hero />
      <Rooms />
      <Facilities />
      <Location />
      <Reviews />
      <Booking />
    </Layout>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "meta"])),
    },
  }
}
