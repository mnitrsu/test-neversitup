import Cookies from "js-cookie";
import { Base64 } from "js-base64";

export const encode = (value: string) => {
  return Base64.encodeURI(value.toString());
};

export const decode = (value: string) => {
  return Base64.decode(value);
};

export const isLoggedIn = () => {
  return Cookies.get("login-information") ? true : false;
};
