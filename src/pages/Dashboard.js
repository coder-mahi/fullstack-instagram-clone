// import React, { useEffect } from 'react'
// import Header from './Header';
// import Timeline from './Timeline';
// import Sidebar from './Sidebar';

// const Dashboard = () => {
//     useEffect(()=>{
//         document.title = "Instagram";
//     },[]);
//   return (
//     <div className='bg-gray-background'>
//         <Header/>
//         <div className="grid grid-cols-3 justify-between mx-auto max-w-screen-lg">
//             <Timeline/>
//             <Sidebar/>
//         </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect } from 'react';
import Header from './Header';
import Timeline from './Timeline';
import Sidebar from './Sidebar';

const Dashboard = () => {
  useEffect(() => {
    document.title = "Instagram";
  }, []);

  return (
    <div className='bg-gray-background min-h-screen'>
      {/* Header with Logo, Home, Logout, and Profile icons */}
      <Header />
      
      {/* Three-column layout aligned with Header sections */}
      <div className="grid grid-cols-3 gap-4 mx-auto max-w-screen-lg p-4">
        
        {/* Column 1 - Timeline directly below the Instagram logo */}
        <div className="col-span-1 flex justify-start">
          <Timeline />
        </div>

        {/* Column 2 - Sidebar at the center */}
        <div className="col-span-1 flex justify-center">
          <Sidebar />
        </div>

        {/* Column 3 - Below Home, Logout, and Profile icons */}
        <div className="col-span-1 flex justify-end">
          {/* Placeholder for right-aligned content, if any */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
