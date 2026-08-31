import { useState } from 'react';

// SCRUM-127 Create event creation form

const CreateEvent = () => {

    const [eventName, setEventName] = useState('');
    const [venue, setVenue] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [ticketPrice, setTicketPrice] = useState('');
    const [ticketQuantity, setTicketQuantity] = useState('');

    return (
        <div>
            <h1>Create Event</h1>

            <div>
                <label>Event Name</label>
                <br />
                <input
                    type="text"
                    value={eventName}
                    onChange={(e) =>
                        setEventName(e.target.value)
                    }
                />
            </div>

            <br />

            <div>
                <label>Venue</label>
                <br />
                <input
                    type="text"
                    value={venue}
                    onChange={(e) =>
                        setVenue(e.target.value)
                    }
                />
            </div>

            <br />

            <div>
                <label>Date</label>
                <br />
                <input
                    type="date"
                    value={date}
                    onChange={(e) =>
                        setDate(e.target.value)
                    }
                />
            </div>

            <br />

            <div>
                <label>Description</label>
                <br />
                <textarea
                    value={description}
                    onChange={(e) =>
                        setDescription(e.target.value)
                    }
                />
            </div>

            <br />

            <div>
                <label>Ticket Price</label>
                <br />
                <input
                    type="number"
                    value={ticketPrice}
                    onChange={(e) =>
                        setTicketPrice(e.target.value)
                    }
                />
            </div>

            <br />

            <div>
                <label>Ticket Quantity</label>
                <br />
                <input
                    type="number"
                    value={ticketQuantity}
                    onChange={(e) =>
                        setTicketQuantity(e.target.value)
                    }
                />
            </div>

            <br />

            <button>
                Publish Event
            </button>

        </div>
    );
};

export default CreateEvent;
