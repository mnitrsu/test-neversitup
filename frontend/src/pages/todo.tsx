import Task from "@/components/Task";
import Main from "@/containers/Main";
import { getTodos } from "@/services/todo";
import { ITodo } from "@/types/ITodo";
import { IconCalendar, IconCheck, IconPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const TodoPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    getTodos().then((res: ITodo[]) => {
      setTodos(res.filter((item) => !item.completed));
    });
  }, []);

  return (
    <Main>
      <div className="flex flex-col gap-2">
        {todos.map(({ id, title, completed }, index) => {
          return <Task {...{ id, title, completed }} />;
        })}
      </div>
      <div className="absolute bottom-3 w-full flex justify-evenly mb-4 items-end">
        <div className="w-9 h-9 rounded-full bg-purple-500 flex items-center justify-center drop-shadow-lg">
          <IconCheck color="white" size={18} />
        </div>
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center drop-shadow-lg">
          <IconCalendar color="red" size={28} />
        </div>
        <div className="w-9 h-9 rounded-full bg-sky-500 flex items-center justify-center drop-shadow-lg">
          <IconPlus color="white" size={18} />
        </div>
      </div>
    </Main>
  );
};

export default TodoPage;
