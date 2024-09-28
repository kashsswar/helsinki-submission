import { useState } from 'react'
function Header(props){
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

function Content({content}){
  return(
    <>
      <h2>Content of the course: {content}</h2>
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
    
    <Header course={course}/>
    <Content content={part1}/>
    <Total total={excercise1+excercise2+excercise3}/>
    </div>
  )
}

export default App
