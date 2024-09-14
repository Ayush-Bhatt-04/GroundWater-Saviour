import logo from "./logo.svg";
import "./App.css";
import SpeechComponent from "./Components/SpeechComponent";
import GamingLandingPage from "./Components/GamingLandingPage";
import Robot from "./Components/Robot";
import Scene1 from "./Components/Scene1";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Quiz from "./Components/Quiz";
import Login from "./Components/Login";
import Signup from "./Components/Signup";




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <GamingLandingPage />
    },
    {
      path: "/Robot",
      element: <Robot />
    },
    {
      path: "/Scene1",
      element: <Scene1 />
    },
    {
      path: "/Quiz",
      element: <Quiz />
    },
    {
      path: "/Login",
      element: <Login />
    },
    {
      path: "/Signup",
      element: <Signup />
    },
    // {
    //   path:"/Notes",
    //   element:<Notes/>
    // },

  ])
  return (
    <>
      {/* <Robot/> */}
      {/* <GamingLandingPage /> */}
      {/* <SpeechComponent /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
