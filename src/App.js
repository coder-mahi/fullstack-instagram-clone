import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import * as ROUTES from "./constants/routes";
import Dashboard from './pages/Dashboard';

const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/sign-up'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
    return (
        <Router>
            <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    {/* <Route path={'/'} element={
                        <h1 className="text-3xl font-bold underline">
                            Hello world!
                        </h1>} /> */}
                    <Route path={ROUTES.LOGIN} element={<Login />} />

                    <Route path={ROUTES.SIGN_UP} element={<Signup />} />

                    <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
                    
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Suspense>
        </Router>

    );

}
export default App;
