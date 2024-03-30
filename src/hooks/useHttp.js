import { useState, useEffect } from "react";

const useHttp = (url, input) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  const [isNewInput, setIsNewInput] = useState(false);

  useEffect(() => {
    if (isNewInput) {
      setIsLoading(true);
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
        .then((data) => {
          setIsLoading(false);
          setFetchedData(data);
        })
        .catch((error) => {
          setIsLoading(false);
          console.error(error);
        });
      setIsNewInput(false);
    }
  }, [url, isNewInput]);

  const fetchData = () => {
    setIsNewInput(true);
  };

  return { isLoading, data: fetchedData, fetchData };
};

export default useHttp;
