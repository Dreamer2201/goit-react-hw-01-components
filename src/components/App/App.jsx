import user from '../../data/user.json';
import Profile from '../Profile/Profile';
import data from '../../data/data.json';
import StatisticsList from 'components/Statistics/StatisticsList';
import Section from 'components/Statistics/Section';
import friends from '../../data/friends.json';
import FriendList from 'components/FriendsList/FriendList';
import transactions from '../../data/transactions.json';
import TransactionHistory from 'components/Transactions/TransactionHistory';
import { Container } from './App.styled';
import { FriendsBoard } from '../FriendsList/FriendsList.styled';
 
console.log(TransactionHistory);

export default function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Section title="Upload stats">
        <StatisticsList items={data} />
      </Section>
      <FriendsBoard >
        <FriendList items={friends} />
      </FriendsBoard>
      <TransactionHistory items={transactions} />
    </Container>

  );
};
