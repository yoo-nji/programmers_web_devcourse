import { useEffect, useState } from "react";
import axios from "axios";

interface FetchResponse<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

const useAxios = <T>(url: string): FetchResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(url);
        const result: T = data;
        setData(result);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]); //url이 바뀔 때마다 다시 호출될 수 있도록 의존성 배열에 추가

  return { data, error, loading };
};
export default useAxios;
