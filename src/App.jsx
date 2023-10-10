import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {useContext} from 'react'
import { AuthContext } from './context/AuthContext';
import Register from './components/authentication/register/Register';
import Login from './components/authentication/login/Login';
import Layout from './components/shared/Layout/Layout';
import Home from './components/app/home/Home';

const authRouter = createBrowserRouter([
  {path: '', element: <Layout />, children: [
    {path: 'register', element: <Register />},
    {path: 'login', element: <Login />},
  ]}
])

const appRouter = createBrowserRouter([
  {path: '', element: <Layout />, children: [
    {index: true, element: <Home />}
  ]}
])

function App() {

  const {state} = useContext(AuthContext)

  return (
    <div className="App">
      {
        !state.isLoggedIn ? <RouterProvider router={authRouter}></RouterProvider> : <RouterProvider router={appRouter}> </RouterProvider>
      }
    </div>
  );
}

export default App;
