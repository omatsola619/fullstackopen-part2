import React from "react";

function PersonForm({newName, setNewName, newNumber, setNewNumber, handleSubmit}) {
  return (
    <div>
      <form>
        <div>
          name:{" "}
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number:{" "}
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            add
          </button>
        </div>
      </form>
    </div>
  );
}

export default PersonForm;
