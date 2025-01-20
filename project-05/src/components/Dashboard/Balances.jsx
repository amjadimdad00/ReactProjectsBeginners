import Info from "../../assets/Dashboard/Info.png";
import Withdraw from "../../assets/Dashboard/ArrowUp.png";
import Deposit from "../../assets/Dashboard/ArrowDown.png";

const Balances = () => {
  return (
    <div className="rounded-2xl border-[0.5px] border-[#EEEEF4] bg-white px-5 py-3 flex justify-between items-start">
      <div className="flex flex-col gap-3">
        <h1 className="flex gap-1 items-center text-xs text-[#535D66] font-medium">
          Total Portfolio Value <img src={Info} alt="info" />
        </h1>
        <h1 className="text-black font-medium text-xl">₹ 112,312.24</h1>
      </div>
      <div className="w-[1.7px] h-[50px] bg-[#EEEEF4]"></div>
      <div className="flex flex-col gap-2.5">
        <h1 className="text-xs text-[#535D66] font-medium">Wallet Balances</h1>
        <div className="flex gap-8">
          <h1 className="text-xl font-medium flex items-center gap-1">
            22.39401000{" "}
            <span className="bg-[#F3F3F7] rounded-full text-xs text-[#797E82] px-2 py-1">
              BTC
            </span>
          </h1>
          <h1 className="text-xl font-medium flex items-center gap-1">
            ₹ 1,300.00{" "}
            <span className="bg-[#F3F3F7] rounded-full text-xs text-[#797E82] px-2 py-1">
              INR
            </span>
          </h1>
        </div>
      </div>
      <div className="flex gap-2 ">
        <button className="text-sm text-white flex items-center gap-2 bg-[#5F00D9] px-3 py-1 rounded-lg">
          <img src={Deposit} alt="Deposit" /> Deposit
        </button>
        <button className="text-sm text-white flex items-center gap-2 bg-[#5F00D9] px-4 py-2 rounded-lg">
          <img src={Withdraw} alt="Withdraw" /> Withdraw
        </button>
      </div>
    </div>
  );
};

export default Balances;
