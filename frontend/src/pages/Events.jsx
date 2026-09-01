import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosInstance from '../axiosConfig';

const Events = () => {

    const [events, setEvents] = useState([]);

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

        <div
            style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '30px'
            }}
        >

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px'
                }}
            >

                <div>

                    <h1>
                        My Events
                    </h1>

                    <p
                        style={{
                            color: '#666'
                        }}
                    >
                        Manage your events and ticket inventory.
                    </p>

                </div>

                <Link to="/createevent">

                    <button
                        style={{
                            backgroundColor: '#8b5cf6',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '10px 15px',
                            cursor: 'pointer'
                        }}
                    >
                        + Create New Event
                    </button>

                </Link>

            </div>

            <div
                style={{
                    marginTop: '30px',
                    border: '1px solid #ddd',
                    borderRadius: '12px',
                    overflow: 'hidden'
                }}
            >

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            '2fr 1fr 1fr 1.5fr',
                        padding: '15px',
                        backgroundColor: '#f5f5f5',
                        fontWeight: 'bold'
                    }}
                >

                    <div>
                        Event Name
                    </div>

                    <div>
                        Date
                    </div>

                    <div>
                        Remaining Tickets
                    </div>

                    <div>
                        Actions
                    </div>

                </div>

                {events.map((event) => (

                    <div
                        key={event._id}
                        style={{
                            display: 'grid',
                            gridTemplateColumns:
                                '2fr 1fr 1fr 1.5fr',
                            padding: '15px',
                            borderTop:
                                '1px solid #eee',
                            alignItems: 'center'
                        }}
                    >

                        <div>
                            {event.eventName}
                        </div>

                        <div>
                            {event.date}
                        </div>

                        <div>
                            {event.ticketQuantity}
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                gap: '10px'
                            }}
                        >

                            <Link
                                to={`/organizereventdetails/${event._id}`}
                            >
                                <button
                                    style={{
                                        backgroundColor: '#0ea5e9',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '6px',
                                        padding:
                                            '8px 12px'
                                    }}
                                >
                                    View
                                </button>
                            </Link>

                            <Link
                                to={`/editevent/${event._id}`}
                            >
                                <button
                                    style={{
                                        backgroundColor: '#06b6d4',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '6px',
                                        padding:
                                            '8px 12px'
                                    }}
                                >
                                    Edit
                                </button>
                            </Link>

                            <Link
                                to={`/deleteevent/${event._id}`}
                            >
                                <button
                                    style={{
                                        backgroundColor: '#ef4444',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '6px',
                                        padding: '8px 12px'
                                    }}
                                >
                                    Delete
                                </button>
                            </Link>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

};

export default Events;