import EthereumIcon from "../assets/Ethereum_Icon.png";
import MinaIcon from "../assets/Mina_Icon.png";
import Arrow from "../assets/Arrow.svg?react";

const Swap = () => {
  return (
    <div
      className="grid grid-cols-2 grid-rows-2 gap-1 mx-auto scale-50 sm:scale-75 md:scale-90 lg:scale-100"
      style={{ width: "400px", height: "400px" }}
    >
      <div className="flex justify-center items-center -ml-16 lg:-ml-32 w-full h-full">
        <img
          src={MinaIcon}
          className="flex-shrink-0 object-cover"
          style={{
            width: "275px",
            height: "275px",
            minWidth: "275px",
            minHeight: "275px",
          }}
        />
      </div>
      <div className="flex justify-center items-center -ml-16 lg:-ml-32 w-full h-full">
        <Arrow className="w-40 rotate-[170deg] flex-shrink-0" />
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <Arrow className="w-40 rotate-[360deg] flex-shrink-0" />
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={EthereumIcon}
          className="flex-shrink-0 object-cover"
          style={{
            width: "208px",
            height: "208px",
            minWidth: "208px",
            minHeight: "208px",
          }}
        />
      </div>
    </div>
  );
};

export default Swap;
