import Firebase from "../assets/firebase.svg";
import Search from "../assets/search.png";
import Add from "../assets/plus.png";
import PropTypes from "prop-types";

const Navbar = ({ searchContact, setOpenAdd }) => {
  return (
    <>
      <div className="h-[60px] m-4 bg-white rounded-lg flex items-center justify-center gap-2">
        <img src={Firebase} alt="firebase_logo" />
        <h1 className="text-xl font-bold">Firebase Contact App</h1>
      </div>
      <div className="flex items-center justify-between gap-3 m-4">
        <div className="flex items-center gap-3 px-2.5 flex-grow border border-white h-10 rounded-lg">
          <img src={Search} alt="search_icon" className="w-4 h-4" />
          <input
            onChange={searchContact}
            type="text"
            className="flex-grow bg-transparent text-white placeholder:text-white text-base font-normal outline-none border-none"
            placeholder="Search Contact"
          />
        </div>
        <button
          className="bg-white w-12 h-12 rounded-full flex items-center justify-center"
          onClick={() => setOpenAdd(true)}
        >
          <img src={Add} alt="add_icon" />
        </button>
      </div>
    </>
  );
};

Navbar.propTypes = {
  searchContact: PropTypes.func.isRequired,
  setOpenAdd: PropTypes.func.isRequired,
};

export default Navbar;
