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
        <meta itemProp="name" content={props.title} />
        <meta itemProp="description" content={props.description} />
        {/* <meta itemProp="image" content={props?.image} /> */}
      </Head>
      <Navbar />
      {props.children}
      <section className="p-8 lg:p-16">
        <div className="text-center container mx-auto">
          <h2 className="text-orange-500 mb-8 tracking-right font-bold text-4xl">
            {t("missing_info_question")}
          </h2>
          <p className="max-w-prose text-stone-500 mx-auto">
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
