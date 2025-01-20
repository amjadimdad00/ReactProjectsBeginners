import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CustomButton = ({ to, icon, label, isSelected, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center space-x-3 p-3 rounded-md hover:bg-purple-100 ${
        isSelected ? "text-gray-800 bg-purple-100" : "text-[#797E82]"
      }`}
    >
      <img src={icon} alt={label} />
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
};

CustomButton.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CustomButton;
