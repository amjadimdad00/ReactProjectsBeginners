import Header from "./Header/Header";
import useFetchData from "../hooks/useFetchData";
import SearchResults from "./SearchResults/SearchResults";

const App = () => {
  const BASE_URL = "https://foodzonebackend.vercel.app";
  const { searchFood, error, loading, filteredData, setLoading, filterFood } =
    useFetchData(BASE_URL + "/api/data");

  return (
    <>
      <Header
        setLoading={setLoading}
        searchFood={searchFood}
        filterFood={filterFood}
      />
      <SearchResults
        data={filteredData}
        error={error}
        loading={loading}
        BASE_URL={BASE_URL}
      />
    </>
  );
};

export default App;
