import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Tasks from './pages/Tasks';
import Events from './pages/Events';
import PurchaseTicket from './pages/PurchaseTicket';
import EventDetails from './pages/EventDetails';
import MyTickets from './pages/MyTickets';
import ManageTicket from './pages/ManageTicket';
import CreateEvent from './pages/CreateEvent';
import AvailableEvents from './pages/AvailableEvents';
import OrganizerEventDetails from './pages/OrganizerEventDetails';
import EditEvent from './pages/EditEvent';
import Home from './pages/Home';

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
        <Route path="/profile" element={<Profile />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/events" element={<Events />} />
        <Route path="/purchase" element={<PurchaseTicket />} />
        <Route path="/eventdetails/:id" element={<EventDetails />} />
        <Route path="/mytickets" element={<MyTickets />} />
        <Route path="/manageticket" element={<ManageTicket />} />
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path="/available-events" element={<AvailableEvents />} />
        <Route
          path="/organizereventdetails"
          element={<OrganizerEventDetails />}
        />
        <Route path="/editevent" element={<EditEvent />} />
      </Routes>
    </>
  );
}

export default App;
