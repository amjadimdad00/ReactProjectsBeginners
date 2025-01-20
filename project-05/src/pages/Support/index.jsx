import TextCard from "../../components/Support/TextCard";
import ContactCard from "../../components/Support/ContactCard";
import ContactForm from "../../components/Support/ContactForm";

import Email from "../../assets/Support/Email.png";
import Chatbot from "../../assets/Support/Chatbot.png";

const index = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex gap-4 justify-between">
        <TextCard
          icon={Email}
          title="Contact Us"
          description="Have a question or just want to know more? Feel free to reach out to us."
        />
        <ContactForm />
      </div>
      <div className="flex justify-between">
        <TextCard
          icon={Chatbot}
          title="Live Chat"
          description="Don't have time to wait for the answer? Chat with us now."
        />
        <ContactCard />
      </div>
    </div>
  );
};

export default index;
