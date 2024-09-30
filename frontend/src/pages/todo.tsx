import BottomDrawer from "@/components/BottomDrawer";
import Task from "@/components/Task";
import BasicTemplate from "@/containers/BasicTemplate";
import { useEffect, useState } from "react";
import { todoStore } from "@/store/todoStore";
import { getTodos } from "@/services/todo";
import { ITodo } from "@/types/ITodo";

interface ITodoPage {
  _SSRTODO: ITodo[];
}

const TodoPage = ({ _SSRTODO }: ITodoPage) => {
  const [stateEditing, setStateEditing] = useState<boolean>(false);

  const { todo, fetch } = todoStore();

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <BasicTemplate>
      <div className="flex flex-col gap-2">
        {(_SSRTODO || todo).map(({ id, title, completed }) => {
          return <Task {...{ id, title, completed, stateEditing }} key={id} />;
        })}
      </div>
      <BottomDrawer {...{ stateEditing, setStateEditing }} />
    </BasicTemplate>
  );
};

export default TodoPage;

export async function getServerSideProps() {
  const response = await getTodos();
  return {
    props: { _SSRTODO: response },
  };
}
