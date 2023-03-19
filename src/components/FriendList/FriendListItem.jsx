import style from './FriendListItem.module.css';
import PropTypes from 'prop-types';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusCheck = isOnline ? 'online' : 'offline';
  return (
    <li className={style.item}>
      <span className={style[statusCheck]}></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
