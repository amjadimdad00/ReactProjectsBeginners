import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";

const useContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        setLoading(true);
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactsList = contactsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(contactsList);
        setFilteredContacts(contactsList);
      } catch (error) {
        console.error("Error fetching contacts:", error.message);
      } finally {
        setLoading(false);
      }
    };

    getContacts();
  }, []);

  const searchContact = (e) => {
    setLoading(true);
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilteredContacts(contacts);
    } else {
      const filter = contacts?.filter((contact) =>
        contact.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredContacts(filter);
    }

    setLoading(false);
  };

  const deleteContact = async (contactId) => {
    try {
      setLoading(true);
      const contactDocRef = doc(db, "contacts", contactId);
      await deleteDoc(contactDocRef);

      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== contactId)
      );
      setFilteredContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== contactId)
      );
    } catch (error) {
      console.error("Error deleting contact:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const editContact = async (contactId, updatedData) => {
    try {
      setLoading(true);
      const contactDocRef = doc(db, "contacts", contactId);
      await updateDoc(contactDocRef, updatedData);

      setContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact.id === contactId ? { ...contact, ...updatedData } : contact
        )
      );
      setFilteredContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact.id === contactId ? { ...contact, ...updatedData } : contact
        )
      );
    } catch (error) {
      console.error("Error updating contact:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const addContact = async (newContact) => {
    try {
      setLoading(true);
      const contactRef = collection(db, "contacts");
      const docRef = await addDoc(contactRef, newContact);

      const addedContact = { id: docRef.id, ...newContact };

      setContacts((prevContacts) => [...prevContacts, addedContact]);
      setFilteredContacts((prevContacts) => [...prevContacts, addedContact]);
    } catch (error) {
      console.error("Error adding contact:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    contacts,
    filteredContacts,
    addContact,
    searchContact,
    editContact,
    deleteContact,
  };
};

export default useContacts;
