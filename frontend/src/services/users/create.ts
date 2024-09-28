import axios from "@/services/axios";

import { IRegisterLoginForm } from "@/types/IRegisterLoginForm";

export const postUsersCreate = async (requestData: IRegisterLoginForm) => {
  const res = await axios.post(`/users`, requestData);
  return res?.data;
};
