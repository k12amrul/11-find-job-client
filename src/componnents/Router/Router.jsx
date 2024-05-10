
import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Main from "../Layout/Main";
import ErrorPage from "../Shared/ErrorPage";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000'),
                // loader: ()=> fetch('https://a-11-server-eight.vercel.app') ,
                // loader: ()=> fetch(`process.env.REACT_APP_API_URL`) ,

                element: <h1>home</h1>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },


            
            // {
            //     path: '/register',
            //     element: <Register></Register>
            // },

        ]




    }
])


export default router