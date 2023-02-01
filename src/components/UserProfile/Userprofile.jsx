import PropTypes from 'prop-types';
import css from './Userprofile.module.css';

export const UsersProfile = ({ avatar, username, tag, location, stats }) => (
    <div className={css.profile}>
        <div className={css.text}>
            <img src={avatar} alt="avatar" className={css.avatar} />
            <p className={css.profileName}>{username}</p>
            <p className={css.tagName}>@{tag}</p>
            <p className={css.userLocation}>{location}</p>
        </div>

        <ul className={css.stats}>
            <li className={css.followersItem}>
                <span className={css.txt}>Followers</span>
                <span className={css.quantity}>{stats.followers}</span>
            </li>

             <li className={css.viewsItem}>
                <span className={css.txt}>Views</span>
                <span className={css.quantity}>{stats.views}</span>
            </li>

             <li className={css.likesItem}>
                <span className={css.txt}>Likes</span>
                <span className={css.quantity}>{stats.likes}</span>
            </li>
        </ul>
        </div>
)

UsersProfile.propTypes = {
      avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
}