import PropTypes from "prop-types";
import userIcon from "../assets/user.png";
import Trash from "../assets/trash.png";
import Edit from "../assets/edit.png";

const Card = ({ items, editContact, deleteContact }) => {
  return (
    <div className="bg-yellow flex items-center justify-between w-full max-w-[290px] 2xs:max-w-[340px] rounded-lg p-2">
      <div className="flex items-center gap-3">
        <img src={userIcon} alt="userIcon" />
        <div>
          <h1 className="text-base font-medium">{items.name}</h1>
          <p className="text-sm font-normal">
            {items.email.length > 20
              ? items.email.slice(0, 16) + "..."
              : items.email}
          </p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <button onClick={() => editContact(items)}>
          <img src={Edit} alt="edit" />
        </button>
        <button onClick={() => deleteContact(items.id)}>
          <img src={Trash} alt="delete" />
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  items: PropTypes.object.isRequired,
  editContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Card;
