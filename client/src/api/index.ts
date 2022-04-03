import { Paginated, Print } from "./types";
const BASE_URL = "http://localhost:8000/api";

export const printsList =
  (page: string) => async (): Promise<Paginated<Print>> => {
    const res = await fetch(`${BASE_URL}/prints?page=${page}`);
    return res.json();
  };
