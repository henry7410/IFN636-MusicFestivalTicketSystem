import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  // SCRUM-98 Logout business logic
  // SCRUM-96 Redirect after logout XX
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Task Manager</Link>
      <div>
        {user ? (
          <>
            <Link to="/events" className="mr-4">
            Home
            </Link>
            <Link to="/mytickets" className="mr-4">
            My Tickets
            </Link>

            <Link to="/profile" className="mr-4">
            Profile
            </Link>
            <Link to="/purchase" className="mr-4">Purchase Ticket</Link>
            {/* SCRUM-95 Create logout button */}
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-4">Login</Link>
            <Link
              to="/register"
              className="bg-green-500 px-4 py-2 rounded hover:bg-green-700"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
