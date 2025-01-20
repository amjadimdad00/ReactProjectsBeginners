import PropTypes from "prop-types";
import ContactPNG from "../assets/contact.png";
import Card from "./Card";

const Contact = ({ contact, loading, editContact, deleteContact }) => {
  return (
    <div
      className={`max-w-[370px] mx-auto flex items-center gap-3 ${
        !loading && contact
          ? "justify-start flex-col"
          : "h-[60vh] justify-center"
      }`}
    >
      {loading ? (
        <div className="w-16 h-16 border-4 border-dotted border-yellow border-t-transparent rounded-full animate-spin"></div>
      ) : contact && contact.length > 0 ? (
        contact.map((items) => (
          <Card
            items={items}
            key={items.id}
            editContact={editContact}
            deleteContact={deleteContact}
          />
        ))
      ) : (
        <div className="max-w-[370px] h-[60vh] mx-auto flex items-center justify-center gap-4">
          <img src={ContactPNG} alt="contact-icon" />
          <h1 className="text-2xl font-semibold text-white">
            No Contact Found
          </h1>
        </div>
      )}
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ),
  loading: PropTypes.bool,
  editContact: PropTypes.func,
  deleteContact: PropTypes.func,
};

export default Contact;
