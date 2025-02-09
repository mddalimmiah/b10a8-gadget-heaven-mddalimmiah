import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
const routes =createBrowserRouter([

    {
      path:'/',
      element: <MainLayouts></MainLayouts>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element: <Home></Home>,
        },
        {
          path:'/dashboard',
          element: <Dashboard></Dashboard>,
        },
        {
          path:'/statistics',
          element: <Statistics></Statistics>,
        },
      ],
      
    },
  ])

export default routes;