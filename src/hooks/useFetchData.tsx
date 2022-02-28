import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (url: string) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(url);
      setData(response);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  console.log(data);

  return {
    data,
    loading,
  };
};

export default useFetchData;
