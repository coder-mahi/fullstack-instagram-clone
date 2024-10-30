import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import * as ROUTES from "./constants/routes";
import useAuthListener from './hooks/use-auth-listener';
import UserContext from './context/user';

import ProtectedRoute from './helpers/protected-routes';
import IsUserLoggedIn from './helpers/is-user-logged-in';

const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/sign-up'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Dashboard = lazy(()=> import('./pages/Dashboard'));
const Profile = lazy(()=> import('./pages/profile'));

function App() {
    const user = useAuthListener();

    return (
        <UserContext.Provider value={{ user }}>
            <Router>
                <Suspense fallback={<p>Loading...</p>}>
                    <Routes>
                        {/* <Route path={ROUTES.LOGIN} element={<Login />} />
                        <Route path={ROUTES.SIGN_UP} element={<Signup />} />
                        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} /> */}

<Route
              path={ROUTES.LOGIN}
              element={
                <IsUserLoggedIn user={user} loggedInPath={ROUTES.DASHBOARD}>
                  <Login />
                </IsUserLoggedIn>
              }
            />

            <Route
              path={ROUTES.SIGN_UP}
              element={
                <IsUserLoggedIn user={user} loggedInPath={ROUTES.DASHBOARD}>
                  <Signup />
                </IsUserLoggedIn>
              }
            />
            <Route
              path={ROUTES.DASHBOARD}
              element={
                <ProtectedRoute user={user}>
                  <Dashboard />
                </ProtectedRoute>
              }
              />
              <Route
              path={ROUTES.PROFILE} element={<Profile/>}
              />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Suspense>
            </Router>
        </UserContext.Provider>
    );

}
export default App;
