import PropTypes from 'prop-types';
import { UserProfile, StatsUser, ImageUser, StatsItem, UserName, StatsTitle, UserLocation, UserTag, StatsData } from './Profile.styled';

export default function Profile(props) {
  const { avatar, username, tag, location, stats } = props;
  return <UserProfile className='profile'>
  <div className="description">
    <ImageUser
      src={avatar}
      alt={username}
      className="avatar"
    />
    <UserName className="name">{username}</UserName>
    <UserTag className="tag">@{tag}</UserTag>
    <UserLocation className="location">{location}</UserLocation>
  </div>

  <StatsUser className="stats">
    <StatsItem>
      <StatsTitle className="label">Followers</StatsTitle>
      <StatsData className="quantity">{renderFollowers(stats)}</StatsData>
    </StatsItem>
    <StatsItem>
      <StatsTitle className="label">Views</StatsTitle>
        <StatsData className="quantity">{renderVievs(stats)}</StatsData>
    </StatsItem>
    <StatsItem>
      <StatsTitle className="label">Likes</StatsTitle>
      <StatsData className="quantity">{renderLikes(stats)}</StatsData>
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
function renderFollowers(stats) {
  return new Intl.NumberFormat('de-DE').format(stats.followers);
}
function renderVievs(stats) {
  return new Intl.NumberFormat('de-DE').format(stats.views);
}
function renderLikes(stats) {
  return new Intl.NumberFormat('de-DE').format(stats.likes);
}
