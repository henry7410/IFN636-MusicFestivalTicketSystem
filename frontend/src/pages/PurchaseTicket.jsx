import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../axiosConfig';

const PurchaseTicket = () => {
    const { id } = useParams();

    // SCRUM-101 Implement ticket quantity selection
    const [quantity, setQuantity] = useState(1);

    // SCRUM-104 Success and error handling
    const [message, setMessage] = useState('');

    // SCRUM-105 Update ticket availability after purchase
    // changing code
    // SCRUM-100 Display event and ticket information
    const [event, setEvent] = useState(null);

    useEffect(() => {

        const fetchEvent = async () => {

            try {

                const response =
                    await axiosInstance.get(
                        `/api/events/${id}`
                    );

                setEvent(response.data);

            } catch (error) {

                console.error(error);

            }

        };

        fetchEvent();

    }, [id]);

    const handlePurchase = async () => {

        if (quantity < 1) {
            setMessage('Please select at least 1 ticket.');
            return;
        }

        if (quantity > event.ticketQuantity) {
            setMessage('Not enough tickets available.');
            return;
        }

        try {

            await axiosInstance.post(
                '/api/bookings',
                {
                    eventName: event.eventName,
                    quantity
                }
            );

            setMessage(
                'Ticket purchased successfully.'
            );

        } catch (error) {

            setMessage(
                'Purchase failed.'
            );

        }

    };

    if (!event) {

        return <div>Loading...</div>;

    }
    const totalPrice =
    quantity * (event?.ticketPrice || 0);
    

    return (

        <div
            style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '20px'
            }}
        >

            <h1
                style={{
                    marginBottom: '30px'
                }}
            >
                Confirm Ticket Order
            </h1>

            <div
                style={{
                    display: 'flex',
                    gap: '30px',
                    alignItems: 'flex-start'
                }}
            >

                {/* Event Card */}

                <div
                    style={{
                        flex: 0.9,
                        border: '1px solid #ddd',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow:
                            '0px 2px 8px rgba(0,0,0,0.1)'
                    }}
                >

                    <div
                        style={{
                            height: '220px',
                            backgroundColor: '#d9d9d9',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: 'bold'
                        }}
                    >
                        Festival Image
                    </div>

                    <div
                        style={{
                            padding: '20px'
                        }}
                    >

                        <h2>
                            {event.eventName}
                        </h2>

                        <p>
                            {event.venue}
                        </p>

                        <p>
                            {event.date}
                        </p>

                        <p>
                            Status:
                            {
                                event.ticketQuantity > 0
                                    ? 'Available'
                                    : 'Sold Out'
                            }

                        </p>

                    </div>

                </div>

                {/* Purchase Card */}

                <div
                    style={{
                        flex: 1.4,
                        border: '1px solid #ddd',
                        borderRadius: '12px',
                        padding: '25px',
                        boxShadow:
                            '0px 2px 8px rgba(0,0,0,0.1)'
                    }}
                >

                    <h3>
                        Ticket Quantity
                    </h3>

                    <div
                        style={{
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'center',
                            marginBottom: '30px'
                        }}
                    >

                        <button
                            onClick={() =>
                                setQuantity(
                                    Math.max(
                                        1,
                                        quantity - 1
                                    )
                                )
                            }
                        >
                            -
                        </button>

                        <div
                            style={{
                                padding: '8px 16px',
                                border: '1px solid #ddd',
                                borderRadius: '8px'
                            }}
                        >
                            {quantity}
                        </div>

                        <button
                            onClick={() =>
                                setQuantity(
                                    quantity + 1
                                )
                            }
                        >
                            +
                        </button>

                    </div>

                    <h3>
                        Order Summary
                    </h3>

                    <p>
                        General Ticket × {quantity}
                    </p>

                    <p>
                        Ticket Price:
                        {' '}
                        ${event.ticketPrice}
                    </p>

                    <hr
                        style={{
                            marginTop: '15px',
                            marginBottom: '15px'
                        }}
                    />

                    <h2>
                        Total Price:
                        {' '}
                        ${totalPrice}
                    </h2>

                    <button
                        onClick={handlePurchase}
                        style={{
                            width: '100%',
                            padding: '12px',
                            marginTop: '20px',
                            backgroundColor: '#8b5cf6',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer'
                        }}
                    >
                        Confirm Purchase
                    </button>

                    <p
                        style={{
                            marginTop: '15px'
                        }}
                    >
                        {message}
                    </p>

                </div>

            </div>

        </div>

    );

};

export default PurchaseTicket;