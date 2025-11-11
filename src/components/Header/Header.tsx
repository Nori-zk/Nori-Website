import Nori from "../../assets/Nori.svg?react";
import Menu from "../../assets/Menu.svg?react";

const Header = () => {
  return (
    <div className="flex justify-between relative z-5 p-4">
      <div>
        <Nori width={130} height={50} />
      </div>
      <div>{/* <Menu /> */}</div>
    </div>
  );
};

export default Header;
