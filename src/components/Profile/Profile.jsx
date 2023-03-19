import PropTypes from 'prop-types';
import style from './ProfileStyle.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div>
      <div className={style.description}>
        <img src={avatar} alt="User avatar" className={style.avatar} />
        <p className={style.username}>{username}</p>
        <p className={style.text}>@{tag}</p>
        <p className={style.text}>{location}</p>
      </div>
      <ul className={style['stats-list']}>
        <li className={style.item}>
          <span className={style['stats-text']}>Followers</span>
          <span className={style['stats-quantity']}>{stats.followers}</span>
        </li>
        <li className={style.item}>
          <span className={style['stats-text']}>Views</span>
          <span className={style['stats-quantity']}>{stats.views}</span>
        </li>
        <li className={style.item}>
          <span className={style['stats-text']}>Likes</span>
          <span className={style['stats-quantity']}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
}.isRequired;
