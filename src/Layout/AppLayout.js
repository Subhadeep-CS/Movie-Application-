import Home from "../pages/Home";
import Browse from "../pages/Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Bounce } from "react-toastify";
import { auth } from "../config/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/slice/userSlice";
import Header from "./Header";
const AppLayout = () => {
  const dispatch=useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header/>
          <Home />
        </>
      ),
    },
    {
      path: "/browse",
      element:(
        <>
          <Header/>
          <Browse />
        </>
      ),
    },
  ]);

  //onAuthState change called only once app level
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        //user signin
        const {uid,email,displayName,photoURL}=user;
        dispatch(addUser({uid,email,displayName,photoURL}));
      } 
      else{
        //user signout
        dispatch(removeUser());
      }
    })
  },[])
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
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
