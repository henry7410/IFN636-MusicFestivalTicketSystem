import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosInstance from '../axiosConfig';

// SCRUM-134 Create organizer event dashboard
// SCRUM-135 Connect dashboard to backend API
// SCRUM-137 Display created events list

const Events = () => {

    const [events, setEvents] = useState([]);

    const handleDeleteClick = async (id) => {

        const confirmed = window.confirm(
            'Are you sure you want to delete this event?'
        );

        if (!confirmed) return;

        try {

            await axiosInstance.delete(
                `/api/events/${id}`
            );

            alert('Event deleted successfully');

        } catch (error) {

            alert('Failed to delete event');

        }

    };


    useEffect(() => {

        const fetchEvents = async () => {

            try {

                const response =
                    await axiosInstance.get(
                        '/api/events'
                    );

                setEvents(response.data);

            } catch (error) {

                console.error(error);

            }

        };

        fetchEvents();

    }, []);

    return (

        <div>

            <h1>My Events</h1>

            <Link to="/createevent">
                <button>
                    Create New Event
                </button>
            </Link>

            {events.map((event) => (

                <div
                    key={event._id}
                    style={{
                        border: '1px solid gray',
                        margin: '10px',
                        padding: '10px'
                    }}
                >
                    <h2>
                        {event.eventName}
                    </h2>

                    <p>
                        Venue: {event.venue}
                    </p>

                    <p>
                        Date: {event.date}
                    </p>

                    <p>
                        Remaining Tickets:
                        {' '}
                        {event.ticketQuantity}
                    </p>

                    <Link to="/organizereventdetails">
                        <button>
                            View Details
                        </button>
                    </Link>


                    <Link to="/editevent">
                        <button>
                            Edit
                        </button>
                    </Link>

                    <button
                        onClick={() =>
                            handleDeleteClick(event._id)
                        }
                    >
                        Delete
                    </button>

                </div>

            ))}

        </div>

    );

};

export default Events;