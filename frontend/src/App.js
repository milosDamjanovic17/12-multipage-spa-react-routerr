// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements) X
//    - HomePage X
//    - EventsPage X
//    - EventDetailPage X
//    - NewEventPage X
//    - EditEventPage X
// 2. Add routing & route definitions for these five pages
//    - / => HomePage X
//    - /events => EventsPage X
//    - /events/<some-id> => EventDetailPage X
//    - /events/new => NewEventPage X
//    - /events/<some-id>/edit => EditEventPage X
// 3. Add a root layout that adds the <MainNavigation> component above all page components X
// 4. Add properly working links to the MainNavigation X
// 5. Ensure that the links in MainNavigation receive an "active" class when active X
// 6. Output a list of dummy events to the EventsPage X
//    Every list item should include a link to the respective EventDetailPage X
// 7. Output the ID of the selected event on the EventDetailPage X
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components X

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import HomePage from './pages/HomePage';
import EventsPage, { loader as eventsLoader} from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import EventsRoot from './Root/EventsRoot';

import RootMainNavigationBar from './Root/Root';

const myRouter = createBrowserRouter([

  { path: '/', 
    element: <RootMainNavigationBar />, 
    children: [

    { index: true, element: <HomePage />},
    { path:'events', 
      element: <EventsRoot />, 
      children: [

        {index: true, 
          element: <EventsPage />, 
          loader: eventsLoader},
        {path: ':eventId', element: <EventDetailPage />},
        {path: 'new', element: <NewEventPage />},
        {path: ':eventId/edit', element: <EditEventPage />}

      ]
    },

    ]
  },

]);

function App() {
  return <RouterProvider router = {myRouter}/>;
}

export default App;