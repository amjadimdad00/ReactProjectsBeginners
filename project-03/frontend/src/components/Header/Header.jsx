import PropTypes from "prop-types";
import Button from "../Button/Button";

const Header = ({ setLoading, searchFood, filterFood }) => {
  const filterBtns = [
    {
      id: "1",
      name: "All",
      value: "all",
    },
    {
      id: "2",
      name: "Breakfast",
      value: "breakfast",
    },
    {
      id: "3",
      name: "Lunch",
      value: "lunch",
    },
    {
      id: "4",
      name: "Dinner",
      value: "dinner",
    },
  ];

  return (
    <div className="w-full h-full min-h-[231px] bg-[#323334] pt-11 px-24 flex flex-col gap-6 sm:gap-10 items-center justify-center">
      <div className="w-full flex flex-col max-sm:gap-4 sm:flex-row justify-between">
        <img
          src="/logo.svg"
          alt="Logo"
          className="cursor-pointer"
          onClick={() => (window.location.href = "/")}
        />
        <input
          onChange={searchFood}
          type="text"
          placeholder="Search Food..."
          className="inter border border-[#FF4343] rounded-md py-1.5 px-2.5 font-normal text-base bg-transparent text-white outline-none"
        />
      </div>
      <div className="flex gap-1 sm:gap-4">
        {filterBtns.map((btn) => (
          <Button
            key={btn.id}
            value={btn.value}
            title={btn.name}
            className={"text-base"}
            onClick={() => {
              setLoading(true);
              filterFood(btn.value);
              setTimeout(() => {
                setLoading(false);
              }, 500);
            }}
          />
        ))}
      </div>
    </div>
  );
};

Header.propTypes = {
  filterFood: PropTypes.func,
  searchFood: PropTypes.func,
  setLoading: PropTypes.func,
  selectedBtn: PropTypes.string,
};

export default Header;
