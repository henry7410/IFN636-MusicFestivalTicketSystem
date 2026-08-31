import { useState } from 'react';

// SCRUM-115 Create editable ticket information form

const ManageTicket = () => {

    const [recipientName, setRecipientName] = useState('');

    const [recipientEmail, setRecipientEmail] = useState('');

    return (
        <div>
            <h1>Manage Ticket Information</h1>

            <h2>Transfer Ticket</h2>

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

            <button>
                Transfer Ticket
            </button>

        </div>
    );
};

export default ManageTicket;