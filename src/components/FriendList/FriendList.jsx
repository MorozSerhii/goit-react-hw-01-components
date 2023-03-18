import style from './FriendListStyle.module.css';
import PropTypes, { arrayOf } from 'prop-types';

const styles = status => {
  if (status === false) {
    return style.notOnline;
  } else {
    return style.status;
  }
};
export const FriendList = ({ friends }) => {
  return (
    <ul className={style['friend-list']}>
      {friends.map(friends => (
        <li key={friends.id} className={style.item}>
          <span className={styles(friends.isOnline)}></span>
          <img
            className={style.avatar}
            src={friends.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={style.name}>{friends.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number,
      isOnline: PropTypes.bool,
    })
  ),
};
