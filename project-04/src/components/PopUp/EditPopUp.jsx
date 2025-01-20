import PropTypes from "prop-types";

const EditPopUp = ({
  setOpenEdit,
  editContactData,
  setEditContactData,
  editContact,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    editContactData &&
      editContactData.name &&
      editContactData.email &&
      setOpenEdit(false);

    editContact(editContactData.id, {
      name: editContactData.name,
      email: editContactData.email,
    });
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
          value={editContactData?.name || ""}
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
          value={editContactData?.email || ""}
          className="border outline-none px-1"
          onChange={handleInputChange}
        />
      </div>
      {/* Action Buttons */}
      <div className="flex justify-between w-full">
        <button
          className="py-1.5 px-3 bg-yellow text-black text-base border rounded-md"
          onClick={() => setOpenEdit(false)}
        >
          Close
        </button>
        <button
          className="py-1.5 px-3 bg-dark-yellow text-black text-base border rounded-md"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

EditPopUp.propTypes = {
  editContactData: PropTypes.object,
  setOpenEdit: PropTypes.func.isRequired,
  editContact: PropTypes.func.isRequired,
  setEditContactData: PropTypes.func.isRequired,
};

export default EditPopUp;
