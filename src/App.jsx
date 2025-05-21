import './assets/tailwind.css';
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import React from 'react';
import Loading from './components/Loading';
import User from './pages/User';
import Guest from './pages/Guest';

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import('./pages/Orders'));
const Customers = React.lazy(() => import('./pages/Customers'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Error400 = React.lazy(() => import('./pages/Error400'));
const Error401 = React.lazy(() => import('./pages/Error401'));
const Error403 = React.lazy(() => import('./pages/Error403'));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/auth/login"));
const Register = React.lazy(() => import("./pages/auth/register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/users" element={<User />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        <Route>
            <Route path="*" element={<NotFound />} />
            <Route path="/error400" element={<Error400 />} />
            <Route path="/error401" element={<Error401 />} />
            <Route path="/error403" element={<Error403 />} />
            <Route path="/guest" element={<Guest />} />
        </Route>  

      </Routes>
    </Suspense>
  );
}

export default App;
