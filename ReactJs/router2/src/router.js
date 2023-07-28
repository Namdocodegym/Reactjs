import { createBrowserRouter } from "react-router-dom";
import Employee from "./components/Employee";
import EmployeeDetail from "./components/EmployeeDetail";
import Login from "./components/Login";


const router = createBrowserRouter([
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/employee',
        element:<Employee />
    },
    {
        path:'/employee-detail',
        element:<EmployeeDetail />
    }
])

export default router;