import { useQuery } from "react-query";
import { printsList } from "../api";

const cacheOptions = {
  cacheTime: 1000 * 5,
  stateTime: 1000 * 60 * 10,
};

export const usePrints = () => {
  const useList = (page: string) => {
    return useQuery(["prints", page], printsList(page), cacheOptions);
  };

  return {
    list: useList,
  };
};
