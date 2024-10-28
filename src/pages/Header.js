// import React, { useContext } from 'react';
// import FirebaseContext from '../context/firebase';
// import UserContext from '../context/user';
// import * as ROUTES from '../constants/routes';
// import { Link } from 'react-router-dom'; // Import Link here

// const Header = () => {
//   const { firebase } = useContext(FirebaseContext);
//   const { user } = useContext(UserContext);

//   return (
//     <header className='h-16 bg-white border-b border-gray-primary mb-8'>
//       <div className='container mx-auto p-4 flex justify-between'>
//         <div className='flex justify-between h-full'>
//           <div className='text-gray-700 text-center flex items-center align-items cursor-pointer'>
//             <h1 className='flex justify-center w-full'>
//               <Link to={ROUTES.DASHBOARD}>
//                 <img src="./images/logo.png" alt="instagram" className='mt-2 w-6/12' />
//               </Link>
//             </h1>
//           </div>
//           <div className='text-gray-700 text-center flex items-center align-items'>
//             {user ?(
//               <>
//               <Link to={ROUTES.DASHBOARD}>
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//   <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
// </svg>

//               </Link>
//               <button type='button' title='Sign out' onClick={()=> firebase.auth().signOut()} onKeyDown={(event)=> {if(event.key==='Enter'){
//                 firebase.auth().signOut()

//               }}
//             }>
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
// </svg>
//               </button>
//               <div className='flex items-center cursor-pointer'>
//                 <Link to={`/p/${user.displayName}`}>
//                 <img className='rounded-full h-8 w-8 flex' src={`./images/avatars/${user.displayName}.jpg`} alt={`${user.displayName} profile`}></img>
//                 </Link>
//               </div>
//               </>
//             ):(
//               <>

//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

import React, { useContext } from 'react';
import FirebaseContext from '../context/firebase';
import UserContext from '../context/user';
import * as ROUTES from '../constants/routes';
import { Link } from 'react-router-dom';

const Header = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);

  return (
    <header className='h-16 bg-white border-b border-gray-primary mb-8'>
      <div className='container mx-auto p-4 flex justify-between items-center'>
        {/* Logo aligned to the left */}
        <div className='text-gray-700 text-center flex items-center cursor-pointer'>
          <h1>
            <Link to={ROUTES.DASHBOARD}>
              <img src="./images/logo.png" alt="instagram" className='mt-2 w-6/12' />
            </Link>
          </h1>
        </div>

        {/* User controls (home, logout, profile) aligned to the right */}
        <div className='text-gray-700 flex items-center space-x-4'>
          {user ? (
            <>
              <Link to={ROUTES.DASHBOARD}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </Link>
              <button
                type='button'
                title='Sign out'
                onClick={() => firebase.auth().signOut()}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    firebase.auth().signOut();
                  }
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                </svg>
              </button>
              <div className='flex items-center cursor-pointer'>
                <Link to={`/p/${user.displayName}`}>
                  <img className='rounded-full h-8 w-8 flex' src={`./images/avatars/${user.displayName}.jpg`} alt={`${user.displayName} profile`} />
                </Link>
              </div>
            </>
          ) : (
            <>
              <Link to={ROUTES.LOGIN}>
              <button className='bg-blue-medium font-bold text-sm rounded text-white w-20 h-8' type='button'>
                Log In
              </button>
              </Link>
              <Link to={ROUTES.SIGN_UP}>
              <button className='font-bold text-sm rounded text-blue-medium w-20 h-8' type="button">
                Sign Up
                </button></Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
