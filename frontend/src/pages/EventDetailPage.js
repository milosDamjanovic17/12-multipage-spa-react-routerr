import { Await, json, redirect, useRouteLoaderData, defer } from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

const EventDetailPage = () => {

   const {event, events} = useRouteLoaderData('event-detail');

   return(
      <>
         <Suspense fallback={<p style={{textAlign: "center"}}>Loading.......</p>}>
            <Await resolve={event}>
               {(loadedEvent) => <EventItem event = {loadedEvent}/>}
            </Await>
         </Suspense>

         <Suspense fallback={<p style={{textAlign: "center"}}>Loading.......</p>}>  
            <Await resolve={events}>
               {(loadedEvents) => <EventsList events = {loadedEvents}/>}
            </Await>
         </Suspense>
      </>
   );

};


export default EventDetailPage;

// load one event by ID
async function loadEvent(eventId) {

   const response = await fetch('http://localhost:8080/events/' + eventId);

   if(!response.ok){
      throw json({message: 'Could not fetch details for selected event'},
         {status: 500},
      )
   }else{
      
      const resData = await response.json();
      return resData.event;
   }

}

// fetch the data with async function
export async function loadEvents(){

   const response = await fetch('http://localhost:8080/events');
 
   if(!response.ok){
    //  throw new Response(JSON.stringify({
    //     message: 'Could not fetch events!'}), {
    //     status: 500,
    //   });
    throw json({message: 'Could not fetch events'},
      {status: 500},
    );
   }else{
     const resData = await response.json();
     return resData.events;
   }
 
 }


// create a new loader function to load all data related to selected event item
export async function loader({request, params}) {

   const id = params.eventId; // => via params we can access parameters that are passed to component, in this case /events/:eventId


   return defer({
      event: await loadEvent(id),
      events: loadEvents()
   })
}


export async function action({params, request}) {

   const eventId = params.eventId;

   const response = await fetch('http://localhost:8080/events/' + eventId, {
      method: request.method,
   });

   if(!response.ok){
      throw json(
         {message: 'Could not delete event'},
         {status: 500,
         }
      )
   }
   return redirect('/events');
}



/**
 *    SINCE WE DEFINED loader in Router as: loader: {eventDetailLoader}} , {loader as eventDetailLoader} from './pages/EventDetailPage';
 * 
 *    eventDetailsLoader is bind to loader function inside EventDetails page, that function will execute and return some response message,
 *       that response is being passed to => const data = useLoaderData() and with data object we can access the event as shown in return JSX statement <EventItem event = {data.event} />

 * 
 * 
 */