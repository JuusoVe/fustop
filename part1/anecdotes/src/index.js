import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  let [votes, incVotes] = useState(new Array(anecdotes.length).fill(0))
  
  const voteSelected = () => {
    let copy = [...votes]
    copy[selected] += 1
    votes = copy
    incVotes(copy)
  }

  const indexOfMax = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={() => setSelected(Math.floor(Math.random() * Math.floor(anecdotes.length)))} text="next anecdote" />
      <Button handleClick={voteSelected} text="vote" />
      <h2>Anecdote with most votes</h2>
      <p>{props.anecdotes[indexOfMax]}</p>
      <p>has {votes[indexOfMax]} votes</p>
    </div>
  )
}



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)