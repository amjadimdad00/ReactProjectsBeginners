import PropTypes from "prop-types";
import User from "../assets/user.png";

const Navbar = ({ selectedTab }) => {
  return (
    <header className="bg-white px-24 py-4 flex justify-between items-center h-[60px]">
      <h2 className="text-2xl font-medium capitalize">{selectedTab}</h2>
      <div className="flex items-center space-x-4">
        <img src={User} alt="User" className="w-10" />
      </div>
    </header>
  );
};

Navbar.propTypes = {
  selectedTab: PropTypes.string.isRequired,
};

export default Navbar;
