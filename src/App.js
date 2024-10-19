import  { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import FirebaseContext from "./context/firebase";
const Login = lazy(()=> import('./pages/Login'));

function App() {
    return(
        <Router>
            <Suspense fallback={<p>Loading...</p>}>
            <Routes>
                <Route path={'/login'} element={<Login/>}/>
            </Routes>
         </Suspense>
        </Router>
    );

}
export default App;
