import user from './components/user.json';
import Profile from './components/Profile';
import data from './components/data.json';
import StatisticsList from 'components/StatisticsList';
import Section from 'components/Section';
import friends from './components/friends.json';
import FriendList from 'components/FriendList';
import transactions from './components/transactions.json';
import TransactionHistory from 'components/TransactionHistory';

console.log(TransactionHistory);

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
      <Section>
        <StatisticsList items={data} />
      </Section>
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </div>

  );
};
