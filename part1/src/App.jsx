import { useState } from 'react'
function Header(props){
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}
const Part=(props)=>{
  return(
    <>
      <h3>{props.name} {props.excercise}</h3>
    </>
  )
}

function Content(props){

  return(
    <>
      {/* <h2>Content of the course: {content}</h2> */}
      <Part name={props.part1} excercise={props.excercise1}/>
      <Part name={props.part2} excercise={props.excercise2}/>
      <Part name={props.part3} excercise={props.excercise3}/>
    </>
  )
}
const Total=(props)=>{
  return(
    <>
     <p>Total :{props.total}</p>
    </>
  )
}



function App() {
 
  const course= 'Half Stack application Development'
  const part1='Fundamentals of React'
  const excercise1=10
  const part2='Using props to pass data'
  const excercise2=7
  const part3 = 'State of a component'
  const excercise3=14
  return (
    <div>
    {/* //   <h1>{course}</h1>
    //   <p>{part1} {excercise1}</p>
    //   <p>{part2} {excercise2}</p>
    //   <p>{part3} {excercise3}</p>
    //   <p>Numbers of excercises {excercise1 + excercise2 + excercise3}</p> */}
    
    {/* <Header course={course}/> */}
    <Content part1={part1} excercise1={excercise1} part2={part2} excercise2={excercise2} part3={part3} excercise3={excercise3}/>
   
    {/* <Total total={excercise1+excercise2+excercise3}/> */}
    </div>
  )
}

export default App
