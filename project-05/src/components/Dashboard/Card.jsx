import PropTypes from "prop-types";

const ContactCard = ({ title, description, BG }) => {
  return (
    <div
      className={`w-full max-w-[450px] h-[100px] rounded-[16px] border-[0.5px] border-solid p-3 flex flex-col gap-1.5 bg-[#5F00D9] bg-cover bg-no-repeat ${
        title === "Loans" ? "bg-white border-none" : ""
      }`}
      style={{ backgroundImage: `url(${BG})` }}
    >
      <p
        className={`w-[58px] h-[22px] px-[7px] py-[2px] font-medium rounded-full text-xs text-center ${
          title === "Loans"
            ? "bg-[#5F00D9] text-white"
            : "bg-white text-[#5F00D9]"
        }`}
      >
        {title}
      </p>
      <h1
        className={`text-base font-medium ${
          title === "Loans" ? "text-black" : "text-white"
        }`}
      >
        {description}
      </h1>
    </div>
  );
};

ContactCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  BG: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ContactCard;
