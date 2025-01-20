import PropTypes from "prop-types";

const Button = ({ className, value, title, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        value={value}
        className={`rounded-md py-1.5 px-3 bg-[#FF4343] text-white transition-all ease-in-out duration-150 border border-[#FF4343] hover:bg-transparent inter font-normal ${className}`}
      >
        {title}
      </button>
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.string,
};

export default Button;
