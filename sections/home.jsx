import Navbar from '@/components/Navbar'
import Section from '@/components/Section'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <Section id="home">
        <div className="absolute top-0 left-0 h-full w-full z-[1]">
            <Image src="/image/bgweb.jpg" alt="background" fill className="object-cover" />
        </div>
        <Navbar />
        <div className="relative h-[70vh] z-[10] flex justify-center items-center">
            <div className="flex flex-col justify-center items-center text-center  text-white">
                <h1 className="text-5xl">SERVE YOU BETTER TASTE OF COFFEE</h1>
                <p className="text-2xl mt-2 mb-10 font-md tracking-wider">fresh place to drink coffee</p>
                <Link href="#menu" scroll={false} className="bg-gray-800 px-[2rem] py-[8px] rounded-xl scroll-smoth">
                    <p className="font-semibold tracking-wider">MENU</p>
                </Link>
            </div>
        </div>
    </Section>
  )
}

export default Home