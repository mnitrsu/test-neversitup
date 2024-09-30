import axios from "@/services/axios-local";

import { ITodo } from "@/types/ITodo";

export const getTodos = async () => {
  const res = await axios.get(`/todos`);
  return res?.data;
};

export const getTodo = async (id: string | undefined) => {
  const res = await axios.get(`/todos/${id}`);
  return res?.data;
};

export const postTodo = async (requestData: ITodo) => {
  const res = await axios.post(`/todos`, requestData);
  return res?.data;
};

export const putTodo = async (id: string | undefined, requestData: ITodo) => {
  const res = await axios.put(`/todos/${id}`, requestData);
  return res?.data;
};

export const patchTodo = async (id: string | undefined, requestData: ITodo) => {
  const res = await axios.patch(`/todos/${id}`, requestData);
  return res?.data;
};

export const deleteTodo = async (id: string | undefined) => {
  const res = await axios.delete(`/todos/${id}`);
  return res?.data;
};
