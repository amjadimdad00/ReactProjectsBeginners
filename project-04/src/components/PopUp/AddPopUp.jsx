import PropTypes from "prop-types";
import { useState } from "react";

const AddPopUp = ({ setOpenAdd, handleAddContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  const handleAdd = () => {
    if (name && email) {
      const newContact = { name, email };
      handleAddContact(newContact);
    }
  };

  return (
    <div className="bg-[white] mt-36 m-4 p-4 flex flex-col gap-5 items-end rounded-lg">
      {/* Name Input */}
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="name" className="text-base font-normal">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          className="border outline-none px-1"
          onChange={handleInputChange}
        />
      </div>
      {/* Email Input */}
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="email" className="text-base font-normal">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          className="border outline-none px-1"
          onChange={handleInputChange}
        />
      </div>
      {/* Action Buttons */}
      <div className="flex justify-between w-full">
        <button
          className="py-1.5 px-3 bg-yellow text-black text-base border rounded-md"
          onClick={() => setOpenAdd(false)}
        >
          Close
        </button>
        <button
          className="py-1.5 px-3 bg-dark-yellow text-black text-base border rounded-md"
          onClick={() => {
            handleAdd();
          }}
        >
          Add Contact
        </button>
      </div>
    </div>
  );
};

AddPopUp.propTypes = {
  setOpenAdd: PropTypes.func.isRequired,
  handleAddContact: PropTypes.func.isRequired,
};

export default AddPopUp;
