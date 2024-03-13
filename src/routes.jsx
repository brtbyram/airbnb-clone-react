import Home from "./pages/home/";
import HomeLayout from "./pages/home/HomeLayout";
import Profile from "./pages/profile";
import Blog from "./pages/blog";
import Page404 from "./pages/Page404";
import AuthLayout from "./pages/auth/AuthLayout";
import Login from "./pages/auth/Login";

const routes = [
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "blog",
                element: <Blog />,
            },
        ],
    },
    {
        path: "profile",
        auth: true,
        element: <Profile />
    },
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
        ],
    },
    {
        path: "*",
        element: <Page404 />,
    },
];

export default routes;
