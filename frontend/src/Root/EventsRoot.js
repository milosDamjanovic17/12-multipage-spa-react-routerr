import { Outlet } from "react-router-dom";

import EventsNavigationBar from "../components/EventsNavigation";

function EventsRoot(){

   return(
      <>
         <EventsNavigationBar />
         <Outlet />
      </>

   )

};

export default EventsRoot;