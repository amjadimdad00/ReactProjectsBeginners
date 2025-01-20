import BG from "../../assets/grid_bg.svg";

const ContactCard = () => {
  return (
    <div
      className="w-full max-w-[522px] h-[123px] rounded-[16px] border-[0.5px] border-solid p-6 flex flex-col gap-3 bg-[#5F00D9] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <p className="w-[58px] h-[22px] px-[7px] py-[2px] bg-white text-[#5F00D9] font-medium rounded-full text-xs">
        Chatbot
      </p>
      <h1 className="text-white text-lg font-medium">Chat with us now</h1>
    </div>
  );
};

export default ContactCard;
