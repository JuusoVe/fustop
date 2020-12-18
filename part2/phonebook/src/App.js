import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Info from './components/Info'
import UserMsg from './components/UserMsg'
import personService from'./services/persons'
import './index.css'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ userMessage, setUserMessage ] = useState(null)
  const [ msgType, setMsgType] = useState('')

  useEffect(() => {
    updateNames()
  }, [])

  const addName = (event) => {
    event.preventDefault()
    if (persons.map(p => p.name.toLowerCase()).includes(newName.toLowerCase())) {
      if (window.confirm(`would you like to replace the existing phonenumber?`)) {
        const perObject = persons.find(p => p.name.toLowerCase() === newName.toLowerCase())
        perObject.number = newNumber
        personService
        .update(perObject.id, perObject)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== perObject.id ? person : returnedPerson))
          giveUserMessage('suc','phone number updated')
        })
        .catch(error => {
          giveUserMessage('err', `failed to update ${perObject.name} error: ${error}`)
        })
      }
    } else {    
      const personObject = {
        name: newName,
        number: newNumber
      }
      personService
        .create(personObject)
        .then(returnedPerson =>  {
          setPersons(persons.concat(returnedPerson))
        })
        giveUserMessage('suc', 'new contact added')  
    }
  }

const giveUserMessage = (type, content) => {
  console.log(`in giveUserMessage, logging type: ${type}`)
  setMsgType(type)
  setUserMessage(content)
  setTimeout(() => {
    setUserMessage(null)
  }, 3000)

} 

const updateNames = () => {
  personService  
  .getAll()
  .then(receivedPersons => {
    setPersons(receivedPersons)
  })
}

  const deleteName = (id, un) => {
    personService
      .dele(id)
      .then(res => {
        un()
        giveUserMessage('suc', 'delete succesfull')
      }).catch(error =>
        giveUserMessage('err', `failed to delete. ${error}`)
      )
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  


  return (
    <div>
      <h2>Phonebook</h2>
      <UserMsg message={userMessage} type={msgType}/>
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
       <ul> <Info persons={persons.filter(p => p.name.toLowerCase().includes(newFilter.toLowerCase()))} del={deleteName} un={updateNames}/> </ul>
    </div>
  )

}

export default App