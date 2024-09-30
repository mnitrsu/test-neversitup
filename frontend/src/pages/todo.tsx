import BottomDrawer from "@/components/BottomDrawer";
import Task from "@/components/Task";
import BasicTemplate from "@/containers/BasicTemplate";
import { useEffect, useState } from "react";
import { todoStore } from "@/store/todoStore";
import { getTodos } from "@/services/todo";
import { ITodo } from "@/types/ITodo";
import { IconPackageExport } from "@tabler/icons-react";

interface ITodoPage {
  _SSRTODO: ITodo[];
}

const TodoPage = ({ _SSRTODO }: ITodoPage) => {
  const [stateEditing, setStateEditing] = useState<boolean>(false);

  const { raw_todo, todo, fetch } = todoStore();

  useEffect(() => {
    fetch();
  }, [fetch]);

  const handleExport = () => {
    let temp = Object.keys(raw_todo[0]);
    let columns = temp.map((item) => {
      return { key: item.toLowerCase(), name: item.toUpperCase() };
    });
    let data = raw_todo.map(({ id, title, completed }) => {
      return [id, title, completed];
    });
    let object = {
      columns,
      data,
    };
    const blob = new Blob([JSON.stringify(object, null, 2)], { type: "application/json" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = new Date().getTime() + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };

  return (
    <BasicTemplate>
      <div
        className="h-[60px] flex items-center justify-center bg-lime-500 px-3 mx-3 border rounded-md mb-2"
        onClick={() => handleExport()}
      >
        <IconPackageExport color="white" />
        <span className="text-white">&nbsp;Export</span>
      </div>
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
    props: { _SSRTODO: response.filter((item: ITodo) => item.completed === false) },
  };
}
