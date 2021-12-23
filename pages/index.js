import Head from "next/head"
import Image from "next/image"

import Layout from "components/Layout"
import Hero from "sections/Hero"
import Rooms from "sections/Rooms"
import Facilities from "sections/Facilities"
import Location from "sections/Location"
import Reviews from "sections/Reviews"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Rooms />
      <Facilities />
      <Location />
      <Reviews />
    </Layout>
  )
}
