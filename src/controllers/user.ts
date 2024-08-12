import axios from "axios";
import { UserType } from "@/types/types";

export const SendReqCreateUser = (link: string, obj: UserType) => {
    const res = axios.post(link, obj);
    window.location.reload();
};

export const SendReqDeleteUser = (link: string, obj: UserType) => {

  try {
    const res = axios.post(link, obj);
    window.location.reload();
  } catch (err) {
    if (err) throw err;
  }
};
