import { json, useLoaderData, useParams, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {

   const data = useRouteLoaderData('event-detail');

   return(
      <>
         <EventItem event={data.event} />
      </>
   );

};


export default EventDetailPage;

// create a new loader function to load all data related to selected event item

export async function loader({request, params}) {

   const id = params.eventId; // => via params we can access parameters that are passed to component, in this case /events/:eventId

   const response = await fetch('http://localhost:8080/events/' + id);

   if(!response.ok){
      throw json({message: 'Could not fetch details for selected event'},
         {status: 500},
      )
   }else{
      
      return response;
   }

}



/**
 *    SINCE WE DEFINED loader in Router as: loader: {eventDetailLoader}} , {loader as eventDetailLoader} from './pages/EventDetailPage';
 * 
 *    eventDetailsLoader is bind to loader function inside EventDetails page, that function will execute and return some response message,
 *       that response is being passed to => const data = useLoaderData() and with data object we can access the event as shown in return JSX statement <EventItem event = {data.event} />

 * 
 * 
 */