import EthereumIcon from "../assets/Ethereum_Icon.png";
import Arrow from "../assets/Arrow.svg?react";

const Swap = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-1 w-fit mx-auto">
      <div className="flex justify-center items-center -ml-32">
        <img src={EthereumIcon} className="w-52 h-52" />
      </div>
      <div className="flex justify-center items-center -ml-32">
        <Arrow className="w-40 rotate-[170deg]" />
      </div>
      <div className="flex justify-center items-center">
        <Arrow className="w-40 rotate-[360deg]" />
      </div>
      <div className="flex justify-center items-center">
        <img src={EthereumIcon} className="w-52 h-52" />
      </div>
    </div>
  );
};

export default Swap;
