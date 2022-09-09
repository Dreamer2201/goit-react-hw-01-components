import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem";

export default function FriendList({items}) {
    return (
        <ul class="friend-list">
            {items.map(item => (
                <li key={item.id}>
                    <FriendListItem
                        isOnline={item.isOnline}
                        avatar={item.avatar}
                        name={item.name}
                    />
                </li>
            ))}
        </ul>
    );
}

FriendList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    }))
}