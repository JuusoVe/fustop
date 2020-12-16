import React, { useState } from 'react'
import Filter from './components/Filter'
import Info from './components/Info'


const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: '040-11123123' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')


  const addName = (event) => {
    event.preventDefault()
    if (persons.map(p => p.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      } else {    
      const personObject = {
        name: newName,
        number: newNumber
      }
    
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }
  const handleNameChange = (event) => {
    console.log('event.target.value')
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log('event.target.value')
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          <Filter handleChange={handleFilterChange}/>
      </div>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input name={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input number={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
       <ul> <Info persons={persons.filter(p => p.name.includes(newFilter))}/> </ul>
    </div>
  )

}

export default App