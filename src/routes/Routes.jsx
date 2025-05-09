import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";

import ProductDetails from "../components/ProductDetails/ProductDetails";
import Cards from "../components/Cards/Cards";
import Products from "../pages/Products";

const routes =createBrowserRouter([

    {
      path:'/',
      element: <MainLayouts></MainLayouts>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: '/',
          element: <Home />,
          loader: () => fetch('../category.json'),
          children: [
              {
                  path: '/',
                  element: <Cards></Cards>,
                  loader: () => fetch('../products.json'),
              },
              {
                  path: 'category/:category?',
                  element: <Cards></Cards>,
                  loader: () => fetch('../products.json'),
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
        {
          path:'/products',
          element: <Products></Products>,
          loader: () => fetch('/products.json'),
         
        },
      ],
      
    },
  ])

export default routes;