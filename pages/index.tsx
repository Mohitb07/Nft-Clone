import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import heroLeft from "../public/images/hero-left.png";

export default function Home() {
  return (
    <div className="hero-background h-screen relative lg:px-[3rem] xl:px-[5rem] flex flex-col w-full overflow-x-hidden">
      <Image
        src={heroLeft}
        height={300}
        width={300}
        className="hidden md:block absolute rotate-90 top-10 right-5"
        alt="wave"
      />
      <Image
        src={heroLeft}
        height={300}
        width={300}
        className="absolute rotate-90 left-0 bottom-0 md:left-0 md:bottom-0 md:top-1/2 lg:bottom-1/2 lg:left-1/2 md:right-1/2"
        alt="wave"
      />
      <Navbar />
      <Hero/>
    </div>
  );
}
