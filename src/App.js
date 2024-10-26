import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import * as ROUTES from "./constants/routes";
import Signup from './pages/sign-up';
const Login = lazy(() => import('./pages/Login'));

function App() {
    return (
        <Router>
            <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    <Route path={'/'} element={
                        <h1 className="text-3xl font-bold underline">
                            Hello world!
                        </h1>} />
                    <Route path={ROUTES.LOGIN} element={<Login />} />

                    <Route path={ROUTES.SIGN_UP} element={<Signup />} />

                </Routes>
            </Suspense>
        </Router>

    );

}
export default App;
