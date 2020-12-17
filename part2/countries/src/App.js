import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Info from './components/Info'

import axios from 'axios'
import Country from './components/Country'

const App = () => {
  const [ countries, setCountries ] = useState([]) 
  const [ newFilter, setNewFilter ] = useState('')
  

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])


  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleShowClick = (countryName) => {
    setNewFilter(countryName)
  }

    return (
      <div>
        <Filter handleChange={handleFilterChange}/>
        <Info countries={countries.filter(c => c.name.toLowerCase().includes(newFilter.toLowerCase()))}
        handler={handleShowClick}/>
      </div>
      )  
}




export default App