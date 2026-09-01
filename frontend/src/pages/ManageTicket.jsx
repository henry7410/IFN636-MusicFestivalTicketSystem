import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../axiosConfig';

// SCRUM-115 Create editable ticket information form
// SCRUM-117 Connect update form to backend API
// SCRUM-118 Implement ticket update business logic
// SCRUM-119 Implement success and error handling

const ManageTicket = () => {

    const { id } = useParams();

    const [recipientName, setRecipientName] = useState('');

    const [recipientEmail, setRecipientEmail] = useState('');

    const [message, setMessage] = useState('');

    const handleTransfer = async () => {

        try {

            // const tickets = await axiosInstance.get(
            //     '/api/bookings'
            // );

            // if (!tickets.data.length) {

            //     setMessage('No tickets available.');

            //     return;
            // }

            // const bookingId = tickets.data[0]._id;

            await axiosInstance.put(
                `/api/bookings/${id}`,
                {
                    recipientName,
                    recipientEmail
                }
            );

            setMessage(
                'Ticket transferred successfully.'
            );

        } catch (error) {

            setMessage(
                'Transfer failed.'
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
                Manage Ticket Information
            </h1>

            <p
                style={{
                    color: '#666',
                    marginBottom: '30px'
                }}
            >
                Transfer your ticket to another
                recipient.
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

                <h2>
                    Transfer Ticket
                </h2>

                <div
                    style={{
                        marginTop: '20px'
                    }}
                >

                    <label>
                        Recipient Name
                    </label>

                    <br />

                    <input
                        type="text"
                        value={recipientName}
                        onChange={(e) =>
                            setRecipientName(
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
                        marginTop: '20px'
                    }}
                >

                    <label>
                        Recipient Email
                    </label>

                    <br />

                    <input
                        type="email"
                        value={recipientEmail}
                        onChange={(e) =>
                            setRecipientEmail(
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
                    onClick={handleTransfer}
                    style={{
                        marginTop: '25px',
                        width: '100%',
                        padding: '12px',
                        backgroundColor: '#06b6d4',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer'
                    }}
                >
                    Transfer Ticket
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

export default ManageTicket;
