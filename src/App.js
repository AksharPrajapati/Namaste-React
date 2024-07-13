import React, { createContext, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/contact";
import Error from "./components/Error";
import Login from "./components/Login";

const RestaurantPage = lazy(() => import("./components/RestaurantPage"));
const About = lazy(() => import("./components/About"));

export const UserContext = createContext("Hey");

const AppLayout = () => {
  return (
    <UserContext.Provider value={"hello"}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:id",
        element: (
          <Suspense>
            <RestaurantPage />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
