import { useState } from 'react';

// SCRUM-139 Create event edit form
// SCRUM-140 Populate existing event information

const EditEvent = () => {

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

    return (
        <div>

            <h1>Edit Event</h1>

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
                Update Event
            </button>

        </div>
    );
};

export default EditEvent;