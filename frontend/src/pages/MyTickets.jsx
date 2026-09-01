import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../axiosConfig';

// SCRUM-110 Create purchased tickets page
// SCRUM-108 Connect ticket viewing pages to backend API
// SCRUM-112 Display purchased ticket information

const MyTickets = () => {

    const [tickets, setTickets] = useState([]);

    const handleCancel = async (id) => {

        try {

            await axiosInstance.delete(
                `/api/bookings/${id}`
            );

            setTickets(
                tickets.filter(
                    (ticket) =>
                        ticket._id !== id
                )
            );
            alert(
                'Ticket cancelled and returned to available inventory.'
            );

        } catch (error) {

            console.error(error);

        }

    };
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

        <div
            style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '30px'
            }}
        >

            <h1>
                My Tickets
            </h1>

            <p
                style={{
                    color: '#666'
                }}
            >
                Manage and view digital tickets
                for your upcoming festivals.
            </p>

            <div
                style={{
                    marginTop: '30px',
                    border: '1px solid #ddd',
                    borderRadius: '12px',
                    overflow: 'hidden'
                }}
            >

                {/* Header */}

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            '2fr 1fr 1fr 2fr',
                        padding: '15px',
                        backgroundColor: '#f5f5f5',
                        fontWeight: 'bold'
                    }}
                >
                    <div>Festival Event</div>
                    <div>Event Date</div>
                    <div>Quantity</div>
                    <div>Actions</div>
                </div>

                {/* Rows */}

                {tickets.map((ticket) => (

                    <div
                        key={ticket._id}
                        style={{
                            display: 'grid',
                            gridTemplateColumns:
                                '2fr 1fr 1fr 2fr',
                            padding: '15px',
                            borderTop:
                                '1px solid #eee',
                            alignItems: 'center'
                        }}
                    >

                        <div>
                            {ticket.eventName}
                        </div>

                        <div>
                            {
                                new Date(
                                    ticket.purchaseDate
                                ).toLocaleDateString()
                            }
                        </div>

                        <div>
                            {ticket.quantity}
                            {' '}
                            Ticket
                            {ticket.quantity > 1 ? 's' : ''}
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                gap: '10px'
                            }}
                        >

                            <button
                                style={{
                                    backgroundColor: '#0ea5e9',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '6px',
                                    padding: '8px 12px',
                                    cursor: 'pointer'
                                }}
                            >
                                View Ticket
                            </button>

                            <Link
                                to="/manageticket"
                            >
                                <button
                                    style={{
                                        backgroundColor: '#06b6d4',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '6px',
                                        padding: '8px 12px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Transfer Ticket
                                </button>
                            </Link>

                            <button
                                style={{
                                    backgroundColor: '#ef4444',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '6px',
                                    padding: '8px 12px',
                                    cursor: 'pointer'
                                }}
                                onClick={() =>
                                    handleCancel(
                                        ticket._id
                                    )
                                }
                            >
                                Cancel Ticket
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );
};

export default MyTickets;