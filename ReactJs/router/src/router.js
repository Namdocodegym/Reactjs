import { createBrowserRouter } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';

const router = createBrowserRouter([
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/home',
        element:<Home />
    }
])

export default router;