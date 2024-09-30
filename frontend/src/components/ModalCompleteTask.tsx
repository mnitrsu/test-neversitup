import Header from "@/components/Header";
import { IconArrowLeft } from "@tabler/icons-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Task from "./Task";
import { todoStore } from "@/store/todoStore";

interface IModalCompleteTask {
  openCompleteTask: boolean;
  setOpenCompleteTask: Dispatch<SetStateAction<boolean>>;
}

const ModalCompleteTask = ({ openCompleteTask, setOpenCompleteTask }: IModalCompleteTask) => {
  const { todoComplete, fetch } = todoStore();

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <div className={`w-full h-full bg-white absolute top-0 ${openCompleteTask ? "left-0" : "left-full"}`}>
      <Header
        title="DONE TASKS"
        icon={<IconArrowLeft color="gray" />}
        position="left"
        onClick={() => setOpenCompleteTask((prev) => !prev)}
      />
      <div className="flex flex-col gap-2 py-2">
        {todoComplete.map(({ id, title, completed }) => {
          return <Task {...{ id, title, completed }} key={id} />;
        })}
      </div>
    </div>
  );
};

export default ModalCompleteTask;
