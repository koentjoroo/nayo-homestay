import Head from "next/head"

import Navbar from "components/Navbar"
import Footer from "components/Footer"

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>Nayo Guest Home & Exclusive Kost</title>
      </Head>
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}
