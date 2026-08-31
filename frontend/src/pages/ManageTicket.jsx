import { useState } from 'react';
import axiosInstance from '../axiosConfig';

// SCRUM-115 Create editable ticket information form
// SCRUM-117 Connect update form to backend API
// SCRUM-118 Implement ticket update business logic
// SCRUM-119 Implement success and error handling

const ManageTicket = () => {

    const [recipientName, setRecipientName] = useState('');

    const [recipientEmail, setRecipientEmail] = useState('');

    const [message, setMessage] = useState('');

    const handleTransfer = async () => {

        try {

            const tickets = await axiosInstance.get(
                '/api/bookings'
            );

            if (!tickets.data.length) {

                setMessage('No tickets available.');

                return;
            }

            const bookingId = tickets.data[0]._id;

            await axiosInstance.put(
                `/api/bookings/${bookingId}`,
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
        <div>

            <h1>
                Manage Ticket Information
            </h1>

            <h2>
                Transfer Ticket
            </h2>

            <div>

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
                />

            </div>

            <br />

            <div>

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
                />

            </div>

            <br />

            <button
                onClick={handleTransfer}
            >
                Transfer Ticket
            </button>

            <p>
                {message}
            </p>

        </div>
    );
};

export default ManageTicket;
