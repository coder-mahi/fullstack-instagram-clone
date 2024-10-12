// import FirebaseContext from "./context/firebase";
// function App() {
//     console.log("context",FirebaseContext);
//     console.log(FirebaseContext);
//     <div>Hello</div>
//   }
// export default App;


import React, { useContext } from 'react';
import FirebaseContext from "./context/firebase";

function App() {
    const firebaseContext = useContext(FirebaseContext); 
    console.log("context", firebaseContext);  
    return (
        <div>Hello</div>  
    );
}
export default App;
