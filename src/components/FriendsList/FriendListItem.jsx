import PropTypes from 'prop-types';
import { FriendItem, ImgFriend } from './FriendsList.styled';

export default function FriendListItem(props) {
  const { avatar, name, isOnline} = props;
  return <FriendItem className="item">
      <span className="status">{isOnline}</span>
      <ImgFriend className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
</FriendItem>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}