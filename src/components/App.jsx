import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import { Statistic } from './Statistics/Statistic';
import { Transaction } from './Transaction/Transactions';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import user from './Profile/user.json';
import transaction from './Transaction/tr.json';

export const App = () => {
  return (
    <div
      style={{
        marginTop: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic data={data} title="Uploud Status" />
      <FriendList friends={friends} />
      <Transaction transaction={transaction} />
    </div>
  );
};
