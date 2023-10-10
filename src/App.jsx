import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Register from './components/authentication/register/Register';
import Login from './components/authentication/login/Login';
import Layout from './components/shared/layout/Layout';
import Home from './components/app/home/Home';
import RouteGuard from './components/guards/RouteGuard';
import LandingPage from './components/shared/landing/LandingPage';

const router = createBrowserRouter([
  {path: '', element: <Layout />, children: [
    {index: true, element: <LandingPage />},
    {path: 'register', element: <Register />},
    {path: 'login', element: <Login />},
    {path: 'home', element: <RouteGuard> <Home/> </RouteGuard>}
  ]}
])

function App() {

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
