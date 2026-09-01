import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  // SCRUM-98 Logout business logic
  // SCRUM-96 Redirect after logout
  const handleLogout = () => {

    logout();

    navigate('/');

  };

  return (

    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">

      <Link
        to="/"
        className="text-2xl font-bold"
      >
        FestPass
      </Link>

      <div>

        {user ? (

          user.role === 'organizer' ? (

            <>
              <Link
                to="/events"
                className="mr-4"
              >
                My Events
              </Link>

              <Link
                to="/createevent"
                className="mr-4"
              >
                Create Event
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </>

          ) : (

            <>
              <Link
                to="/"
                className="mr-4"
              >
                Home
              </Link>

              <Link
                to="/mytickets"
                className="mr-4"
              >
                My Tickets
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </>

          )

        ) : (

          <>
            <Link
              to="/login"
              className="bg-purple-600 px-4 py-2 rounded"
            >
              Login
            </Link>
          </>

        )}

      </div>

    </nav>

  );

};

export default Navbar;