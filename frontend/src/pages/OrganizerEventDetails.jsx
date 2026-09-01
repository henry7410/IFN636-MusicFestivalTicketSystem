import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../axiosConfig';

const OrganizerEventDetails = () => {

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

        return <div>Loading...</div>;

    }

    return (

        <div
            style={{
                maxWidth: '1000px',
                margin: '0 auto',
                padding: '30px'
            }}
        >

            <h1>
                Event Details
            </h1>

            <p
                style={{
                    color: '#666',
                    marginBottom: '25px'
                }}
            >
                Review event information and ticket inventory.
            </p>

            <div
                style={{
                    border: '1px solid #ddd',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow:
                        '0px 2px 8px rgba(0,0,0,0.1)'
                }}
            >

                <div
                    style={{
                        height: '250px',
                        backgroundColor: '#d9d9d9',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '20px',
                        fontWeight: 'bold'
                    }}
                >
                    Festival Banner Image
                </div>

                <div
                    style={{
                        padding: '30px'
                    }}
                >

                    <h2>
                        {event.eventName}
                    </h2>

                    <div
                        style={{
                            display: 'flex',
                            gap: '30px',
                            marginTop: '20px',
                            marginBottom: '20px'
                        }}
                    >

                        <div>
                             {event.venue}
                        </div>

                        <div>
                             {event.date}
                        </div>

                    </div>

                    <hr />

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns:
                                '1fr 1fr',
                            gap: '20px',
                            marginTop: '25px'
                        }}
                    >

                        <div>

                            <h3>
                                Event Information
                            </h3>

                            <p>
                                <strong>
                                    Description:
                                </strong>
                            </p>

                            <p>
                                {event.description}
                            </p>

                        </div>

                        <div>

                            <h3>
                                Ticket Information
                            </h3>

                            <p>
                                <strong>
                                    Ticket Price:
                                </strong>
                                {' '}
                                ${event.ticketPrice}
                            </p>

                            <p>
                                <strong>
                                    Remaining Tickets:
                                </strong>
                                {' '}
                                {event.ticketQuantity}
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default OrganizerEventDetails;