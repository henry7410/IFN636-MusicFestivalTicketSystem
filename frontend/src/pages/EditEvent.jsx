import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../axiosConfig';

const EditEvent = () => {

    const { id } = useParams();

    const [eventName, setEventName] =
        useState('Brisbane Music Festival');

    const [venue, setVenue] =
        useState('Brisbane');

    const [date, setDate] =
        useState('2026-12-01');

    const [description, setDescription] =
        useState('Festival Test');

    const [ticketPrice, setTicketPrice] =
        useState('50');

    const [ticketQuantity, setTicketQuantity] =
        useState('100');

    useEffect(() => {

    const fetchEvent = async () => {

            try {

                const response =
                    await axiosInstance.get(
                        `/api/events/${id}`
                    );

                setEventName(
                    response.data.eventName
                );

                setVenue(
                    response.data.venue
                );

                setDate(
                    response.data.date
                );

                setDescription(
                    response.data.description
                );

                setTicketPrice(
                    response.data.ticketPrice
                );

                setTicketQuantity(
                    response.data.ticketQuantity
                );

            } catch (error) {

                console.error(error);

            }

        };

        fetchEvent();

    }, [id]);

    const [message, setMessage] = useState('');

    const handleUpdateEvent = async () => {

        try {

            // const response =
            //     await axiosInstance.get(
            //         '/api/events'
            //     );

            // const eventId =
            //     response.data[0]._id;

            await axiosInstance.put(
                `/api/events/${id}`,
                {
                    eventName,
                    venue,
                    date,
                    description,
                    ticketPrice,
                    ticketQuantity
                }
            );

            setMessage(
                'Event updated successfully'
            );

        } catch (error) {

            setMessage(
                'Failed to update event'
            );

        }

    };

    return (

        <div
            style={{
                maxWidth: '900px',
                margin: '0 auto',
                padding: '30px'
            }}
        >

            <h1>
                Edit Event
            </h1>

            <p
                style={{
                    color: '#666',
                    marginBottom: '25px'
                }}
            >
                Update event information and
                ticket inventory.
            </p>

            <div
                style={{
                    border: '1px solid #ddd',
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow:
                        '0px 2px 8px rgba(0,0,0,0.1)'
                }}
            >

                <div
                    style={{
                        marginBottom: '20px'
                    }}
                >
                    <label>
                        Event Name
                    </label>

                    <input
                        type="text"
                        value={eventName}
                        onChange={(e) =>
                            setEventName(
                                e.target.value
                            )
                        }
                        style={{
                            width: '100%',
                            padding: '12px',
                            marginTop: '8px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}
                    />
                </div>

                <div
                    style={{
                        marginBottom: '20px'
                    }}
                >
                    <label>
                        Venue
                    </label>

                    <input
                        type="text"
                        value={venue}
                        onChange={(e) =>
                            setVenue(
                                e.target.value
                            )
                        }
                        style={{
                            width: '100%',
                            padding: '12px',
                            marginTop: '8px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}
                    />
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            '1fr 1fr',
                        gap: '20px',
                        marginBottom: '20px'
                    }}
                >

                    <div>

                        <label>
                            Date
                        </label>

                        <input
                            type="date"
                            value={date}
                            onChange={(e) =>
                                setDate(
                                    e.target.value
                                )
                            }
                            style={{
                                width: '100%',
                                padding: '12px',
                                marginTop: '8px',
                                borderRadius: '8px',
                                border: '1px solid #ddd'
                            }}
                        />

                    </div>

                    <div>

                        <label>
                            Description
                        </label>

                        <textarea
                            value={description}
                            onChange={(e) =>
                                setDescription(
                                    e.target.value
                                )
                            }
                            style={{
                                width: '100%',
                                padding: '12px',
                                marginTop: '8px',
                                borderRadius: '8px',
                                border: '1px solid #ddd'
                            }}
                        />

                    </div>

                </div>

                <div
                    style={{
                        marginBottom: '20px'
                    }}
                >

                    <label>
                        Ticket Price
                    </label>

                    <input
                        type="number"
                        value={ticketPrice}
                        onChange={(e) =>
                            setTicketPrice(
                                e.target.value
                            )
                        }
                        style={{
                            width: '100%',
                            padding: '12px',
                            marginTop: '8px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}
                    />

                </div>

                <div
                    style={{
                        marginBottom: '20px'
                    }}
                >

                    <label>
                        Ticket Quantity
                    </label>

                    <input
                        type="number"
                        value={ticketQuantity}
                        onChange={(e) =>
                            setTicketQuantity(
                                e.target.value
                            )
                        }
                        style={{
                            width: '100%',
                            padding: '12px',
                            marginTop: '8px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}
                    />

                </div>

                <button
                    onClick={handleUpdateEvent}
                    style={{
                        backgroundColor: '#06b6d4',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '10px 15px',
                        cursor: 'pointer'
                    }}
                >
                    Update Event
                </button>

                {message && (

                    <p
                        style={{
                            marginTop: '20px',
                            color:
                                message.includes(
                                    'successfully'
                                )
                                    ? 'green'
                                    : 'red'
                        }}
                    >
                        {message}
                    </p>

                )}

            </div>

        </div>

    );

};

export default EditEvent;