const Home = () => {

    const festivals = [
        {
            id: 1,
            name: "Neon Horizon Festival",
            date: "Aug 12-14, 2026",
            location: "Brisbane",
            price: 189
        },
        {
            id: 2,
            name: "Acoustic Woods Collective",
            date: "Sep 05-07, 2026",
            location: "Gold Coast",
            price: 145
        },
        {
            id: 3,
            name: "Decibel Theory",
            date: "Oct 18, 2026",
            location: "Sydney",
            price: 95
        }
    ];

    return (
        <div
            style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '20px'
            }}
        >

            <h1>
                Discover Amazing Music Festivals
            </h1>

            <p>
                Browse upcoming events, filter by venue
                and date, and view details in one place.
            </p>

            <h2>
                Upcoming Featured Festivals
            </h2>

            <div
                style={{
                    display: 'flex',
                    gap: '15px'
                }}
            >

                {festivals.map((festival) => (

                    <div
                        key={festival.id}
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

                        <h3>{festival.name}</h3>

                        <p>{festival.location}</p>

                        <p>${festival.price}</p>

                        <button>
                            View Details
                        </button>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default Home;