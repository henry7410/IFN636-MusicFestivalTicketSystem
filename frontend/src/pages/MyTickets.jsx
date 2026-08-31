import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../axiosConfig';

// SCRUM-110 Create purchased tickets page
// SCRUM-108 Connect ticket viewing pages to backend API
// SCRUM-112 Display purchased ticket information

const MyTickets = () => {

    const [tickets, setTickets] = useState([]);

    useEffect(() => {

        const fetchTickets = async () => {

            try {

                const response = await axiosInstance.get(
                    '/api/bookings'
                );

                setTickets(response.data);

            } catch (error) {

                console.error(error);

            }

        };

        fetchTickets();

    }, []);

    return (
        <div>
            <h1>My Tickets</h1>

            {tickets.map((ticket) => (

                <div
                    key={ticket._id}
                    style={{
                        border: '1px solid gray',
                        margin: '10px',
                        padding: '10px'
                    }}
                >
                    <h2>{ticket.eventName}</h2>

                    <p>
                        Quantity: {ticket.quantity}
                    </p>

                    <p>
                        Purchase Date:
                        {' '}
                        {new Date(
                            ticket.purchaseDate
                        ).toLocaleDateString()}
                    </p>

                    <button>
                        View Ticket
                    </button>

                    <Link to="/manageticket">
                        <button>
                            Transfer Ticket
                        </button>
                    </Link>

                    <button
                        onClick={() =>
                            alert('Cancel Ticket Clicked')
                        }
                    >
                        Cancel Ticket
                    </button>

                </div>

            ))}
        </div>
    );
};

export default MyTickets;