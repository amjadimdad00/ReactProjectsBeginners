import { useState } from "react";
import Search from "../../assets/Transactions/search.png";

const TransactionTable = () => {
  const [selectedBtn, setSelectedBtn] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const transactions = [
    {
      id: "HD82NA3G",
      date: "2022-06-09",
      time: "07:06 PM",
      type: "INR Deposit",
      method: "E-Transfer",
      amount: "+ ₹81,123.10",
      secondaryAmount: "",
      status: "Pending",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-07",
      time: "02:48 PM",
      type: "INR Withdraw",
      method: "Wire Transfer",
      amount: "- ₹81,123.10",
      secondaryAmount: "",
      status: "Processing",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-04",
      time: "09:21 AM",
      type: "Buy",
      method: "",
      amount: "+ 12.48513391 BTC",
      secondaryAmount: "- ₹81,123.10",
      status: "Cancelled",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-03",
      time: "01:32 PM",
      type: "Sell",
      method: "",
      amount: "- 0.36401628 BTC",
      secondaryAmount: "₹19,378.94",
      status: "Completed",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-03",
      time: "09:02 AM",
      type: "BTC Deposit",
      method: "",
      amount: "+ 4.13946104 BTC",
      secondaryAmount: "₹37,329.31",
      status: "Completed",
    },
  ];

  const tabs = [
    { label: "All", count: transactions.length },
    {
      label: "Deposit",
      count: transactions.filter((transaction) =>
        transaction.type.toLowerCase().includes("deposit")
      ).length,
    },
    {
      label: "Withdraw",
      count: transactions.filter((transaction) =>
        transaction.type.toLowerCase().includes("withdraw")
      ).length,
    },
    {
      label: "Trade",
      count: transactions.filter(
        (transaction) =>
          transaction.type.toLowerCase().includes("buy") ||
          transaction.type.toLowerCase().includes("sell")
      ).length,
    },
  ];

  // Filter transactions based on the selected button and search query
  const filteredTransactions = transactions.filter((transaction) => {
    // Filter by selected tab
    const matchesTab =
      selectedBtn === "All" ||
      (selectedBtn === "Deposit" &&
        transaction.type.toLowerCase().includes("deposit")) ||
      (selectedBtn === "Withdraw" &&
        transaction.type.toLowerCase().includes("withdraw")) ||
      (selectedBtn === "Trade" &&
        (transaction.type.toLowerCase().includes("buy") ||
          transaction.type.toLowerCase().includes("sell")));

    // Filter by search query (ID or Status)
    const matchesSearch =
      transaction.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.status.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md">
      {/* Filters and Search */}
      <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-4">
        {/* Tabs */}
        <div className="flex gap-4 text-sm px-4">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setSelectedBtn(tab.label)}
              className={
                selectedBtn === tab.label
                  ? "font-semibold px-6 pb-2 border-b-2 border-[#5F00D9]"
                  : "text-gray-500 px-6 pb-2 font-normal"
              }
            >
              {tab.label} <span className="text-gray-400">({tab.count})</span>
            </button>
          ))}
        </div>
        {/* Search Bar */}
        <div className="border border-gray-300 rounded-md px-4 py-2 text-sm w-64 flex items-center gap-2">
          <img src={Search} alt="Search" />
          <input
            type="text"
            placeholder="Search by ID or Status"
            className="outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <table className="table-auto w-full text-sm">
        {/* Table Headers */}
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left px-4 py-2">ID</th>
            <th className="text-left px-4 py-2">Date & Time</th>
            <th className="text-left px-4 py-2">Type</th>
            <th className="text-left px-4 py-2">Amount</th>
            <th className="text-left px-4 py-2">Status</th>
          </tr>
        </thead>
        {/* Filtered Transactions */}
        <tbody>
          {filteredTransactions.map((transaction, index) => (
            <tr
              key={index}
              className="border-b last:border-none border-gray-200"
            >
              <td className="px-4 py-3">{transaction.id}</td>
              <td className="px-4 py-3">
                {transaction.date} <br />
                <span className="text-xs text-gray-400">
                  {transaction.time}
                </span>
              </td>
              <td className="px-4 py-3">
                {transaction.type}
                {transaction.method && (
                  <>
                    <br />
                    <span className="text-xs text-gray-400">
                      {transaction.method}
                    </span>
                  </>
                )}
              </td>
              <td className="px-4 py-3">
                {transaction.amount}
                {transaction.secondaryAmount && (
                  <>
                    <br />
                    <span className="text-xs text-gray-400">
                      {transaction.secondaryAmount}
                    </span>
                  </>
                )}
              </td>
              <td className="px-4 py-3">
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full text-white ${
                    transaction.status === "Pending"
                      ? "bg-[#797E82]"
                      : transaction.status === "Processing"
                      ? "bg-[#F5A50B]"
                      : transaction.status === "Completed"
                      ? "bg-[#059669]"
                      : "bg-[#DC2626]"
                  }`}
                >
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
