import USD from "../../../assets/Dashboard/Dollar.png";
import BTC from "../../../assets/Dashboard/Bitcoin.png";
import Transactions from "./Transactions.jsx";

const RecentTransactions = () => {
  const data = [
    {
      name: "INR Deposit",
      date: "2022-06-09 7:06 PM",
      amount: "+ ₹81,123.10",
      icon: USD,
    },
    {
      name: "BTC Sell",
      date: "2022-05-07 12:32 PM",
      amount: "- 12.48513391 BTC",
      secondayAmount: "+ ₹81,123.10",
      icon: BTC,
    },
    {
      name: "INR Deposit",
      date: "2022-06-09 7:06 PM",
      amount: "+ ₹81,123.10",
      icon: USD,
    },
  ];

  return (
    <div className="rounded-2xl border-[0.5px] border-[#EEEEF4] bg-white w-full max-w-[450px] h-[325px] px-5 py-4">
      <div className="flex flex-col gap-5">
        <h1 className="text-[#535D66] text-sm font-medium">
          Recent Transactions
        </h1>
        {data.map((data) => (
          <Transactions key={data.name} data={data} />
        ))}
        <button className="bg-[#EEEEF4] rounded-lg w-full text-black py-1.5 font-medium text-sm">
          View All
        </button>
      </div>
    </div>
  );
};

export default RecentTransactions;
