const API_BASE_URL = 'http://127.0.0.1:8000'

export const fetchTasks = () => {
    return fetch(API_BASE_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
}

export const handleAddItem = (newItemText) => {
    return fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            description: newItemText,
        })
    }).then(response => response.json())
}

