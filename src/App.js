import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import * as ROUTES from "./constants/routes";
import Dashboard from './pages/Dashboard';
import useAuthListener from './hooks/use-auth-listener';

import UserContext from './context/user';
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/sign-up'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
    const user = useAuthListener();

    return (
        <UserContext.Provider value={{ user }}>
            <Router>
                <Suspense fallback={<p>Loading...</p>}>
                    <Routes>
                        <Route path={ROUTES.LOGIN} element={<Login />} />
                        <Route path={ROUTES.SIGN_UP} element={<Signup />} />
                        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Suspense>
            </Router>
        </UserContext.Provider>
    );

}
export default App;
