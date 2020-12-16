import React from 'react'

const Course = (props) => {
  return (
    <div>
    <Header name={props.name}/>
    <Content parts={props.parts}/>
    <Total parts={props.parts}/>
  </div>
  )
}

const Header = (props) => {
  return (
  <div>
    <h2>{props.name}</h2>
  </div>
  )
}

const Total = (props) => {

  const { parts } = props
  const total = parts.map(part => part.exercises).reduce((acc, cur) => acc + cur, 0)

  return (
  <div>
    <h4>total of excercises {total}</h4>
  </div>
  )
}

const Content = (props) => {

  const { parts } = props

  return (
    <div>
      {parts.map(parts => <Part key={parts.id} name={parts.name} exercises={parts.exercises}/>)}
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.name} {props.exercises}
    </div>
  )
}  

export default Course