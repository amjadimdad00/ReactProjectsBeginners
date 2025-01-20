import Button from "../Button/Button";
import PropTypes from "prop-types";

const Card = ({ name, price, desc, img, type }) => {
  return (
    <div
      type={type}
      className="w-[380px] h-[180px] border border-solid custom-border-gradient custom-background backdrop-blur-[12px] rounded-[19.45px] flex pt-2 pb-4 px-3.5 gap-4"
    >
      <div className="food_image w-2/4">
        <img src={img} className="rounded-full w-32" />
      </div>
      <div className="flex flex-col justify-between items-end w-3/4">
        <div className="info">
          <h3 className="mt-2 inter font-semibold text-base text-white">
            {name}
          </h3>
          <p className="mt-1 text-xs font-normal text-white">{desc}</p>
        </div>
        <Button title={`$${price}`} className={"text-sm mr-1.5"} />
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  desc: PropTypes.string,
  img: PropTypes.string,
  type: PropTypes.string,
};

export default Card;
