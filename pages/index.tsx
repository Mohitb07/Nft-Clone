import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import heroLeft from "../public/images/hero-left.png";

export default function Home() {
  return (
    <div className="hero-background h-screen relative lg:px-[3rem] xl:px-[5rem] flex flex-col w-full overflow-x-hidden">
      <Image
        src={heroLeft}
        height={500}
        width={500}
        className="absolute rotate-90 top-10 right-5"
        alt="wave"
        />
      <Image
        src={heroLeft}
        height={500}
        width={500}
        className="absolute rotate-90 top-1/2 bottom-1/2 left-1/2 right-1/2"
        alt="wave"
      />
      <div className="md:border-b-2 border-gray-800 h-[5rem]">
        <ul className="text-white p-4 flex justify-between items-center">
          <li className="text-3xl tracking-wider flex gap-10 items-center">
            NFTI
            <ul className="items-center md:text-sm xl:text-xl gap-10 text-gray-300 hidden md:flex">
              <li className="">Explore</li>
              <li className="">Features</li>
              <li className="">About Us</li>
              <li className="">Community</li>
            </ul>
          </li>
          <li className="ml-5">
            <ul className="hidden lg:flex items-center lg:gap-5 xl:gap-10">
              <li className="text-xl text-gray-500">
                <BsSearch />
              </li>
              <li>
                <div>
                  <button className="p-2 xl:py-3 xl:px-6 bg-transparent border-2 text-gray-300 border-gray-500 rounded-full font-semibold">
                    Connect Wallet
                  </button>
                </div>
              </li>
              <li className="p-4 bg-violet-600 rounded-full text-xl text-gray-300 bg-gradient-to-r from-[#7927E8] to-[#9939D0]">
                <FiLogOut />
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 text-white items-center flex-1 pb-[15rem] p-4">
        <div className="flex flex-col mb-[2rem] lg:mb-0 justify-center items-center lg:items-start font-bold ">
          <div className="text-4xl md:text-6xl lg:text-5xl tracking-wider 4xl:text-7xl space-y-4">
            <h1>Create and sell</h1>
            <h1>your Rare NFTs</h1>
            <h1>Collection</h1>
          </div>
          <p className="text-lg w-3/4 lg:w-full my-5 text-gray-300 font-semibold text-center lg:text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing Lorem, ipsum.
            Lorem, ipsum dolor.
          </p>
          <button className="bg-purple-600 py-4 px-6 rounded-full text-xl text-white bg-gradient-to-b from-[#9939D0] to-[#7927E8]">
            Explore Now
          </button>
        </div>
        <div className="flex items-center gap-10 lg:ml-5 justify-center lg:justify-start">
          <Image
            height={250}
            width={250}
            className="hidden z-50 shadow-2xl md:inline-block shadow-[#63556F] rounded-2xl lg:-mt-[15rem] xl:h-[25rem] xl:w-[25rem] 4xl:h-[30rem] 4xl:w-[30rem]"
            src="https://i.pinimg.com/736x/93/8e/b4/938eb42b1dd3cc2355dc1d5efebad7d4.jpg"
            alt="ape-nft"
          />

          <Image
            height={250}
            width={250}
            className="z-50 shadow-2xl shadow-[#79D1EF] rounded-2xl xl:h-[25rem] xl:w-[25rem] 4xl:h-[30rem] 4xl:w-[30rem] "
            src="https://www.mast-jaegermeister.de/medien/2022/06/jaegermeister_hape_nighttime.jpg"
            alt="ape-nft"
          />
        </div>
      </div>
    </div>
  );
}
