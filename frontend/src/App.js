import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/events" element={<Events />} />
        <Route path="/purchase" element={<PurchaseTicket />} />
        <Route path="/eventdetails" element={<EventDetails />} />
        <Route path="/mytickets" element={<MyTickets />} />
        <Route path="/manageticket" element={<ManageTicket />} />
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path="/available-events" element={<AvailableEvents />} />
        <Route path="/organizereventdetails" element={<OrganizerEventDetails />}/>
      </Routes>
    </Router>
  );
}

export default App;
