import { Link } from 'react-router-dom';

// SCRUM-111 Create event details page

const EventDetails = () => {

    const event = {
        name: "Neon Horizon Festival",
        date: "Aug 12-14, 2026",
        location: "Brisbane",
        price: 189,
        description:
            "A music festival featuring live performances and entertainment."
    };

    return (
        <div>
            <h1>{event.name}</h1>

            <p>Date: {event.date}</p>

            <p>Location: {event.location}</p>

            <p>Price: ${event.price}</p>

            <p>{event.description}</p>

            <Link to="/purchase">
                <button>
                    Purchase Ticket
                </button>
            </Link>
        </div>
    );
};

export default EventDetails;