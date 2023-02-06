import Head from 'next/head'
import Homepage from "../sections/home.jsx"
import OurMenu from '@/sections/menu.jsx'
import Dessert from '@/sections/dessert.jsx'
import About from '@/sections/about.jsx'
import Footer from '@/sections/footer.jsx'

export default function Home() {
  return (
    <>
      <Head>
        <title>Freshcoffee</title>
        <meta name="description" content="freshcoffee website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
      <OurMenu />
      <Dessert />
      <About />
      <Footer />
    </>
  )
}
