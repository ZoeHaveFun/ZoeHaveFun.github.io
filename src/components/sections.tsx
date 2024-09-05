import Image from "next/image";
import { FC, useEffect, useState } from "react";
import portraitPic from "../../public/portrait.jpg";
import SéSann from "../../public/projects_view/SéSann.png";
import STYLiSH from "../../public/projects_view/STYLiSH.png";
import PM_Tool from "../../public/projects_view/Pallets-Management-Tool.png";
import Chickin_Now from "../../public/projects_view/Chick-in-Now.png";

import { GithubIcon, icons, IconsSVG, ReactIcon, VueIcon, WebsiteIcon } from "./icons";
import TextTransition, { presets } from "./textTransition";

type IconBoxProps = {
  iconName: string
}

const IconBox: FC<IconBoxProps> = ({ iconName }) => {
  return (
    <div className="flex flex-col text-center h-36">
      {IconsSVG(iconName)}
      <p className="mt-4 leading-tight">{iconName}</p>
    </div>
  );
};

type AngleProps = {
  bgColor: string,
  coverColor: string;
  clipPath: string;
  rwd: string;
};

export const Angle: FC<AngleProps> = ({ bgColor, coverColor, clipPath, rwd }) => {
  return (
    <div className={`w-full ${rwd} ${bgColor} 
    after:content-[&apos;&apos;] after:block after:h-full ${coverColor} ${clipPath}
    `}></div>
  );
};

export const Hero: FC = () => {
  const [index, setIndex] = useState(0)
  const Identities = [
    "Front-End Engineer",
    "Industrial Designer",
    "Animation Fan",
    "Cat Servant",
    "ENFJ",
    "Bibliophile",
    "Skipping Aficionado"
  ]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(i => i + 1)
    }, 2000)

    return () => clearInterval(intervalId)
  }, [])
  return (
    <section className="pt-28 pb-24 relative bg-main-violet text-white">
      <div className="max-w-7xl mx-auto px-wrapper text-5xl font-bold leading-normal">
        <h1>
          <span>Hello, I am Zoe</span>
          <br />
          I&apos;m a&nbsp;
          <TextTransition
            inline
            className="transition-text"
            // delay={200}
            springConfig={presets.wobbly}>
            {Identities[index % Identities.length]}
          </TextTransition>
        </h1>
      </div>
    </section>
  );
};

export const About: FC = () => {
  return (
    <section className="bg-main-beige py-20">
      <div className="max-w-7xl mx-auto px-wrapper">
        <h2 className="pb-2">ABOUT</h2>
        <h3 className="text-4xl font-bold text-main-violet">Who is Zoe?</h3>
        <div className="mt-10 flex justify-between flex-col sm:flex-row">
          <div className="sm:w-1/4 max-w-[300px] mx-auto">
            <Image
              src={portraitPic}
              alt="Portrait"
              className="rounded-full object-contain" />
          </div>
          <div className="sm:w-3/4 sm:pl-[5%] sm:pt-0 pt-4 leading-5 transition">
            <h2 className="text-2xl font-bold text-violet-dark">A curiosity-driven Front-End Developer with design chops.</h2>
            <p className="py-4">
              I&apos;m passionate about  bringing both the technical and visual aspects of digital products to life. User experience, beautiful pixels and writing clean accessible, human code matters to me. I sweat the details. And as a follower of John Maeda’s
              <a href="http://lawsofsimplicity.com/" target="_blank" aria-label="open link to laws of simplicity website." className="text-main-violet font-bold hover:text-white">
                Laws of simplicity
              </a>
              , I agree that less is more.
            </p>
            <br />
            {/* <p>
              I have a BA in Product Designer from
              <a href="https://www.isu.edu.tw/pages/" target="_blank" aria-label="open link to I-Shou University&apos;s website." className="text-main-violet font-bold hover:text-white">I-Shou University</a>
            </p> */}
            <p>
              I&apos;m happiest when I&apos;m creating, learning, exploring and thinking about how to make things better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Skills: FC = () => {
  return (
    <><section className="bg-main-green py-20">
      <div className="max-w-7xl mx-auto px-wrapper">
        <h2 className="text-white pb-2">SKILLS & TOOLS</h2>
        <h3 className="text-4xl font-bold text-violet-dark pb-4">
          My toolbox & Things i can do
        </h3>
        <p>
          The skills, tools and technologies I use to bring your products to life:
        </p>
        <div className="my-10 grid gap-x-3 sm:grid-cols-4 lg:grid-cols-8 grid-cols-2">
          {
            icons.map(({ name }) => (
              <IconBox iconName={name} key={name} />
            ))
          }
        </div>
      </div>
    </section></>
  );
};

export const Projects: FC = () => {
  return (
    <section className="bg-green-light py-20">
      <div className="max-w-7xl mx-auto px-wrapper">
        <h2 className="pb-2 text-[#638361]">PROJECTS</h2>
        <h3 className="text-4xl font-bold text-violet-dark pb-4">
          A Selection Of Stuff I&apos;ve Built
        </h3>

        <div className="grid gap-20">
          {/* SéSann */}
          <div className="flex">
            <div className="w-[45%]">
              <span className="text-2xl">SéSann</span>
              <p className="mt-2">
                This platform addresses the frustration of arriving at a laundromat only to find all machines in use, offering services for checking availability, reserving machines, and providing end-of-cycle reminders. Additionally, it includes a management backend for laundromat owners to collect and analyze machine usage data, enhancing overall efficiency and user experience.
              </p>
              <div className="pt-2 grid grid-flow-col auto-cols-min gap-x-2">
                <a href="https://github.com/ZoeHaveFun/SeSann" target="_blank" aria-label="open link to SéSann github repo.">
                  <GithubIcon className="fill-white h-5 hover:fill-slate-500" />
                </a>
                <a href="https://laundry-27ace.web.app" target="_blank" aria-label="open linke to SéSann website">
                  <WebsiteIcon className="fill-white h-5 hover:fill-slate-500" />
                </a>
                <ReactIcon className="fill-white h-5" />
              </div>
            </div>
            <div className="w-[55%]">
              <Image
                src={SéSann}
                className="object-contain"
                alt="devices showing screenshots of SéSann." />
            </div>
          </div>
          {/* STYLiSH */}
          <div className="flex">
            <div className="w-[55%]">
              <Image
                src={STYLiSH}
                className="object-contain"
                alt="devices showing screenshots of STYLiSH." />
            </div>
            <div className="w-[45%]">
              <span className="text-2xl">STYLiSH</span>
              <p>
                This online shopping website integrates Facebook SDK for third-party login and TapPay SDK for credit card payments, ensuring seamless and secure transactions.
              </p>
              <div className="pt-2 grid grid-flow-col auto-cols-min gap-x-2">
                <a href="https://github.com/ZoeHaveFun/SeSann" target="_blank" aria-label="open link to SéSann github repo.">
                  <GithubIcon className="fill-white h-5 hover:fill-slate-500" />
                </a>
                <a href="https://zoehavefun.github.io/Front-End-Class-Batch16/students/zoe/" target="_blank" aria-label="open linke to SéSann website">
                  <WebsiteIcon className="fill-white h-5 hover:fill-slate-500" />
                </a>
                <ReactIcon className="fill-white h-5" />
              </div>
            </div>
          </div>
          {/* Pallets-Management-Tool */}
          <div className="flex">
            <div className="w-[45%]">
              <span className="text-2xl">
                Pallets-Management-Tool
              </span>
              <p>
                Utilize pallet management tools to track cargo flow and mitigate loss or damage commonly occurring between factories and dealers. These tools feature a hierarchical permission management structure enabling different user classes to access specific functions.
              </p>
              <div className="pt-2 grid grid-flow-col auto-cols-min gap-x-2">
                <a href="https://github.com/ZoeHaveFun/Pallets-Management-Tool" target="_blank" aria-label="open link to SéSann github repo.">
                  <GithubIcon className="fill-white h-5 hover:fill-slate-500" />
                </a>
                {/* <a href="https://zoehavefun.github.io/Front-End-Class-Batch16/students/zoe/" target="_blank" aria-label="open linke to SéSann website">
                  <WebsiteIcon className="fill-white h-5 hover:fill-slate-500" />
                </a> */}
                {/* <ReactIcon className="fill-white h-5" /> */}
              </div>
            </div>
            <div className="w-[55%]">
              <Image
                src={PM_Tool}
                className="object-contain"
                alt="devices showing screenshots of STYLiSH." />
            </div>
          </div>
          {/* Chick-in-Now */}
          <div className="flex">
            <div className="w-[55%]">
              <Image
                src={Chickin_Now}
                className="object-contain"
                alt="devices showing screenshots of STYLiSH." />
            </div>
            <div className="w-[45%]">
              <span className="text-2xl">Chick-in-Now</span>
              <p>
                Amid the epidemic, remote work is prevalent, and online check-in platforms enable seamless record-keeping irrespective of location.
              </p>
              <div className="pt-2 grid grid-flow-col auto-cols-min gap-x-2">
                <a href="https://github.com/ZoeHaveFun/Chick-in-Now" target="_blank" aria-label="open link to SéSann github repo.">
                  <GithubIcon className="fill-white h-5 hover:fill-slate-500" />
                </a>
                {/* <a href="https://zoehavefun.github.io/Front-End-Class-Batch16/students/zoe/" target="_blank" aria-label="open linke to SéSann website">
                  <WebsiteIcon className="fill-white h-5 hover:fill-slate-500" />
                </a> */}
                <VueIcon className="fill-white h-5" />
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export const Experience: FC = () => {
  return (
    <section className="bg-violet-ash py-20">
      <div className="max-w-7xl mx-auto px-wrapper">
        <h2 className="pb-2 text-green-light">EXPERIENCE</h2>
        <div className="p-2 border-b-2 border-violet-dark font-semibold ">
          <h3 className="text-2xl">Genki</h3>
          <p className="text-sm">2023 APR - 2024 AUG | Taipei, Taiwan</p>
          <p className="text-main-beige">Front-End Engineer</p>
        </div>
        <div className="p-2 border-b-2 border-violet-dark font-semibold ">
          <h3 className="text-2xl">Genki</h3>
          <p className="text-sm">2022 SEP - 2023 APR | Taipei, Taiwan</p>
          <p className="text-main-beige">Front-End Engineer</p>
        </div>
        <div className="p-2 border-b-2 border-violet-dark font-semibold ">
          <h3 className="text-2xl">AppWorks School</h3>
          <p className="text-sm">2022 APR - 2022 AUG | Taipei, Taiwan</p>
          <p className="text-main-beige">Front-End Engineer, Trainee</p>
        </div>
        <div className="p-2 border-b-2 border-violet-dark font-semibold ">
          <h3 className="text-2xl">Whisbih International Enterprise</h3>
          <p className="text-sm">2021 FEB - 2022 MAR | Kaohsiung, Taiwan</p>
          <p className="text-main-beige">Front-End Engineer</p>
        </div>
      </div>
    </section>
  );
};
