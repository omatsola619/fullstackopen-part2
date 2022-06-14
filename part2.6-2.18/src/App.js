import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { getAll, create } from "./services/Notes";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getAll().then((response) => {
      console.log(response.data);
      setPersons(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    //check if name already exists
    const nameExists = persons.some((person) => person.name === newName);
    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newObject = {
        name: newName,
        number: newNumber,
      };
      create(newObject).then((response) => {
        setPersons(persons.concat(response.data));
      });
    }
  };

  //filter persons
  const personsToShow = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons;

  //delete persons from phonebook
  const deletePerson = (id) => {
    const personToDelete = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${personToDelete.name}?`)) {
      const newPersons = persons.filter((person) => person.id !== id);
      setPersons(newPersons);
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        handleSubmit={handleSubmit}
      />
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} deletePerson={deletePerson} />
    </div>
  );
}

export default App;
