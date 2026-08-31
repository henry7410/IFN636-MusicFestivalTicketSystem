import { Link } from 'react-router-dom';

// Organizer Dashboard

const Events = () => {

    return (
        <div>

            <h1>My Events</h1>

            <Link to="/createevent">
                <button>
                    Create New Event
                </button>
            </Link>

            <div
                style={{
                    border: '1px solid gray',
                    margin: '10px',
                    padding: '10px'
                }}
            >
                <h2>Brisbane Music Festival</h2>

                <p>Date: Dec 01, 2026</p>

                <p>Remaining Tickets: 100</p>

                <button>
                    Edit
                </button>

                <button>
                    Delete
                </button>

            </div>

        </div>
    );
};

export default Events;
