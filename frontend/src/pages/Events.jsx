// SCRUM-109 Create available events page

const Events = () => {

    const events = [
        {
            id: 1,
            name: "Neon Horizon Festival",
            date: "Aug 12-14, 2026",
            location: "Brisbane",
            price: 189
        },
        {
            id: 2,
            name: "Acoustic Woods Collective",
            date: "Sep 05-07, 2026",
            location: "Gold Coast",
            price: 145
        },
        {
            id: 3,
            name: "Decibel Theory",
            date: "Oct 18, 2026",
            location: "Sydney",
            price: 95
        }
    ];

    return (
        <div>
            <h1>Upcoming Featured Festivals</h1>

            {events.map((event) => (
                <div
                    key={event.id}
                    style={{
                        border: '1px solid gray',
                        margin: '10px',
                        padding: '10px'
                    }}
                >
                    <h2>{event.name}</h2>

                    <p>Date: {event.date}</p>

                    <p>Location: {event.location}</p>

                    <p>Price: ${event.price}</p>

                    <button>
                        View Details
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Events;