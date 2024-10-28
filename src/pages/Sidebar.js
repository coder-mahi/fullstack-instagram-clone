import React from 'react';
import useUser from '../hooks/use-user';
const Sidebar = () => {
  const user = useUser();
  console.log("user",user);
  return (
    <div>i am Sidebar</div>
  )
}

export default Sidebar