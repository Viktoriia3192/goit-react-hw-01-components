import user from '../data/user.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json'
import { FriendsList } from './FriendList/FriendList';
import friends from '../data/friends.json'
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json'
import { Container } from './App.styled'
export const App = () => {
  return (
    <Container>
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
<Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
    <TransactionHistory items={transactions}/>
    </Container>
  );
};



