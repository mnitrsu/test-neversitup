import { todoStore } from "@/store/todoStore";
import { IconCalendar, IconCheck, IconChecks, IconPlus, IconX } from "@tabler/icons-react";
import { Dispatch, SetStateAction, useState } from "react";
import { patchTodo } from "@/services/todo";
import ModalNewTask from "./ModalNewTask";

interface IBottomDrawer {
  stateEditing: boolean;
  setStateEditing: Dispatch<SetStateAction<boolean>>;
}

const BottomDrawer = ({ stateEditing, setStateEditing }: IBottomDrawer) => {
  const [openNewTask, setOpenNewTask] = useState<boolean>(false);

  const { pendingComplete, setPendingComplete, fetch } = todoStore();

  const handleCancel = () => {
    setStateEditing(false);
    setPendingComplete([]);
  };

  const handleUpdate = () => {
    pendingComplete.forEach((item) => {
      patchTodo(item, { id: item, completed: true }).then(() => {
        setPendingComplete([]);
        fetch();
      });
    });
  };

  return (
    <>
      {openNewTask && <ModalNewTask {...{ setOpenNewTask }} />}
      <div className="absolute bottom-3 w-full flex justify-evenly mb-4 items-end">
        {stateEditing ? (
          <>
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center drop-shadow-lg cursor-pointer">
              <IconX color="white" size={28} onClick={() => handleCancel()} />
            </div>
            <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center drop-shadow-lg cursor-pointer">
              <IconChecks color="white" size={28} onClick={() => handleUpdate()} />
            </div>
          </>
        ) : (
          <>
            <div className="w-9 h-9 rounded-full bg-purple-500 flex items-center justify-center drop-shadow-lg cursor-pointer">
              <IconCheck color="white" size={18} onClick={() => setStateEditing(true)} />
            </div>
            {/* <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center drop-shadow-lg cursor-pointer">
            <IconCalendar color="red" size={28} />
          </div> */}
            <div className="w-9 h-9 rounded-full bg-sky-500 flex items-center justify-center drop-shadow-lg cursor-pointer">
              <IconPlus color="white" size={18} onClick={() => setOpenNewTask(true)} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BottomDrawer;
