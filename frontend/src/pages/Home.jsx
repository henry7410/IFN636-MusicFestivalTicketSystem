import { useEffect, useState } from 'react';
import axiosInstance from '../axiosConfig';
import { Link } from 'react-router-dom';

const Home = () => {

    const [festivals, setFestivals] = useState([]);

    useEffect(() => {

        const fetchEvents = async () => {

            try {

                const response =
                    await axiosInstance.get(
                        '/api/events'
                    );

                setFestivals(
                    response.data
                );

            } catch (error) {

                console.error(error);

            }

        };

        fetchEvents();

    }, []);

    // const festivals = [
    //     {
    //         id: 1,
    //         name: "Neon Horizon Festival",
    //         date: "Aug 12-14, 2026",
    //         location: "Brisbane",
    //         price: 189
    //     },
    //     {
    //         id: 2,
    //         name: "Acoustic Woods Collective",
    //         date: "Sep 05-07, 2026",
    //         location: "Gold Coast",
    //         price: 145
    //     },
    //     {
    //         id: 3,
    //         name: "Decibel Theory",
    //         date: "Oct 18, 2026",
    //         location: "Sydney",
    //         price: 95
    //     }
    // ];

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
                    textAlign: 'center',
                    marginBottom: '40px'
                }}
            >
                <h1>
                    Discover Amazing Music Festivals
                </h1>

                <p>
                    Browse upcoming events, filter by venue
                    and date, and view details in one place.
                </p>
            </div>

            <h2
                style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    marginBottom: '20px'
                }}
            >
                Upcoming Featured Festivals
            </h2>

            <div
                style={{
                    display: 'flex',
                    gap: '15px',
                    marginBottom: '30px',
                    padding: '15px',
                    border: '1px solid #ddd',
                    borderRadius: '10px',
                    backgroundColor: '#f8f8f8'
                }}
            >
                <select
                    style={{
                        padding: '10px',
                        minWidth: '200px',
                        borderRadius: '8px'
                    }}
                >
                    <option>
                        Venue: All
                    </option>
                    <option>
                        Brisbane
                    </option>
                    <option>
                        Gold Coast
                    </option>
                    <option>
                        Sydney
                    </option>
                </select>

                <select
                    style={{
                        padding: '10px',
                        minWidth: '200px',
                        borderRadius: '8px'
                    }}
                >
                    <option>
                        Date: Any
                    </option>
                    <option>
                        August
                    </option>
                    <option>
                        September
                    </option>
                    <option>
                        October
                    </option>
                </select>
            </div>
            <div
                style={{
                    display: 'flex',
                    gap: '15px'
                }}
            >

                {festivals.map((festival) => (

                    <div
                        key={festival._id}
                        style={{
                            width: '300px',
                            border: '1px solid #ddd',
                            borderRadius: '12px',
                            padding: '15px'
                        }}
                    >

                        <div
                            style={{
                                height: '150px',
                                backgroundColor: '#d9d9d9',
                                borderRadius: '8px',
                                marginBottom: '10px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            Festival Image
                        </div>

                        <p>{festival.date}</p>

                        <h3>{festival.eventName}</h3>

                        <p>{festival.venue}</p>

                        <p>${festival.ticketPrice}</p>

                        <Link to={`/eventdetails/${festival._id}`}>
                            <button>
                                View Details
                            </button>
                        </Link>

                    </div>

                ))}

            </div>

            <div
                style={{
                    marginTop: '60px',
                    paddingTop: '40px',
                    borderTop: '1px solid #ddd',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap'
                }}
            >

                <div
                    style={{
                        maxWidth: '300px'
                    }}
                >
                    <h3>FestPass</h3>

                    <p>
                        Your single gateway to global music
                        festivals. Secure, fast, and unified
                        ticket management for world-class events.
                    </p>

                    <p
                        style={{
                            fontSize: '12px'
                        }}
                    >
                        © 2026 FestPass Technologies Inc.
                        All rights reserved.
                    </p>
                </div>

                <div>

                    <h4>Support</h4>

                    <p>Help Center</p>

                    <p>Privacy Policy</p>

                    <p>Terms of Service</p>

                    <p>Contact Us</p>

                </div>

                <div>

                    <h4>Partner</h4>

                    <p>For Organizers</p>

                    <p>List Your Event</p>

                    <p>API Access</p>

                    <p>Press Kit</p>

                </div>

            </div>




        </div>
    );
};

export default Home;