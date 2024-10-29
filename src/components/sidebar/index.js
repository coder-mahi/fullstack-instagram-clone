import React from 'react';
import useUser from '../../hooks/use-user';
import User from './user';
import Suggestions from './suggestions';

const Sidebar = () => {
  const {
    user: { docId, fullName, username, userId, following = [] },
  } = useUser();

  // Log the data for debugging
  console.log("following:", following);
  console.log("userId:", userId);

  // Check if userId is available before rendering Suggestions
  if (!userId) {
    return <p>Loading user information...</p>; // Or a skeleton loader
  }

  return (
    <div className='p-4'>
      <User username={username} fullName={fullName} />
      <Suggestions userId={userId} following={following} loggedInDocId={docId} />
    </div>
  );
};

export default Sidebar;
