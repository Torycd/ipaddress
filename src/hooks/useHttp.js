import { useState, useEffect } from "react";

const useHttp = (url, input) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  const [isNewInput, setIsNewInput] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (isNewInput) {
        setIsLoading(true);
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
          setFetchedData(data);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
        setIsNewInput(false);
      }
    };

    fetchData();
  }, [url, isNewInput]);

  const fetchData = () => {
    setIsNewInput(true);
  };

  return { isLoading, data: fetchedData, fetchData };
};

export default useHttp;
