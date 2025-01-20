import PropTypes from "prop-types";

const Transactions = ({ data }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="rounded-full bg-[#F3F3F7] w-9 h-8 flex items-center justify-center">
        <img src={data.icon} alt={data.icon} />
      </div>
      <div className="flex justify-between w-full  pb-4 border-b border-[#EEEEF4]">
        <div className="flex flex-col">
          <h1 className="text-sm text-[#171717] font-medium">{data.name}</h1>
          <p className="text-xs text-[#797E82] font-medium">{data.date}</p>
        </div>
        <h1 className="font-medium text-base">{data.amount}</h1>
      </div>
    </div>
  );
};

Transactions.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
  }).isRequired,
};

export default Transactions;
