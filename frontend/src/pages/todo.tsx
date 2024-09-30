import Task from "@/components/Task";
import Main from "@/containers/Main";
import { getTodos } from "@/services/todo";
import { ITodo } from "@/types/ITodo";
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
    </Main>
  );
};

export default TodoPage;
