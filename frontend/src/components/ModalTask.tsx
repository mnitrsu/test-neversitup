import { useClickOutside } from "@/hooks/useClickOutside";
import { deleteTodo } from "@/services/todo";
import { IconTrash } from "@tabler/icons-react";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { todoStore } from "@/store/todoStore";

const RGBcolor = () => {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);
  return "rgb(" + R + "," + G + "," + B + ")";
};

interface IModalTask {
  id: string;
  title: string;
  setOpenModal: Dispatch<SetStateAction<string>>;
}

const ModalTask = ({ id, title, setOpenModal }: IModalTask) => {
  const [randomBGColor, setRandomBGColor] = useState<string>(RGBcolor());

  const ref = useRef(null);

  useClickOutside(ref, () => setOpenModal(""));

  const { fetch } = todoStore();

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

  const handleDelete = () => {
    deleteTodo(id).then(() => {
      setOpenModal("");
      fetch();
    });
  };

  return (
    <div className="absolute bg-black bg-opacity-50 top-0 left-0 w-full h-full z-10">
      <div
        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 bg-white w-11/12 h-1/2 rounded-lg drop-shadow-lg"
        ref={ref}
      >
        <div className="flex flex-col h-full">
          <div className="bg-gray-100 flex flex-col items-center justify-center gap-3 py-4">
            {FirstCharacter()}
            <p className="text-bold">XXXXX</p>
            <p className="text-xs">
              <span className="font-bold">XX XXX</span> <span className="text-gray-400">XX:XX</span>
            </p>
          </div>
          <div className="flex flex-col h-full gap-3 py-4">
            <p className="font-bold text-sm text-center">Description</p>
            <p className="flex-1 px-4">{title}</p>
            <button
              className="bg-sky-500 w-min self-center text-white px-8 py-2 rounded-3xl"
              onClick={() => setOpenModal("")}
            >
              Done
            </button>
            <button className="w-min self-center text-white px-8 py-2 rounded-3xl" onClick={() => handleDelete()}>
              <IconTrash color="red" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalTask;
