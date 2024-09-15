import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`${process.env.REACT_APP_API_URL}/`); // Ensure this is correct
                setMessage(result.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export default App;
