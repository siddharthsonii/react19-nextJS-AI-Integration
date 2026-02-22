import React from "react";

const QueueDisplay = ({ queue, onUpdateStatus, onRemove }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "waiting":
        return "var(--warning)";
      case "serving":
        return "var(--success)";
      case "completed":
        return "var(--info)";
      default:
        return "var(--text)";
    }
  };

  return (
    <div className="queue-display">
      <h2>Current queue</h2>
      {queue.length === 0 ? (
        <p className="empty-queue">No customers in queue</p>
      ) : (
        <div className="queue-list">
          {/* If you use .map((customer) => {}) then you have to explicitly return JSX for each item so better way is to use () instead of curly braces, as () will always return JSX by default */}

          {queue.map((customer) => (
            <div className="queue-item" key={customer.id}>
              <div className="customer-info">
                <h3>{customer.name}</h3>
                <p>{customer.service}</p>
                <span
                  className="status"
                  style={{ color: getStatusColor(customer.status) }}
                >
                  {customer.status}
                </span>
              </div>
              <div className="actions">
                {/* With && operator both the coniditions should be true. The right side consition i.e., Button, this will always be true. Because its a component. So we just have to check the left side condition, if it is true, then the button component will show up.*/}

                {customer.status === "waiting" && (
                  <button
                    className="serve-btn"
                    onClick={() => onUpdateStatus(customer.id, "serving")}
                  >
                    Serve
                  </button>
                )}

                {customer.status === "serving" && (
                  <button
                    className="complete-btn"
                    onClick={() => onUpdateStatus(customer.id, "completed")}
                  >
                    Serve
                  </button>
                )}

                <button
                  className="remove-btn"
                  onClick={() => onRemove(customer.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QueueDisplay;
