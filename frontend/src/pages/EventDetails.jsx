import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosInstance from '../axiosConfig';

const EventDetails = () => {

    const { id } = useParams();

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

    if (!event) {

        return (
            <div>
                Loading...
            </div>
        );

    }

    return (

        <div
            style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '20px'
            }}
        >

            <div
                style={{
                    height: '300px',
                    backgroundColor: '#1f2940',
                    borderRadius: '12px',
                    marginBottom: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    fontSize: '24px'
                }}
            >
                Festival Banner Image
            </div>

            <h1
                style={{
                    fontSize: '36px',
                    marginBottom: '5px'
                }}
            >
                {event.eventName}
            </h1>

            <p
                style={{
                    color: 'green',
                    fontWeight: 'bold'
                }}
            >
                Available
            </p>

            <div
                style={{
                    display: 'flex',
                    gap: '40px',
                    marginTop: '20px',
                    marginBottom: '20px'
                }}
            >

                <p>
                     {event.venue}
                </p>

                <p>
                     {event.date}
                </p>

            </div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '40px',
                    marginTop: '30px'
                }}
            >

                {/* Left Side */}

                <div
                    style={{
                        flex: 1
                    }}
                >

                    <h3>
                        About The Event
                    </h3>

                    <p
                        style={{
                            lineHeight: '1.8',
                            maxWidth: '700px'
                        }}
                    >
                        {event.description}
                    </p>

                </div>

                {/* Ticket Card */}

                <div
                    style={{
                        width: '300px',
                        minWidth: '300px',
                        border: '1px solid #ddd',
                        borderRadius: '12px',
                        padding: '20px',
                        boxShadow:
                            '0px 2px 8px rgba(0,0,0,0.1)'
                    }}
                >

                    <h3>
                        Ticket Information
                    </h3>

                    <h1>
                        ${event.ticketPrice}
                    </h1>

                    <p>
                        General Ticket
                    </p>

                    <Link
                        to={`/purchase/${event._id}`}
                    >

                        <button
                            style={{
                                width: '100%',
                                padding: '12px',
                                marginTop: '10px',
                                border: 'none',
                                borderRadius: '8px',
                                backgroundColor: '#8b5cf6',
                                color: 'white',
                                cursor: 'pointer'
                            }}
                        >
                            Purchase Ticket
                        </button>

                    </Link>

                </div>

            </div>

        </div>

    );

};

export default EventDetails;