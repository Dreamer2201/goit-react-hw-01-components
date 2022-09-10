import PropTypes from 'prop-types';
import { UserProfile, StatsUser, ImageUser, StatsItem } from './Profile.styled';

export default function Profile(props) {
  const { avatar, username, tag, location, stats } = props;
  return <UserProfile className='profile'>
  <div className="description">
    <ImageUser
      src={avatar}
      alt={username}
      className="avatar"
    />
    <p className="name">{username}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>

  <StatsUser className="stats">
    <StatsItem>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </StatsItem>
    <StatsItem>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </StatsItem>
    <StatsItem>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </StatsItem>
  </StatsUser>
</UserProfile>
}
Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
  }),
}