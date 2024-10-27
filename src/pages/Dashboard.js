import React, { useEffect } from 'react'
import Header from './Header';
import Timeline from './Timeline';
import Sidebar from './Sidebar';

const Dashboard = () => {
    useEffect(()=>{
        document.title = "Instagram";
    },[]);
  return (
    <div className='bg-gray-background'>
        <Header/>
        <div className="grid">
            <Timeline/>
            <Sidebar/>
        </div>
    </div>
  );
};

export default Dashboard;