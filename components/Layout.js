import Footer from "components/Footer"
import Navbar from "components/Navbar"
import { useTranslation } from "next-i18next"
import Head from "next/head"
import setting from "../setting"

export default function Layout(props) {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="name" content={props.title} />
        <meta name="description" content={props.description} />
        {/* <meta itemProp="image" content={props?.image} /> */}
      </Head>
      <Navbar />
      {props.children}
      <section className="p-8 lg:p-16">
        <div className="container mx-auto text-center">
          <h2 className="tracking-right mb-8 text-4xl font-bold text-orange-500">
            {t("missing_info_question")}
          </h2>
          <p className="mx-auto max-w-prose text-stone-500">
            {t("missing_info_answer")}
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}

Layout.defaultProps = {
  title: setting?.meta?.title,
  description: setting?.meta?.description,
}
