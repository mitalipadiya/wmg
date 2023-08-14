import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountrySelector = ({ onSelect }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countriesData = response.data.map(country => ({
          name: country.name.common,
          iso3Code: country.cca3,
          flagUrl: country.flags.png,
        }));
        setCountries(countriesData);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const handleSelectChange = (event) => {
    const selectedIso3Code = event.target.value;
    setSelectedCountry(selectedIso3Code);
    onSelect(selectedIso3Code);
  };

  return (
    <select onChange={handleSelectChange}>
      <option value="">Select a country</option>
      {countries.map((country) => (
        <option key={country.iso3Code} value={country.iso3Code}>
          {country.name}
        </option>
      ))}
    </select>
  );
};

export default CountrySelector;
