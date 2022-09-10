import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { ListAllFriends } from './FriendsList.styled';

export default function FriendList({items}) {
    return (
        <ListAllFriends className="friend-list">
            {items.map(item => (
                <FriendListItem key={item.id}
                        isOnline={item.isOnline}
                        avatar={item.avatar}
                        name={item.name}
                 />
            ))}
        </ListAllFriends>
    );
}

FriendList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    }))
}