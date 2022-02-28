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
      // TODO: Set an error message here.
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
