import Header from "@/components/Header";
import { getTodos } from "@/services/todo";
import { ITodo } from "@/types/ITodo";
import { IconArrowLeft } from "@tabler/icons-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Task from "./Task";

interface IDoneTask {
  openNav: boolean;
  setOpenNav: Dispatch<SetStateAction<boolean>>;
}

const DoneTask = ({ openNav, setOpenNav }: IDoneTask) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    getTodos().then((res: ITodo[]) => {
      setTodos(res.filter((item) => item.completed));
    });
  }, []);

  return (
    <div className={`w-full h-full bg-white absolute top-0 ${openNav ? "left-0" : "left-full"}`}>
      <Header
        title="DONE TASKS"
        icon={<IconArrowLeft color="gray" />}
        position="left"
        onClick={() => setOpenNav((prev) => !prev)}
      />
      <div className="flex flex-col gap-2 py-2">
        {todos.map(({ id, title, completed }, index) => {
          return <Task {...{ id, title, completed }} />;
        })}
      </div>
    </div>
  );
};

export default DoneTask;
