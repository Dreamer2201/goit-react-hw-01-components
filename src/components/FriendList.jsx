import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem";

export default function FriendList({items}) {
    return (
        <ul className="friend-list">
            {items.map(item => (
                <FriendListItem key={item.id}
                        isOnline={item.isOnline}
                        avatar={item.avatar}
                        name={item.name}
                 />
            ))}
        </ul>
    );
}

FriendList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    }))
}