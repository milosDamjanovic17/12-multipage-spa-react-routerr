import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {

   const fetchedEvents = useLoaderData(); // since we defined resData.events in loader function inside EventsData element in Router
   const events = fetchedEvents.events;

  return (
    <>
      <EventsList events={fetchedEvents} />
    </>
  );
}

export default EventsPage;

// fetch the data with async function
export async function loader() {
   const response = await fetch('http://localhost:8080/events');

   if(!response.ok){
     // incorrect case
   }else{
     return response;
   };
};
