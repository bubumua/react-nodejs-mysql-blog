// App.jsx 通常是你的 React 应用的主组件，它可能包含应用的路由配置，以及其他全局组件，如导航栏、侧边栏等。

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.scss";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  // Add route object here
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      // { path: "/register", element: <Register /> },
      // { path: "/login", element: <Login /> },
      { path: "/post/:id", element: <Write /> },
      { path: "/single", element: <Single /> },
    ],
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/write",
    element: <Write />,
  },
  {
    path: "/single",
    element: <Single />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}>
          <Route path="/" />
        </RouterProvider>

      </div>
    </div>
  )
}

export default App;
