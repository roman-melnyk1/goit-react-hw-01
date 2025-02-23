import PropTypes from "prop-types";
import "./FriendList.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friend-item">
      <span className={`status ${isOnline ? "online" : "offline"}`}></span>
      <img src={avatar} alt="Avatar" width="48" className="friend-avatar" />
      <p className="friend-name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};

export default FriendListItem;

