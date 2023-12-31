import {createBrowserRouter} from "react-router-dom";
import Main from "../Pages/Main/Main";
import AddTrip from "../Pages/AddTrip/AddTrip";
import OurTrip from "../Pages/OurTrip/OurTrip";
import SeeTicket from "../Pages/SeeTicket/SeeTicket";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <h2>home</h2>
        },
        {
            path: 'add-trip',
            element: <AddTrip></AddTrip>
        },
        {
            path: 'our-trip',
            element: <OurTrip></OurTrip>
        },
        {
          path: 'see-ticket/:id',
          element: <SeeTicket></SeeTicket>,
          loader: ({params}) => fetch(`http://localhost:5000/ticket/${params.id}`)
        }
      ]
    },
  ]);

export default router;