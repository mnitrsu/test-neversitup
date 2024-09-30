import { ReactNode } from "react";

interface IHeader {
  title: string;
  icon: ReactNode;
  position: "left" | "right";
  onClick: () => void;
}
const Header = ({ title, icon, position, onClick }: IHeader) => {
  return (
    <div className="flex items-center justify-center relative">
      <div>
        <p className="m-2 text-xl">{title}</p>
      </div>
      <div className={`absolute top-1/2 -translate-y-1/2 ${position === "left" ? "left-3" : "right-3"}`}>
        <div className="cursor-pointer" onClick={onClick}>{icon}</div>
      </div>
    </div>
  );
};

export default Header;
