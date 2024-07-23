import Login from './pages/login/Login';
import AppRoutes from './AppRoutes';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movies from './pages/movies/Movies';
import Details from './pages/movies/Details';
import Favorite from './pages/favorite/Favorite';
import { Provider } from 'react-redux';
import { persister, Store } from './store/store';
import Home from './pages/home/Home';
import instance from "./axiosConfig/instance";
import { PersistGate } from 'redux-persist/integration/react';
import MySpinner from './components/my-spinner/MySpinner';


const router = createBrowserRouter([
  {
    path: "/", element: <AppRoutes />, children: [
      { index: true, element: <Home />, errorElement: <h1 className='text-center mt-5 text-danger'>Not found products</h1> },
      { path: "movies", element: <Movies /> },
      {
        path: "details/:id", element: <Details />, loader: async ({ params }) => {
          let res = await instance.get(params.id);
          return res.data
        }
      },
      { path: "login", element: <Login /> },
      { path: "favorite", element: <Favorite /> },
    ],

  },
  { path: "*", element: <h1 className='text-center mt-5 text-light'>Not Found<br /><span className='text-danger display-1'>404</span></h1> }
]);

function App() {
  return (
    <Provider store={Store}>
      <PersistGate loading={<MySpinner/>} persistor={persister}>
        <div className='z-0 position-relative'>
          <RouterProvider router={router} />
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App;
