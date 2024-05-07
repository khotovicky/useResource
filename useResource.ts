import { useState } from "react";

export function useResource<T>(callback: () => Promise<T>) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<T>();
  const [error, setError] = useState();
  const mutate = (mutateData: (data: T) => T) => {
    const newData = mutateData(data);
    setData(newData);
  };
  callback()
    .then((data) => {
      setData(data);
    })
    .catch((error) => {
      setError(error);
    })
    .finally(() => setIsLoading(false));
  return { isLoading, data, error, mutate };
}
