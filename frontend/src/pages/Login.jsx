import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import axiosInstance from '../axiosConfig';

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { login } = useAuth();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!formData.email.includes('@')) {
            alert('Please enter a valid email');
            return;
        }

        if (formData.password.length < 6) {
            alert('Password must be at least 6 characters');
            return;
        }

        try {

            const response =
                await axiosInstance.post(
                    '/api/auth/login',
                    formData
                );

            login(response.data);

            if (
                response.data.role ===
                'organizer'
            ) {

                navigate('/events');

            } else {

                navigate('/');

            }

        } catch (error) {

            alert(
                'Login failed. Please try again.'
            );

        }

    };

    return (

        <div
            style={{
                minHeight: '100vh',
                backgroundColor: '#ffffff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >

            <div
                style={{
                    width: '420px',
                    backgroundColor: '#ffffff',
                    padding: '40px',
                    borderRadius: '12px',
                    border: '1px solid #dddddd',
                    boxShadow:
                        '0px 4px 15px rgba(0,0,0,0.1)'
                }}
            >

                <div
                    style={{
                        textAlign: 'center',
                        marginBottom: '30px'
                    }}
                >

                    <div
                        style={{
                            width: '50px',
                            height: '50px',
                            margin: '0 auto',
                            backgroundColor: '#8b5cf6',
                            borderRadius: '10px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: '15px',
                            color: 'white'
                        }}
                    >
                        
                    </div>

                    <h2>
                        Welcome to FestPass
                    </h2>

                    <p
                        style={{
                            color: '#666666',
                            fontSize: '14px'
                        }}
                    >
                        Sign in to access your digital
                        tickets and upcoming concerts
                    </p>

                </div>

                <form onSubmit={handleSubmit}>

                    <label>
                        Email Address
                    </label>

                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                email: e.target.value
                            })
                        }
                        style={{
                            width: '100%',
                            padding: '12px',
                            marginTop: '8px',
                            marginBottom: '20px',
                            borderRadius: '8px',
                            border: '1px solid #d1d5db'
                        }}
                    />

                    <label>
                        Password
                    </label>

                    <input
                        type="password"
                        value={formData.password}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                password: e.target.value
                            })
                        }
                        style={{
                            width: '100%',
                            padding: '12px',
                            marginTop: '8px',
                            marginBottom: '20px',
                            borderRadius: '8px',
                            border: '1px solid #d1d5db'
                        }}
                    />

                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '12px',
                            backgroundColor: '#8b5cf6',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer'
                        }}
                    >
                        Log In
                    </button>

                </form>

                <p
                    style={{
                        textAlign: 'center',
                        marginTop: '20px'
                    }}
                >
                    Don't have an account?{' '}
                    <Link
                        to="/register"
                        style={{
                            color: '#8b5cf6',
                            textDecoration: 'none',
                            fontWeight: 'bold'
                        }}
                    >
                        Register
                    </Link>
                </p>

            </div>

        </div>

    );

};

export default Login;