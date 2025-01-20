import PropTypes from "prop-types";

const TextCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-4">
      <img src={icon} alt={icon} className="w-5" />
      <h1 className="text-3xl font-medium">{title}</h1>
      <p className="text-sm text-[#535D66] font-normal">{description}</p>
    </div>
  );
};

TextCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TextCard;
