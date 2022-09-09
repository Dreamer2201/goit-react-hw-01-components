import user from './components/user.json';
import Profile from './components/Profile';
import friends from './components/friends.json';
import FriendList from 'components/FriendList';

export default function App() {
  return (
  
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
        <FriendList items={friends} />
    </div>

  );
};
