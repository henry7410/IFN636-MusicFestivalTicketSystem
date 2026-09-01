import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../axiosConfig';

const ViewTicket = () => {

    const { id } = useParams();

    const [ticket, setTicket] = useState(null);

    useEffect(() => {

        const fetchTicket = async () => {

            try {

                const response =
                    await axiosInstance.get(
                        '/api/bookings'
                    );

                const selectedTicket =
                    response.data.find(
                        (item) =>
                            item._id === id
                    );

                setTicket(selectedTicket);

            } catch (error) {

                console.error(error);

            }

        };

        fetchTicket();

    }, [id]);

    if (!ticket) {

        return (
            <div>
                Loading...
            </div>
        );

    }

    return (

        <div
            style={{
                maxWidth: '900px',
                margin: '0 auto',
                padding: '30px'
            }}
        >

            <h1>
                Ticket Details
            </h1>

            <div
                style={{
                    border: '1px solid #ddd',
                    borderRadius: '12px',
                    padding: '25px',
                    marginTop: '20px'
                }}
            >

                <h2>
                    {ticket.eventName}
                </h2>

                <p>
                    Purchase Date:
                    {' '}
                    {
                        new Date(
                            ticket.purchaseDate
                        ).toLocaleDateString()
                    }
                </p>

                <p>
                    Quantity:
                    {' '}
                    {ticket.quantity}
                </p>

            </div>

            <div
                style={{
                    border: '1px solid #ddd',
                    borderRadius: '12px',
                    padding: '25px',
                    marginTop: '25px'
                }}
            >

                <h2>
                    Transfer Information
                </h2>

                <p>
                    Original Owner:
                    {' '}
                    Current Customer
                </p>

                <p>
                    Recipient Name:
                    {' '}
                    {
                        ticket.recipientName ||
                        'Not Transferred'
                    }
                </p>

                <p>
                    Recipient Email:
                    {' '}
                    {
                        ticket.recipientEmail ||
                        'Not Transferred'
                    }
                </p>

            </div>

        </div>

    );

};

export default ViewTicket;