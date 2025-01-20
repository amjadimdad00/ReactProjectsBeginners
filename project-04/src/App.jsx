import { useState } from "react";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import useContacts from "./hooks/useContacts";
import AddPopUp from "./components/PopUp/AddPopUp";
import EditPopUp from "./components/PopUp/EditPopUp";

function App() {
  const {
    loading,
    filteredContacts,
    searchContact,
    deleteContact,
    editContact,
    addContact,
  } = useContacts();

  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [editContactData, setEditContactData] = useState(null);

  const handleEditContact = (contact) => {
    setEditContactData(contact);
    setOpenEdit(true);
  };
  const handleAddContact = (newContact) => {
    addContact(newContact);
    setOpenAdd(false);
  };

  return (
    <div className="max-w-[370px] mx-auto">
      <Navbar searchContact={searchContact} setOpenAdd={setOpenAdd} />
      <Contact
        loading={loading}
        contact={filteredContacts}
        editContact={handleEditContact}
        deleteContact={deleteContact}
      />

      {openEdit && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
            <EditPopUp
              setOpenEdit={setOpenEdit}
              editContact={editContact}
              editContactData={editContactData}
              setEditContactData={setEditContactData}
            />
          </div>
        </>
      )}

      {openAdd && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
            <AddPopUp
              setOpenAdd={setOpenAdd}
              handleAddContact={handleAddContact}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
