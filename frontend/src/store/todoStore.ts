import { getTodos } from "@/services/todo";
import { ITodo } from "@/types/ITodo";
import { create } from "zustand";

interface ITodoStore {
  todo: ITodo[];
  todoComplete: ITodo[];
  setTodo: (object: ITodo[]) => void;
  pendingComplete: string[];
  setPendingComplete: (object: string[]) => void;
  fetch: () => void;
}

export const todoStore = create<ITodoStore>((set) => ({
  todo: [],
  todoComplete: [],
  setTodo: (object) => set(() => ({ todo: object })),
  pendingComplete: [],
  setPendingComplete: (object) => set(() => ({ pendingComplete: object })),
  fetch: async () => {
    const response = await getTodos();
    set({
      todo: response.filter((item: ITodo) => item.completed === false),
      todoComplete: response.filter((item: ITodo) => item.completed === true),
    });
  },
}));
