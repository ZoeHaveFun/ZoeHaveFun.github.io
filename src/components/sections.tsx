import Image from "next/image";
import { FC, ReactNode } from "react";
import portraitPic from "../../public/portrait.jpg";

type AngleProps = {
  bgColor: string,
  coverColor: string;
  clipPath: string;
};

export const Angle: FC<AngleProps> = ({bgColor, coverColor, clipPath}) => {
  return(
    // <div className="w-full sm:h-32 lg:h-40 h-20 bg-main-beige
    // after:content-[''] after:block after:h-20
    // after:bg-main-violet after:clip-path-polygonA
    // "></div>
    <div className={`w-full sm:h-32 lg:h-40 h-20 ${bgColor} 
    after:content-[''] after:block after:h-20
    after:${coverColor} after:clip-path-${clipPath}
    `}></div>
  );
};

export const Hero: FC = () => {
  return (
    <section className="pt-28 pb-24 relative bg-main-violet text-white">
      <div className="max-w-7xl mx-auto px-8% text-5xl leading-normal">
        <h1>
          <span>Hello, I am Zoe</span>
          <br/>
          I'm a 
          <span className="font-bold"> Designer turned Developer </span>
          and
        </h1>
      </div>
    </section>
  );
};

export const About: FC = () => {
  return (
    <section className="bg-main-beige py-24">
      <div className="max-w-7xl mx-auto px-8%">
        <h2>About</h2>
        <h3 className="text-3xl font-bold text-main-violet">Who is Zoe?</h3>
        <div className="mt-10 flex justify-between flex-col sm:flex-row">
          <div className="sm:w-1/4 max-w-[300px] mx-auto">
            <Image
            src={portraitPic}
            alt="Portrait"
            className="rounded-full object-contain"
            />
          </div>
          <div className="sm:w-3/4 sm:pl-[5%] sm:pt-0 pt-4 leading-6">
            <h2 className="text-2xl font-bold text-violet-dark">A curiosity-driven Front-End Developer with design chops.</h2>
            <p className="text-xl py-4">
              I'm passionate about  bringing both the technical and visual aspects of digital products to life. User experience, beautiful pixels and writing clean accessible, human code matters to me. I sweat the details. And as a follower of John Maeda’s 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}