import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../axiosConfig';

const DeleteEventConfirmation = () => {

    const { id } = useParams();

    const navigate = useNavigate();

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

    const handleDelete = async () => {

        try {

            await axiosInstance.delete(
                `/api/events/${id}`
            );

            navigate('/events');

        } catch (error) {

            console.error(error);

        }

    };

    if (!event) {

        return <div>Loading...</div>;

    }

    return (

        <div
            style={{
                maxWidth: '700px',
                margin: '0 auto',
                padding: '40px'
            }}
        >

            <div
                style={{
                    border: '1px solid #ddd',
                    borderRadius: '12px',
                    padding: '30px',
                    textAlign: 'center',
                    boxShadow:
                        '0px 2px 8px rgba(0,0,0,0.1)'
                }}
            >

                <div
                    style={{
                        fontSize: '40px',
                        color: '#f59e0b'
                    }}
                >
                    ⚠
                </div>

                <h1>
                    Delete Event?
                </h1>

                <p>
                    This action cannot be undone.
                </p>

                <div
                    style={{
                        marginTop: '20px',
                        border: '1px solid #eee',
                        borderRadius: '8px',
                        padding: '20px',
                        textAlign: 'left'
                    }}
                >

                    <h3>
                        {event.eventName}
                    </h3>

                    <p>
                        {event.venue}
                    </p>

                    <p>
                        {event.date}
                    </p>

                </div>

                <p
                    style={{
                        color: 'red',
                        marginTop: '20px'
                    }}
                >
                    This action cannot be undone.
                </p>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '10px',
                        marginTop: '20px'
                    }}
                >

                    <button
                        onClick={handleDelete}
                        style={{
                            backgroundColor:
                                '#ef4444',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '10px 20px'
                        }}
                    >
                        Confirm Delete
                    </button>

                    <button
                        onClick={() =>
                            navigate('/events')
                        }
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            padding: '10px 20px'
                        }}
                    >
                        Cancel
                    </button>

                </div>

            </div>

        </div>

    );

};

export default DeleteEventConfirmation;