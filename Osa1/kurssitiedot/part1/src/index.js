import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header course={course}/>
      <Content part1={part1.name} exercise1={part1.exercises}
      part2={part2.name} exercise2={part2.exercises}
      part3={part3.name} exercise3={part3.exercises}/>
      
      <Total result={part1.exercises+part2.exercises+part3.exercises}/>
    </div>
  )
}

const Part = (props) => {
  return(
    <p>{props.part} {props.exercise}</p>
  )
}


const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.result}</p>
  )
  
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercise={props.exercise1}/>
      <Part part={props.part2} exercise={props.exercise2}/>
      <Part part={props.part3} exercise={props.exercise3}/>
    </div>
    
    
  )
  
}

ReactDOM.render(<App />, document.getElementById('root'))