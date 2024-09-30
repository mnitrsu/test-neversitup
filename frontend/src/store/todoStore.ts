import { getTodos } from "@/services/todo";
import { ITodo } from "@/types/ITodo";
import { create } from "zustand";

interface ITodoStore {
  raw_todo: ITodo[];
  todo: ITodo[];
  todoComplete: ITodo[];
  setTodo: (object: ITodo[]) => void;
  pendingComplete: string[];
  setPendingComplete: (object: string[]) => void;
  fetch: () => void;
}

export const todoStore = create<ITodoStore>((set) => ({
  raw_todo: [],
  todo: [],
  todoComplete: [],
  setTodo: (object) => set(() => ({ todo: object })),
  pendingComplete: [],
  setPendingComplete: (object) => set(() => ({ pendingComplete: object })),
  fetch: async () => {
    const response = await getTodos();
    set({
      raw_todo: response,
      todo: response.filter((item: ITodo) => item.completed === false),
      todoComplete: response.filter((item: ITodo) => item.completed === true),
    });
  },
}));
