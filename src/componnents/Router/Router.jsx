
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
import Home from "../Home/Home";
import JobDetails from "../Jobs/JobDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/jobs`),
               
                
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
                loader: ()=> fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/jobs`) ,
                element: <AllJob></AllJob>
            },
            {
                path: '/job/:id',
                loader: ({params})=> fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/job/${params.id}`) ,
                element: <JobDetails> </JobDetails>
            },
            {
                path: '/appliedjobs',
                element: <AppliedJobs> </AppliedJobs>
            },
            {
                path: '/myjobs/:email',
                loader: ({params})=> fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/myjobs/${params?.email}`) ,
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


            
           
        ]




    }
])


export default router