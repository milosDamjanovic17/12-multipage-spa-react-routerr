import { useParams } from "react-router-dom";

const EventDetailPage = () => {

   const parameter = useParams();

   return(
      <>
         <h1>Event Detail Page!</h1>
         <p>{parameter.eventId}</p>
      </>
   );

};


export default EventDetailPage;