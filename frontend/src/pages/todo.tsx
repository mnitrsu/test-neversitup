import BottomDrawer from "@/components/BottomDrawer";
import Task from "@/components/Task";
import BasicTemplate from "@/containers/BasicTemplate";
import { useEffect, useState } from "react";
import { todoStore } from "@/store/todoStore";

const TodoPage = () => {
  const [stateEditing, setStateEditing] = useState<boolean>(false);

  const { todo, fetch } = todoStore();

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <BasicTemplate>
      <div className="flex flex-col gap-2">
        {todo.map(({ id, title, completed }) => {
          return <Task {...{ id, title, completed, stateEditing }} key={id} />;
        })}
      </div>
      <BottomDrawer {...{ stateEditing, setStateEditing }} />
    </BasicTemplate>
  );
};

export default TodoPage;
