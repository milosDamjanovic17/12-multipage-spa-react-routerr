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

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import EditEventPage from './pages/EditEventPage';
import ErrorPage from './pages/Error';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './pages/EventDetailPage';
import EventsPage, { loader as eventsLoader } from './pages/EventsPage';
import EventsRootLayout from '../src/Root/EventsRoot';
import HomePage from './pages/HomePage';
import NewEventPage from './pages/NewEventPage';
import RootLayout from '../src/Root/Root';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
