import Home from "../pages/Home";
import Browse from "../pages/Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Bounce } from "react-toastify";
import Header from "./Header";
import Error from "../pages/Error";
import { Scrollbar } from "react-scrollbars-custom";
const AppLayout = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Home />
        </>
      ),
      errorElement: <Error />,
    },
    {
      path: "/browse",
      element: (
        <>
          <Header />
          <Browse />
        </>
      ),
      errorElement: <Error />,
    },
  ]);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default AppLayout;
