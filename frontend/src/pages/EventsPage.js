import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {

   const data = useLoaderData(); // since we defined resData.events in loader function inside EventsData element in Router
   const events = data.events;

   if(data.isError){
    return <p>{data.message}</p>
   }

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

// fetch the data with async function
export async function loader() {
   const response = await fetch('http://localhost:8080/events');

   if(!response.ok){
     throw new Response(JSON.stringify({
        message: 'Could not fetch events!'}), {
        status: 500,
      });
   }else{
     return response; // response returns Promise obj
   }
};
