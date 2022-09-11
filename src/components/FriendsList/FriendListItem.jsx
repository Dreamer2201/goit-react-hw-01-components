import PropTypes from 'prop-types';
import { FriendItem, ImgFriend, OnlineStatus, FriendName } from './FriendsList.styled';


export default function FriendListItem(props) {
  const { avatar, name, isOnline} = props;
  return <FriendItem className="item">
      <OnlineStatus className="status" status={isOnline}>
      </OnlineStatus>
      <ImgFriend className="avatar" src={avatar} alt={name} width="48" />
      <FriendName className="name">{name}</FriendName>
</FriendItem>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}