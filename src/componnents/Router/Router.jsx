
import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Main from "../Layout/Main";
import ErrorPage from "../Shared/ErrorPage";
import AllJob from "../Jobs/AllJob";
import AddJob from "../Jobs/AddJob";
import AppliedJobs from "../Jobs/AppliedJobs";
import MyJobs from "../Jobs/MyJobs"
import Testing from "../Shared/Testing";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/home',
                // loader: () => fetch('http://localhost:5000'),
    
                // loader: ()=> fetch(`process.env.REACT_APP_API_URL`) ,
                loader: ()=> fetch(`${import.meta.env.REACT_APP_API_URL}/jobs`) ,
                element: <h1>home</h1>,
                // element: <Home></Home>
                
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/alljobs',
                // loader: ()=> fetch(`${import.meta.env.REACT_APP_API_URL_LOCAL}/jobs`) ,
                loader: ()=> fetch('http://localhost:5000/jobs') ,
                element: <AllJob></AllJob>
            },
            {
                path: '/appliedjobs',
                element: <AppliedJobs> </AppliedJobs>
            },
            {
                path: '/myjobs/:email',
                element: <MyJobs> </MyJobs>
            },
            {
                path: '/addjob',
                element: <AddJob></AddJob>
            },
            {
                path: '/test',
                element: <Testing></Testing>
            },


            
            // {
            //     path: '/register',
            //     element: <Register></Register>
            // },

        ]




    }
])


export default router