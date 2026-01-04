import Nori from "../../assets/Nori.svg?react";
import { PiXLogo } from "react-icons/pi";
import { FaDiscord } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between relative z-5 p-4">
      <div>
        <Nori width={130} height={50} />
      </div>
      <div className="flex w-1/2 justify-end">
        <PiXLogo
          size={40}
          className="text-gray-200/20 m-4 hover:cursor-pointer hover:text-white"
          onClick={() => {
            window.location.href = "https://x.com/nori_zk?s=20";
          }}
        />
        <FaDiscord
          size={40}
          className="text-gray-200/20 m-4 hover:cursor-pointer hover:text-[#7289da]"
          onClick={() => {
            window.location.href = "https://discord.gg/3MnGpT4w9a";
          }}
        />
      </div>
    </div>
  );
};

export default Header;
