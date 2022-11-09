import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    // <div className="grid lg:grid-cols-2 xl:grid-cols-3 text-white items-center flex-1 pb-[15rem] p-4">
    //   <div className="flex flex-col mb-[2rem] lg:mb-0 justify-center items-center lg:items-start font-bold ">
    //     <div className="text-4xl md:text-6xl lg:text-5xl tracking-wider 4xl:text-7xl space-y-4">
    //       <h1>Create and sell</h1>
    //       <h1>your Rare NFTs</h1>
    //       <h1>Collection</h1>
    //     </div>
    //     <p className="text-lg w-3/4 lg:w-full my-5 text-gray-300 font-semibold text-center lg:text-left">
    //       Lorem ipsum, dolor sit amet consectetur adipisicing Lorem, ipsum.
    //       Lorem, ipsum dolor.
    //     </p>
    //     <button className="bg-purple-600 py-4 px-6 rounded-full text-xl text-white bg-gradient-to-b from-[#9939D0] to-[#7927E8]">
    //       Explore Now
    //     </button>
    //   </div>
    //   <div className="flex items-center gap-10 lg:ml-5 justify-center lg:justify-start">
    //     <Image
    //       height={250}
    //       width={250}
    //       className="hidden z-50 shadow-2xl md:inline-block shadow-[#63556F] rounded-2xl lg:-mt-[15rem] xl:h-[25rem] xl:w-[25rem] 4xl:h-[30rem] 4xl:w-[30rem]"
    //       src="https://i.pinimg.com/736x/93/8e/b4/938eb42b1dd3cc2355dc1d5efebad7d4.jpg"
    //       alt="ape-nft"
    //     />

    //     <Image
    //       height={250}
    //       width={250}
    //       className="z-50 shadow-2xl shadow-[#79D1EF] rounded-2xl xl:h-[25rem] xl:w-[25rem] 4xl:h-[30rem] 4xl:w-[30rem] "
    //       src="https://www.mast-jaegermeister.de/medien/2022/06/jaegermeister_hape_nighttime.jpg"
    //       alt="ape-nft"
    //     />
    //   </div>
    // </div>
    <div className="w-full lg:bg-green-500 xl:bg-blue-500 2xl:bg-pink-400 h-full lg:flex">
      <div className="px-4 space-y-10 lg:flex lg:space-y-0 lg:items-center">
        <div className="flex flex-col text-5xl md:text-6xl lg:text-6xl text-center lg:text-left text-white tracking-wide lg:w-1/2">
          <span>Create and sell</span>
          <span>your Rare NFTs</span>
          <span>Collection</span>
          <p className="text-base md:text-lg my-5 text-gray-500 lg:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing Lorem, ipsum.
            Lorem, ipsum dolor.
          </p>
          <button className="font-semibold bg-purple-600 py-3 px-5 self-center lg:self-start rounded-full text-base md:text-lg text-white bg-gradient-to-b from-[#9939D0] to-[#7927E8]">
            Explore Now
          </button>
        </div>
        <div className="p-5 flex items-center gap-4 md:gap-6 justify-center lg:justify-end lg:p-0">
          <Image
            className="rounded-full lg:rounded-md shadow-2xl shadow-neutral-50 md:h-[250px] md:w-[250px] z-50 lg:h-[300px] lg:w-[300px] xl:h-[350px] xl:w-[350px]"
            height={150}
            width={150}
            src="https://i.pinimg.com/736x/93/8e/b4/938eb42b1dd3cc2355dc1d5efebad7d4.jpg"
            alt="ape-nft"
          />
          <Image
            className="rounded-full lg:rounded-md mt-[2rem] md:mt-[5rem] shadow-2xl shadow-[#79D1EF] md:h-[250px] md:w-[250px] z-50 lg:h-[300px] lg:w-[300px] xl:h-[300px] xl:w-[300px]"
            height={150}
            width={150}
            src="https://www.mast-jaegermeister.de/medien/2022/06/jaegermeister_hape_nighttime.jpg"
            alt="ape-nft"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
