import Home from "../pages/Home";
import Browse from "../pages/Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const AppLayout=()=>{
    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<Home/>,
        },
        {
            path:'/browse',
            element:<Browse/>
        }
    ])
    return(
        <div>
            <RouterProvider router={appRouter}></RouterProvider>
        </div>
    );
}

export default AppLayout;