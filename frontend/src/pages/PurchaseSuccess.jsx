import { Link,useLocation } from 'react-router-dom';

const PurchaseSuccess = () => {

    const location = useLocation();

    const {
        eventName,
        quantity,
        totalPrice
    } = location.state || {};
    return (

        <div
            style={{
                minHeight: '80vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >

            <div
                style={{
                    width: '500px',
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
                        fontSize: '50px',
                        color: 'green'
                    }}
                >
                    ✓
                </div>

                <h1>
                    Operation Successful!
                </h1>

                <p>
                    Your ticket has been purchased
                    successfully.
                </p>

                <div
                    style={{
                        marginTop: '20px',
                        textAlign: 'left',
                        border: '1px solid #eee',
                        padding: '15px',
                        borderRadius: '8px'
                    }}
                >

                    <p>
                        <strong>Order Reference:</strong>
                        {' '}
                        FP-{Math.floor(Math.random() * 100000)}
                    </p>

                    <p>
                        <strong>Event Name:</strong>
                        {' '}
                        {eventName}
                    </p>

                    <p>
                        <strong>Ticket Count:</strong>
                        {' '}
                        {quantity} GA Passes
                    </p>

                    <p>
                        <strong>Total Paid:</strong>
                        {' '}
                        ${totalPrice}
                    </p>

                </div>

                <Link to="/mytickets">
                    <button
                        style={{
                            marginTop: '20px',
                            width: '100%',
                            padding: '12px',
                            backgroundColor: '#8b5cf6',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px'
                        }}
                    >
                        Return to Home
                    </button>
                </Link>

            </div>

        </div>

    );

};

export default PurchaseSuccess;