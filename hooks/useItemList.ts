import useSWR from "swr";
import { Category } from "../app";
import { BASE_URL } from "../constants";
import fetcher from "../lib/fetcher";

export default function useItemList() {
  const { data, error } = useSWR<Category[]>(`${BASE_URL}/categories`, fetcher);

  return {
    itemsByCategories: data,
    isLoading: !error && !data,
    isError: error,
  };
}
