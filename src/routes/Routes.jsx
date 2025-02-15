import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import Cards from "../Cards/Cards";
import ProductDetails from "../components/ProductDetails/ProductDetails";

const routes =createBrowserRouter([

    {
      path:'/',
      element: <MainLayouts></MainLayouts>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: '/',
          element: <Home />,
          loader: () => fetch('/category.json'),
          children: [
              {
                  path: 'category/:category?',
                  element: <Cards></Cards>,
                  loader: () => fetch('/products.json'),
              },
            
          ],
      },
   
      
        {
          path:'/dashboard',
          element: <Dashboard></Dashboard>,
        },
        {
          path:'/statistics',
          element: <Statistics></Statistics>,
        },
        {
          path:'/product-details/:product_id',
          element: <ProductDetails></ProductDetails>,
         
        },
      ],
      
    },
  ])

export default routes;