import PropTypes from "prop-types";
import Card from "./Card";
import Button from "../Button/Button";

const SearchResults = ({ data, loading, error, BASE_URL }) => {
  return (
    <div className="h-full min-h-[calc(100vh-231px)] bg-cover bg-[url(/bg.png)] bg-[#323334] px-2">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-y-8 gap-x-5 justify-center items-center pt-20 pb-8">
          {!loading ? (
            data.length > 0 ? (
              data.map((item) => (
                <Card
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  desc={item.desc}
                  img={BASE_URL + item.img}
                  type={item.type}
                />
              ))
            ) : (
              <div className="flex flex-col items-center gap-2">
                <h2 className="text-xl text-white">No Items Found</h2>
                <Button
                  title={"Go Back"}
                  onClick={() => {
                    window.location.reload();
                  }}
                />
              </div>
            )
          ) : loading ? (
            <div className="w-16 h-16 border-4 border-dotted border-[#29caff] border-t-transparent rounded-full animate-spin"></div>
          ) : error ? (
            <h1 className="text-2xl text-[#FF4343]">{error}</h1>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

SearchResults.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
  BASE_URL: PropTypes.string,
};

export default SearchResults;
