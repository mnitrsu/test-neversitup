import axios from "@/services/axios";

import { IRegisterLoginForm } from "@/types/IRegisterLoginForm";

export const postAuthLogin = async (requestData: IRegisterLoginForm) => {
  const res = await axios.post(`/auth/login`, requestData);
  return res?.data;
};
