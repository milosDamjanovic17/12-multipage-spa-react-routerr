import { useParams } from "react-router-dom";

function EditEventPage() {


   const passedParam = useParams();

   return(
      <>
         <h1>Edit event page!</h1>
         <p> You are currently editing event: {passedParam.eventId}</p>
      </>
   );

};

export default EditEventPage;