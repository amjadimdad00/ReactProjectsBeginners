import { useState } from "react";
import Add from "../../assets/Dashboard/Add.png";
import Remove from "../../assets/Dashboard/Remove.png";
import StockUp from "../../assets/Dashboard/StockUp.png";
import Graph from "../../assets/Dashboard/graph.svg";

const GraphCard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("1D");

  const timeframes = ["1H", "1D", "1W", "1M"];

  return (
    <div className="rounded-2xl border-[0.5px] border-[#EEEEF4] bg-white w-full max-w-[450px] px-5 py-3">
      <div className="flex items-start justify-between">
        {/* Price */}
        <div className="flex flex-col gap-2">
          <h1 className="text-xs text-[#535D66] font-medium">Current Price</h1>
          <h1 className="flex items-center text-2xl text-black font-medium gap-2">
            ₹26,670.25
            <span className="items-center flex text-xs text-[#059669]">
              <img src={StockUp} alt="StockUp" />
              0.04%
            </span>
          </h1>
        </div>

        {/* Buy & Sell */}
        <div className="flex gap-3">
          <button className="bg-[#5F00D9] px-4 py-2 flex items-center rounded-xl text-white font-medium gap-2">
            <img src={Add} alt="Buy" />
            Buy
          </button>
          <button className="bg-[#5F00D9] px-4 py-2 flex items-center rounded-xl text-white font-medium gap-2">
            <img src={Remove} alt="Sell" />
            Sell
          </button>
        </div>
      </div>

      {/* Timeframes */}
      <div className="flex justify-end py-8">
        <div className="flex gap-2 bg-[#F3F3F7] rounded-lg px-2 py-1">
          {timeframes.map((timeframe) => (
            <button
              key={timeframe}
              onClick={() => setSelectedTimeframe(timeframe)}
              className={`text-sm font-medium px-2 ${
                selectedTimeframe === timeframe
                  ? "bg-white rounded-lg text-black"
                  : "text-[#797E82]"
              }`}
            >
              {timeframe}
            </button>
          ))}
        </div>
      </div>

      {/* Graph and Time */}
      <div className="flex flex-col gap-3">
        <img src={Graph} alt="graph" />
        <div className="flex justify-between items-center">
          <h1 className="text-[#797E82] text-sm">7:15 PM</h1>
          <h1 className="text-[#797E82] text-sm">12:55 PM</h1>
          <h1 className="text-[#797E82] text-sm">6:35 AM</h1>
          <h1 className="text-[#797E82] text-sm">12:15 PM</h1>
          <h1 className="text-[#797E82] text-sm">5:55 PM</h1>
        </div>
      </div>
    </div>
  );
};

export default GraphCard;
