import { useState } from "react";
import {FaUserPlus} from "react-icons/fa";

export default function QueueForm({onAdd}){
  const [name, setName] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (e) => {
    // Prevent page refresh on form submit
    e.preventDefault();

    // Validations
    if(!name.trim() || !service.trim()) {
      alert('Please fill in all fields');
      return;
    }

    // Add to queue (Send data to parent component)
    onAdd({name, service});

    // Reset form
    setName('');
    setService('');
  }
  return (
    <div>
      <form className="queue-form" onSubmit={handleSubmit}>
        <h2>Add to queue</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Customer name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">Select service</option>
            <option value="consultation">Consultation</option>
            <option value="payment">Payment</option>
            <option value="support">Support</option>
          </select>
        </div>
        <div>
          <button type="submit"><FaUserPlus /> Add Customer</button>
        </div>
      </form>
    </div>
  );
}