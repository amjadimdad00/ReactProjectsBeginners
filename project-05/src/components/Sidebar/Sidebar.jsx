import PropTypes from "prop-types";
import Button from "./Button";

// Active Button Image
import DashboardActive from "../../assets/Sidebar/active/dashboard.png";
import TransactionsActive from "../../assets/Sidebar/active/transactions.png";
import SupportActive from "../../assets/Sidebar/active/support.png";

// Inactive Button Image
import DashboardInactive from "../../assets/Sidebar/inactive/dashboard.png";
import TransactionsInactive from "../../assets/Sidebar/inactive/transactions.png";
import SupportInactive from "../../assets/Sidebar/inactive/support.png";

const Sidebar = ({ selectedTab, handleButtonClick }) => {
  return (
    <aside className="bg-white w-[243px] flex flex-col">
      {/* Sidebar Header */}
      <div className="px-6 pt-10">
        <h1 className="text-lg font-bold text-purple-600">@CODERSLIFE</h1>
      </div>

      {/* Sidebar Links */}
      <nav className="flex-1 p-4 space-y-4">
        <Button
          to="/"
          icon={
            selectedTab === "dashboard" ? DashboardActive : DashboardInactive
          }
          label="Dashboard"
          isSelected={selectedTab === "dashboard"}
          onClick={() => handleButtonClick("dashboard")}
        />
        <Button
          to="/transactions"
          icon={
            selectedTab === "transactions"
              ? TransactionsActive
              : TransactionsInactive
          }
          label="Transactions"
          isSelected={selectedTab === "transactions"}
          onClick={() => handleButtonClick("transactions")}
        />
      </nav>

      {/* Sidebar Footer */}
      <div className="p-4">
        <Button
          to="/support"
          icon={selectedTab === "support" ? SupportActive : SupportInactive}
          label="Support"
          isSelected={selectedTab === "support"}
          onClick={() => handleButtonClick("support")}
        />
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};

export default Sidebar;
