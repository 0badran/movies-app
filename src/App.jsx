import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import AppRoutes from "./AppRoutes";
import MySpinner from "./components/my-spinner/MySpinner";
import Favorite from "./pages/favorite/Favorite";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Details from "./pages/movies/Details";
import Movies from "./pages/movies/Movies";
import { persister, Store } from "./store/store";
import instance from "./axiosConfig/instance";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoutes />,
    children: [
      { index: true, element: <Home /> },
      { path: "movies", element: <Movies /> },
      {
        path: "details/:id",
        element: <Details />,
        loader: async ({ params: { id } }) => {
          const res = await instance.get(
            `https://api.themoviedb.org/3/movie/${id}`
          );
          console.log(res);

          return res.data;
        },
      },
      { path: "login", element: <Login /> },
      { path: "favorite", element: <Favorite /> },
    ],
  },
  {
    path: "*",
    element: (
      <h1 className="text-center mt-5 text-light">
        Not Found
        <br />
        <span className="text-danger display-1">404</span>
      </h1>
    ),
  },
]);

function App() {
  return (
    <Provider store={Store}>
      <PersistGate loading={<MySpinner />} persistor={persister}>
        <div className="z-0 position-relative">
          <RouterProvider router={router} />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
