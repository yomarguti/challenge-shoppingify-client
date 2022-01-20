import useSWR from "swr";
import { BASE_URL } from "../constants";
import fetcher from "../lib/fetcher";

export default function useFetchData<T>(url: string) {
  const { data, error } = useSWR<T>(`${BASE_URL}${url}`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
