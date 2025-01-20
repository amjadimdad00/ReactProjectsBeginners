import DotBG from "../../assets/dot_bg.svg";
import GridBG from "../../assets/grid_bg.svg";
import Balances from "../../components/Dashboard/Balances";

import Card from "../../components/Dashboard/Card";
import GraphCard from "../../components/Dashboard/GraphCard";
import RecentTransactions from "../../components/Dashboard/RecentTransactions/RecentTransactions";

const index = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <Balances />
      </div>
      <div className="flex justify-between">
        <GraphCard />
        <RecentTransactions />
      </div>
      <div className="flex justify-between">
        <Card
          title="Loans"
          description="Learn more about Loans - Keep your Bitcoin, access it's value without selling it"
          BG={DotBG}
        />
        <Card
          title="Contact"
          description="Learn more about our real estate, mortgage, and  corporate account services"
          BG={GridBG}
        />
      </div>
    </div>
  );
};

export default index;
