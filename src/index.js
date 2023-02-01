import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { UsersProfile } from 'components/UserProfile/Userprofile';
import user from './components/UserProfile/user.json';
import { FriendList } from 'components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
import { Statistics } from 'components/Statistic/Statisticitem';
import data from './components/Statistic/data.json';
import { TransactionHistory } from 'components/Transiction/TransictionList';
import transactions from './components/Transiction/transactions.json'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <UsersProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
        <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
       <TransactionHistory items={transactions} />
    </App>
  </React.StrictMode>
);
