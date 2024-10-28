import React from 'react'
import useUser from '../../hooks/use-user'
import User from './user';
import Suggestions from './suggestions';

const Sidebar = () => {
    const{
      user: {fullName,userName,userId},
    } = useUser();
  
    return (
        <div className='p-4'>

        <User/>
        <Suggestions/>
</div>
    )
  };
  
  export default Sidebar;