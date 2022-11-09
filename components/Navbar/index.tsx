import { BsSearch } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

const Navbar: React.FC = () => {
  return (
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
  );
};
export default Navbar;
