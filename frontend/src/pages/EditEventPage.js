import { useParams, useRouteLoaderData } from "react-router-dom";
import EventForm from '../components/EventForm';

function EditEventPage() {

   const data = useRouteLoaderData('event-detail');

   const passedParam = useParams();

   return(
      <>
         <h1>Edit event page!</h1>
         <p> You are currently editing event: {passedParam.eventId}</p>
         
         <EventForm method='patch' event={data.event}/>
      </>
   );

};

export default EditEventPage;


