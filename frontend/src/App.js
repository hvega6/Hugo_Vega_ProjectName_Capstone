import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Ensure the API URL is correctly defined
                const apiUrl = `${process.env.REACT_APP_API_URL}/`; // This should be correct
                console.log("API URL:", apiUrl); // Debugging line
                const result = await axios.get(apiUrl);
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
