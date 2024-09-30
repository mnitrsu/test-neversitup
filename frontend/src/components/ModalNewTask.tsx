import { todoStore } from "@/store/todoStore";
import { Dispatch, SetStateAction, useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { postTodo } from "@/services/todo";

interface IModalNewTask {
  setOpenNewTask: Dispatch<SetStateAction<boolean>>;
}

interface INewTask {
  title: string;
}

const ModalNewTask = ({ setOpenNewTask }: IModalNewTask) => {
  const ref = useRef(null);

  useClickOutside(ref, () => setOpenNewTask(false));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewTask>();

  const { fetch } = todoStore();

  const onSubmit: SubmitHandler<INewTask> = ({ title }) => {
    postTodo({
      id: uuidv4(),
      title,
      completed: false,
    })
      .then(() => {
        fetch();
        setOpenNewTask(false);
      })
      .catch((e) => {
        alert(JSON.stringify(e));
      });
  };

  return (
    <div className="absolute bg-black bg-opacity-50 top-0 left-0 w-full h-full z-10">
      <div className="absolute top-0 right-0 z-20 bg-gray-100 w-9/12 h-full rounded-lg drop-shadow-lg" ref={ref}>
        <div className="flex flex-col h-full p-4 pt-0">
          <p className="text-bold text-xl my-2">NEW TASK</p>
          <form className="flex flex-1 flex-col py-2" onSubmit={handleSubmit(onSubmit)}>
            <p className="text-sm">Title</p>
            <textarea
              className="border p-2 rounded-md mt-2"
              placeholder="Input something? ->"
              {...register("title", { required: true })}
            />
            <div className="flex-1"></div>
            <div className="flex justify-evenly">
              <button type="submit" className="bg-sky-500 w-min text-white px-8 py-2 rounded-3xl">
                Add
              </button>
              <button className="w-min text-black px-8 py-2 rounded-3xl" onClick={() => setOpenNewTask(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalNewTask;
