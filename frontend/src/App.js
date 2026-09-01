import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Events from './pages/Events';
import PurchaseTicket from './pages/PurchaseTicket';
import EventDetails from './pages/EventDetails';
import MyTickets from './pages/MyTickets';
import ManageTicket from './pages/ManageTicket';
import CreateEvent from './pages/CreateEvent';
import OrganizerEventDetails from './pages/OrganizerEventDetails';
import EditEvent from './pages/EditEvent';
import Home from './pages/Home';
import PurchaseSuccess from './pages/PurchaseSuccess';
import ProtectedRoute from './components/ProtectedRoute';
import ViewTicket from './pages/ViewTicket';
import DeleteEventConfirmation from './pages/DeleteEventConfirmation';

function App() {

  return (
    <Router>
      <Layout />
    </Router>
  );

}

function Layout() {

  const location = useLocation();

  const hideNavbar =
    location.pathname === '/login' ||
    location.pathname === '/register';

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
            path="/purchase/:id"
            element={
                <ProtectedRoute role="customer">
                    <PurchaseTicket />
                </ProtectedRoute>
            }
        />
        <Route path="/eventdetails/:id" element={<EventDetails />} />
        <Route
            path="/mytickets"
            element={
                <ProtectedRoute role="customer">
                    <MyTickets />
                </ProtectedRoute>
            }
        />
        <Route
            path="/manageticket/:id"
            element={
                <ProtectedRoute role="customer">
                    <ManageTicket />
                </ProtectedRoute>
            }
        />
        <Route
            path="/createevent"
            element={
                <ProtectedRoute role="organizer">
                    <CreateEvent />
                </ProtectedRoute>
            }
        />
        <Route
          path="/events"
          element={
              <ProtectedRoute role="organizer">
                  <Events />
              </ProtectedRoute>
          } 
        />
        <Route path="/organizereventdetails/:id" element={
              <ProtectedRoute role="organizer">
                  <OrganizerEventDetails />
              </ProtectedRoute>
          }
        />
        <Route path="/purchase-success" element={<PurchaseSuccess />}/>
        <Route
            path="/editevent/:id"
            element={
                <ProtectedRoute role="organizer">
                    <EditEvent />
                </ProtectedRoute>
            }
        />
        <Route
            path="/viewticket/:id"
            element={
                <ProtectedRoute role="customer">
                    <ViewTicket />
                </ProtectedRoute>
            }
        />
        <Route
            path="/deleteevent/:id"
            element={
                <ProtectedRoute role="organizer">
                    <DeleteEventConfirmation />
                </ProtectedRoute>
            }
        />
      </Routes>
    </>
  );
}

export default App;
