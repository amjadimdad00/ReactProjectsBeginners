import Export from "../../assets/Transactions/export.png";
import TransactionTable from "../../components/Transactions/TransactionTable";

const index = () => {
  return (
    <div className="flex flex-col gap-4 items-end h-full">
      <button className="text-sm text-white bg-[#5F00D9] flex gap-2 px-4 py-2.5 rounded-xl items-center font-medium ">
        <img src={Export} alt="export" />
        Export CSV
      </button>
      <TransactionTable />
    </div>
  );
};

export default index;
