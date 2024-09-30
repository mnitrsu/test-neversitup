import { ITodo } from "@/types/ITodo";
import { IconCheck, IconCircleFilled } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const RGBcolor = () => {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);
  return "rgb(" + R + "," + G + "," + B + ")";
};

const Task = ({ id, title, completed }: ITodo) => {
  const [randomBGColor, setRandomBGColor] = useState(RGBcolor());

  return (
    <div className="flex justify-between items-center gap-2 p-3 mx-3 bg-gray-100 rounded-md relative">
      {completed ? (
        <IconCheck className="absolute top-1 left-1" size={12} color="green" />
      ) : (
        <IconCircleFilled className="absolute top-1 left-1" size={8} color="orange" />
      )}
      <div
        style={{ backgroundColor: randomBGColor }}
        className="w-5 h-5 flex items-center justify-center rounded-full p-4 text-xs text-white"
      >
        <p>{title?.substring(0, 1)}</p>
      </div>
      <div className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis">{title}</div>
      <div className="flex flex-col gap-1">
        <p className="font-bold text-xs text-right">XX XXX</p>
        <p className="text-xs text-right text-gray-400">XX:XX</p>
      </div>
    </div>
  );
};

export default Task;
