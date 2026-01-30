import Nori from "../../assets/Nori.svg?react";
import { PiXLogo } from "react-icons/pi";
import { FaDiscord } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex items-center justify-between relative z-5 px-4 py-6">
      <div className="ml-4 mt-2">
        <Nori width={130} height={50} />
      </div>
      <div className="flex w-1/2 justify-end">
        <PiXLogo
          size={40}
          className="text-gray-200/20 m-4 hover:cursor-pointer hover:text-white"
          onClick={() => {
            window.open("https://x.com/nori_zk?s=20", "_blank", "noreferrer");
          }}
        />
        <FaDiscord
          size={40}
          className="text-gray-200/20 m-4 hover:cursor-pointer hover:text-[#7289da]"
          onClick={() => {
            window.open(
              "https://discord.gg/3MnGpT4w9a",
              "_blank",
              "noreferrer"
            );
          }}
        />
      </div>
    </div>
  );
};

export default Header;
