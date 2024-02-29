import Head from 'next/head';
import { Quicksand } from 'next/font/google';
import { About, Angle, Hero, Skills, Works } from "@/components/sections";

const quicksand = Quicksand({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello, I am Zoe</title>
        <meta name="description" content="Hello, I am Zoe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={quicksand.style} className="text-lg font-base text-main-black leading-snug sm:leading-normal">
        <Hero />
        <Angle bgColor="bg-main-beige" coverColor="after:bg-main-violet" clipPath="after:clip-path-polygonA" rwd="sm:h-32 lg:h-40 h-20" />
        <About />
        <Angle bgColor="bg-main-green" coverColor="after:bg-main-beige" clipPath="after:clip-path-polygonB" rwd="sm:h-14 lg:h-20 h-9" />
        <Skills />
        <Angle bgColor="bg-green-light" coverColor="after:bg-main-green" clipPath="after:clip-path-polygonC" rwd="sm:h-14 lg:h-20 h-9" />
        <Works />
        <Angle bgColor="bg-violet-ash" coverColor="after:bg-green-light" clipPath="after:clip-path-polygonD" rwd="sm:h-14 lg:h-20 h-9" />
      </main>
    </>
  )
}
