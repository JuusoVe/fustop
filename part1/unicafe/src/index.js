import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {

  if (props.good + props.neutral + props.bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  let all = props.good + props.neutral + props.bad
  let average = ((props.good * 1 + props.bad * -1) / all)
  let positive = props.good / all


  return (
    <div>
      <table>
        <tbody> 
          <StatisticsLine text="good" value={props.good}/>
          <StatisticsLine text="neutral" value={props.neutral}/>
          <StatisticsLine text="bad" value={props.bad}/>
          <StatisticsLine text="all" value={all}/>
          <StatisticsLine text="average" value={average}/>
          <StatisticsLine text="positive" value={positive}/>
        </tbody>
      </table>
    </div>
  )
}

const StatisticsLine = (props) => {
  return (
      <tr>
        <td>{props.text}</td><td>{props.value}</td>
      </tr>
  )
}


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = props => {

  const [good, increaseGood] = useState(0)
  const [neutral, increaseNeutral] = useState(0)
  const [bad, increaseBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => increaseGood(good + 1)} text="good" />
      <Button handleClick={() => increaseNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => increaseBad(bad + 1)} text="bad" />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}


ReactDOM.render(<App />, 
  document.getElementById('root')
)