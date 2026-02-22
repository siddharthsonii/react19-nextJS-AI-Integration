import { useState } from 'react';
import './App.css'
import QueueForm from './components/QueueForm';
import QueueDisplay from './components/QueueDisplay';

function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    // Add data to the queue

    // We can generate a unique ID for each customer using Date.now() or a library like uuid
    // We are spreading the existing queue because we want to keep the existing customers and add the new one at the end
    setQueue([...queue, {...customer, id: Date.now(), status: 'waiting'}]);
  }

  const updateStatus = (id, newStatus) => {
    // Update the status of a customer in the queue
    setQueue(queue.map((customer) => {
      if(customer.id === id) {
        return {...customer, status: newStatus};
      } else {
        return customer;
      }
    }));
  }

  const removeFromQueue = (id) => {
    // Remove a customer from the queue

    // filter() naya array banata hai
    // Aur sirf un elements ko rakhta hai jinke liye condition TRUE ho.
    setQueue(queue.filter((customer) => customer.id !== id));
  };

  return (
    <div className="app">
      <header>
        <h1>Queue Management Application</h1>
        <p>Manage your customers efficiently</p>
      </header>
      <main>
        <QueueForm onAdd={addToQueue} />
        <QueueDisplay queue={queue} onUpdateStatus={updateStatus} onRemove={removeFromQueue} />
      </main>
    </div>
  );
}

export default App
