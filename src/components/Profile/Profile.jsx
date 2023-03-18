import PropTypes from 'prop-types';
import style from './ProfileStyle.module.css';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
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
          <span className={style['stats-quantity']}>{followers}</span>
        </li>
        <li className={style.item}>
          <span className={style['stats-text']}>Views</span>
          <span className={style['stats-quantity']}>{views}</span>
        </li>
        <li className={style.item}>
          <span className={style['stats-text']}>Likes</span>
          <span className={style['stats-quantity']}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string,
    avatar: PropTypes.string,
    location: PropTypes.string,
    Views: PropTypes.number,
    Followers: PropTypes.number,
    Likes: PropTypes.number,
  }),
};
