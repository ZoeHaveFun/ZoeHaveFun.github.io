import Image from "next/image";
import { FC, ReactNode } from "react";
import portraitPic from "../../public/portrait.jpg";
import { icons, IconsSVG } from "./icons";

type IconBoxProps = {
  iconName: string
}

const IconBox: FC<IconBoxProps> = ({iconName}) => {
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
    after:content-[''] after:block after:h-full ${coverColor} ${clipPath}
    `}></div>
  );
};

export const Hero: FC = () => {
  return (
    <section className="pt-28 pb-24 relative bg-main-violet text-white">
      <div className="max-w-7xl mx-auto px-8% text-5xl leading-normal">
        <h1>
          <span>Hello, I am Zoe</span>
          <br />
          I'm a
          <span className="font-bold"> Designer turned Enginner </span>
          and
        </h1>
      </div>
    </section>
  );
};

export const About: FC = () => {
  return (
    <section className="bg-main-beige py-20">
      <div className="max-w-7xl mx-auto px-8%">
        <h2 className="pb-2">ABOUT</h2>
        <h3 className="text-4xl font-bold text-main-violet">Who is Zoe?</h3>
        <div className="mt-10 flex justify-between flex-col sm:flex-row">
          <div className="sm:w-1/4 max-w-[300px] mx-auto">
            <Image
              src={portraitPic}
              alt="Portrait"
              className="rounded-full object-contain" />
          </div>
          <div className="sm:w-3/4 sm:pl-[5%] sm:pt-0 pt-4 leading-6">
            <h2 className="text-2xl font-bold text-violet-dark">A curiosity-driven Front-End Developer with design chops.</h2>
            <p className="text-xl py-4">
              I'm passionate about  bringing both the technical and visual aspects of digital products to life. User experience, beautiful pixels and writing clean accessible, human code matters to me. I sweat the details. And as a follower of John Maeda’s
              <a href="http://lawsofsimplicity.com/" target="_blank" aria-label="open link to laws of simplicity website.">laws of simplicity</a>
              , I agree that less is more.
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
      <div className="max-w-7xl mx-auto px-8%">
        <h2 className="text-white pb-2">SKILLS & TOOLS</h2>
        <h3 className="text-4xl font-bold text-violet-dark">
          My toolbox & Things i can do
        </h3>
        <p className="pt-4">
          The skills, tools and technologies I use to bring your products to life:
        </p>
        <div className="my-10 grid gap-x-3 sm:grid-cols-4 lg:grid-cols-8 grid-cols-2">
          {
            icons.map(({name})=> (
              <IconBox iconName={name} />
            ))
          }
        </div>
      </div>
    </section></>
  );
};
