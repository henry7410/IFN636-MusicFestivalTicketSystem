import { useState } from 'react';
import axiosInstance from '../axiosConfig';

const CreateEvent = () => {

    const [eventName, setEventName] = useState('');
    const [venue, setVenue] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [ticketPrice, setTicketPrice] = useState('');
    const [ticketQuantity, setTicketQuantity] = useState('');
    const [message, setMessage] = useState('');

    const handleCreateEvent = async () => {

        try {

            await axiosInstance.post(
                '/api/events',
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
                'Event created successfully'
            );

        } catch (error) {

            setMessage(
                'Failed to create event'
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
                Create New Event
            </h1>

            <p
                style={{
                    color: '#666',
                    marginBottom: '25px'
                }}
            >
                Fill in the form to publish a new
                event on FestPass.
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
                            border:
                                '1px solid #ddd'
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
                            border:
                                '1px solid #ddd'
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
                                border:
                                    '1px solid #ddd'
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
                                border:
                                    '1px solid #ddd'
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
                            border:
                                '1px solid #ddd'
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
                            border:
                                '1px solid #ddd'
                        }}
                    />

                </div>

                <div
                    style={{
                        display: 'flex',
                        gap: '10px'
                    }}
                >

                    <button
                        onClick={handleCreateEvent}
                        style={{
                            backgroundColor:
                                '#8b5cf6',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            padding:
                                '10px 15px',
                            cursor: 'pointer'
                        }}
                    >
                        Create Event
                    </button>

                </div>

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

export default CreateEvent;