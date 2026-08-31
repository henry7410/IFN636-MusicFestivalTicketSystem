import { useState } from 'react';


const PurchaseTicket = () => {
    // SCRUM-101 Implement ticket quantity selection
    const [quantity, setQuantity] = useState(1);

    // SCRUM-104 Success and error handling
    const [message, setMessage] = useState('');

    // SCRUM-105 Update ticket availability after purchase
    const [availableTickets, setAvailableTickets] = useState(100);
    
    // SCRUM-100 Display event and ticket information
    const event = {
        name: "Brisbane Music Festival",
        date: "2026-12-01",
        location: "Brisbane",
        availableTickets: availableTickets,
        price: 50
    };

    // SCRUM-104 Purchase success and error handling
    const handlePurchase = () => {

        if (quantity < 1) {
            setMessage('Please select at least 1 ticket.');
            return;
        }

        if (quantity > availableTickets) {
            setMessage('Not enough tickets available.');
            return;
        }

        setAvailableTickets(
            availableTickets - Number(quantity)
        );

        setMessage('Ticket purchased successfully.');
    };

    // SCRUM-99 Create ticket purchase page
    return (
        <div>
        <h1>Purchase Ticket</h1>

        <h2>{event.name}</h2>

        <p>Date: {event.date}</p>

        <p>Location: {event.location}</p>

        <p>
            Status: {
                event.availableTickets > 0
                    ? 'Available'
                    : 'Sold Out'
            }
        </p>

        <p>Price: ${event.price}</p>
        <div>
            <label>Quantity:</label>

            <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) =>
                setQuantity(e.target.value)
                }
            />
        </div>
        <button onClick={handlePurchase}>
            Purchase Ticket
        </button>
        <p>{message}</p>
        </div>
    );
};

export default PurchaseTicket;