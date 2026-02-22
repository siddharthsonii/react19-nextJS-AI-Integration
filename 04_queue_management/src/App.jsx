import { useState } from 'react';
import './App.css'
import QueueForm from './components/QueueForm';

function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    // Add data to the queue
  }

  const updateStatus = (id, newStatus) => {
    // Update the status of a customer in the queue
  }

  const removeFromQueue = (id) => {
    // Remove a customer from the queue
  };

  return (
    <div className="app">
      <header>
        <h1>Queue Management Application</h1>
        <p>Manage your customers efficiently</p>
      </header>
      <main>
        <QueueForm onAdd={addToQueue} />
        <h1>QueueDisplay</h1>
      </main>
    </div>
  )
}

export default App
