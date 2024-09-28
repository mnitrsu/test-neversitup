import axios from "@/services/axios";

import { IUsersCreate } from "@/types/IUsersCreate";

export const postUsersCreate = async (requestData: IUsersCreate) => {
  const res = await axios.post(`/users`, requestData);
  return res?.data;
};
