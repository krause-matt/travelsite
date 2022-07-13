import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [pageLoad, setPageLoad] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setPageLoad(true);
      try {
        const dataResult = await axios.get(url);
        setData(dataResult.data);
      } catch (error) {
        setError(error);
      }
      setPageLoad(false);
    };

    fetchData();
  }, [url]);

  return { data, pageLoad, error };
};

export default useFetch;
