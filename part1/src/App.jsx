import { useState } from 'react'
function Header(props){
  console.log(props)
  return(
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}
const Part=(props)=>{
  return(
    <>
      <h3>{props.name} {props.exercise}</h3>
    </>
  )
}

function Content(props){

  return(
    <>
      {/* <h2>Content of the course: {content}</h2> */}
      <Part name={props.course.parts[0].name} exercise={props.course.parts[0].exercises}/>
      <Part name={props.course.parts[1].name} exercise={props.course.parts[1].exercises}/>
      <Part name={props.course.parts[2].name} exercise={props.course.parts[2].exercises}/>
    </>
  )
}
const Total=(props)=>{
  return(
    <>
     <p>Total :{props.course.parts[0].exercises+props.course.parts[1].exercises+props.course.parts[2].exercises}</p>
    </>
  )
}



function App() {
 
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
    {/* //   <h1>{course}</h1>
    //   <p>{part1} {exercise1}</p>
    //   <p>{part2} {exercise2}</p>
    //   <p>{part3} {exercise3}</p>
    //   <p>Numbers of exercises {exercise1 + exercise2 + exercise3}</p> */}
    
    <Header course={course}/>
    <Content course={course}/>
    <Total course={course}/>
    </div>
  )
}

export default App
