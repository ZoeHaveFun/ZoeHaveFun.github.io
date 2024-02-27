import Head from 'next/head';
import { Quicksand } from 'next/font/google';
import { About, Angle, Hero } from "@/components/sections";

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

      <main style={quicksand.style} className="text-lg font-base leading-snug sm:leading-normal">
        <Hero />
        <Angle bgColor={"bg-main-beige"} coverColor={"bg-main-violet"} clipPath={"polygonA"}/>
        <About />
      </main>
    </>
  )
}
