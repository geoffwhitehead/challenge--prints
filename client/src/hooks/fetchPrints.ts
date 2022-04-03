import { useQuery } from "react-query";
import { printsList } from "../api";

export const usePrints = () => {
  const useList = (page: string) => {
    return useQuery(["prints", page], printsList(page));
  };

  return {
    list: useList,
  };
};
