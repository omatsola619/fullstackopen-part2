import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log(response.data[0]);
      setCountries(response.data);
    });
  }, []);

  //display countries that match the search
  const filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="app">
      find countries
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <ul>
        {/* {search ? (
          filteredCountries.map((country, index) => (
            <li key={index}>{country.name.common}</li>
          ))
        ) : (
          <div>no countries searched</div>
        )} */}

        {search && filteredCountries.length < 10
          ? filteredCountries.map((country, index) => (
              <li key={index}>{country.name.common}</li>
            ))
          : filteredCountries.length > 10
          ? "please specify another search term"
          : "no countries searched"}
      </ul>
    </div>
  );
}

export default App;
