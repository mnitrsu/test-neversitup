import { ITodo } from "@/types/ITodo";
import { IconCheck, IconCircleFilled, IconSquare, IconSquareCheck } from "@tabler/icons-react";
import { useState } from "react";
import { todoStore } from "@/store/todoStore";
import ModalTask from "@/components/ModalTask";

const RGBcolor = () => {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);
  return "rgb(" + R + "," + G + "," + B + ")";
};

interface ITask extends ITodo {
  stateEditing?: boolean;
}

const Task = ({ id, title = "A", completed, stateEditing }: ITask) => {
  const [randomBGColor, setRandomBGColor] = useState<string>(RGBcolor());
  const [openModal, setOpenModal] = useState<string>("");

  const { pendingComplete, setPendingComplete } = todoStore();

  const FirstCharacter = () => {
    return (
      <div
        style={{ backgroundColor: randomBGColor }}
        className="w-5 h-5 flex items-center justify-center rounded-full p-4 text-xs text-white"
      >
        <p>{title?.substring(0, 1)}</p>
      </div>
    );
  };

  const handleCheck = (e: React.MouseEvent<SVGSVGElement, MouseEvent>, id: string) => {
    e.stopPropagation();
    if (pendingComplete.includes(id)) {
      setPendingComplete(pendingComplete.filter((item) => item !== id));
    } else {
      let temp = pendingComplete;
      temp.push(id);
      setPendingComplete(pendingComplete);
    }
  };

  const handleModal = (id: string) => {
    setOpenModal(id);
  };

  return (
    <>
      {openModal === id && <ModalTask {...{ id, title, setOpenModal }} />}
      <div
        className="flex justify-between items-center gap-2 p-3 mx-3 bg-gray-100 rounded-md relative h-[60px]"
        onClick={() => handleModal(id)}
      >
        {completed ? (
          <IconCheck className="absolute top-1 left-1" size={12} color="green" />
        ) : (
          <IconCircleFilled className="absolute top-1 left-1" size={8} color="orange" />
        )}
        {FirstCharacter()}
        <div className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis">{title}</div>
        <div className="flex flex-col gap-1">
          {stateEditing ? (
            <>
              {pendingComplete.includes(id) ? (
                <IconSquareCheck size={24} onClick={(e) => handleCheck(e, id)} />
              ) : (
                <IconSquare size={24} onClick={(e) => handleCheck(e, id)} />
              )}
            </>
          ) : (
            <>
              <p className="font-bold text-xs text-right">XX XXX</p>
              <p className="text-xs text-right text-gray-400">XX:XX</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Task;
