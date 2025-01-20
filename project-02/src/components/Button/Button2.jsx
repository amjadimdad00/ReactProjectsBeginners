import PropTypes from "prop-types";

const Button2 = ({ title, onClick, className = "", ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-white border border-black text-black font-semibold text-base poppins py-2 px-4 rounded-md ${className}`}
      {...props}
    >
      {title}
    </button>
  );
};

Button2.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button2;
