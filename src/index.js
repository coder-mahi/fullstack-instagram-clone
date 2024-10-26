import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {firebase,FieldValue} from './lib/firebase';
import FirebaseContext from './context/firebase';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <FirebaseContext.Provider value={{firebase, FieldValue}}>
    <App />
  </FirebaseContext.Provider>
);
