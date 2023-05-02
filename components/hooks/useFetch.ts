import { useState, useEffect } from "react";

interface Response<T> {
  data: T | null;
}

const useFetch = <T>(url: string, headersParams: object): Response<T> => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: headersParams as HeadersInit,
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        throw new Error(`Error: ${error}`);
      }
    };
    fetchData();
  }, []);

  return { data };
};

export default useFetch;
