// SCRUM-110 Create purchased tickets page

const MyTickets = () => {

    const tickets = [
        {
            id: 1,
            eventName: "Neon Horizon Festival",
            date: "Aug 12-14, 2026",
            quantity: 2
        },
        {
            id: 2,
            eventName: "Acoustic Woods Collective",
            date: "Sep 05-07, 2026",
            quantity: 1
        }
    ];

    return (
        <div>
            <h1>My Tickets</h1>

            {tickets.map((ticket) => (
                <div
                    key={ticket.id}
                    style={{
                        border: '1px solid gray',
                        margin: '10px',
                        padding: '10px'
                    }}
                >
                    <h2>{ticket.eventName}</h2>

                    <p>Date: {ticket.date}</p>

                    <p>Quantity: {ticket.quantity}</p>

                    <button>
                        View Ticket
                    </button>

                    <button>
                        Transfer Ticket
                    </button>

                    <button>
                        Cancel Ticket
                    </button>
                </div>
            ))}
        </div>
    );
};

export default MyTickets;