//This is just used to test authentication
import React, { useEffect, useState } from 'react';

function ProtectedComponent() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch('http://127.0.0.1:8000/hello/', {
      headers: {
        'Authorization': `Token ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error:', error));
  }, []);

  return <h1>{message}</h1>;
}

export default ProtectedComponent;
