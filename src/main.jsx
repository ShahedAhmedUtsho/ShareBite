import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root';
import Home from './Components/Home/HomeComponents/Home';
import AbalableFoods from './Components/AbalableFoods/AbalableFoods'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import AuthProvider from './AuthProvider/AuthProvider'
import Private from './Private/Private'
import ManageMyFood from './Components/ManageMyFood/ManageMyFood'
import AddFood from './Components/AddFood/AddFood'
import ManageMyRequest from './Components/ManageMyRequest/ManageMyRequest'
import FoodDetails from './Components/FoodDetails/FoodDetails'
import ErrorPage from './Components/ErrorPage/ErrorPage'
import UpdateFood from './Components/UpdateFood/UpdateFood'


const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element:<Home></Home>,

      },
      {
        path: "/availablefoods",
        element:<AbalableFoods></AbalableFoods>,
        

      },
      {
        path: "/availablefoods/:FoodID",
        element:<Private><FoodDetails></FoodDetails></Private>,

      },
      {
        path: "/login",
        element:<Login></Login>,

      },
      {
        path: "/register",
        element:<Register></Register>,

      },
      {
        path: "/managemyfood",
        element:<Private><ManageMyFood></ManageMyFood></Private>,

      }
      ,
      {
        path: "/addfood",
        element:<Private><AddFood></AddFood></Private>,

      }
      ,
      {
        path: "/myfoodrequest",
        element:<Private><ManageMyRequest></ManageMyRequest></Private>,

      }
      ,
      {
        path: "/update/:id",
        element:<Private><UpdateFood></UpdateFood></Private>,

      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

     <QueryClientProvider client={queryClient}>

     <AuthProvider>
<RouterProvider router={router} />
</AuthProvider>


    </QueryClientProvider>
   
  </React.StrictMode>,
)
