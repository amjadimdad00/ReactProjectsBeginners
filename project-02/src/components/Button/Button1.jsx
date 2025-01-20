import PropTypes from "prop-types";

const Button = ({ title, onClick, className = "", ...props }) => {
  const defaultStyles =
    "w-32 h-8 px-3 py-1 lg:w-40 lg:h-10 xl:w-56 xl:h-11 xl:py-2.5 xl:px-5 2xl:w-72 2xl:h-16 2xl:text-3xl rounded-md bg-[#000000] text-white poppins font-semibold xl:text-base hover:bg-transparent hover:border hover:border-black hover:text-black";

  return (
    <button
      onClick={onClick}
      className={`${defaultStyles} ${className}`}
      {...props}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;
