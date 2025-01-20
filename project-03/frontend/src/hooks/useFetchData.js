import { useState, useEffect } from "react";

const useFetchData = (url = {}) => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Data on Mount and Update
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const fetchedData = await response.json();
        setData(fetchedData);
        setFilteredData(fetchedData);
      } catch (err) {
        setError(err.message || "Something went wrong");
      }

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, [url]);

  // Filter Through Search
  const searchFood = (e) => {
    setLoading(true);
    const searchValue = e.target.value;

    console.log(searchValue);

    if (searchValue === "") {
      setFilteredData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);

    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  // Filter Through filter btns
  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
  };

  return {
    setLoading,
    filterFood,
    searchFood,
    filteredData,
    loading,
    error,
  };
};

export default useFetchData;
