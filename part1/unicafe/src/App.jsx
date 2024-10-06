import { useState } from 'react'

const Button=({text,onClick})=>{
  return(
    <>
    <button onClick={onClick}>{text}</button> 
    </>
  )
}

const StatisticLine=({text, value})=>{
  return(
    <>
    
    <tr>
    <td>{text}</td>
    <td>{value}</td>
    </tr>
    
    </>
  )
}
const Statistics=({good,bad,neutral})=>{
  const total=neutral+bad+good
  const average=(good-bad)/total
  const percentage= total>0 ? (good*100)/total :0
  return(
    <>
      <h1>Statistics</h1>
      <table>
      <tbody>
      <StatisticLine text="Good" value ={good} />
      <StatisticLine text="Bad" value ={bad} />
      <StatisticLine text="Neutral" value ={neutral} />
      <StatisticLine text="All" value ={total}/>
      <StatisticLine text="Average" value ={average} />
      <StatisticLine text="Positive" value ={`${percentage}%`} />
      </tbody>
      </table>
    </>
  )
}
function App() {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const handleGood=()=>setGood(good+1)
  const handleBad=()=>setBad(bad+1)
  const handleNeutral=()=>setNeutral(neutral+1)

  return (
    <>
    <h1>Give Feedback</h1>
    <Button text='Good' onClick={handleGood}/>
    <Button text='Bad' onClick={handleBad}/>
    <Button text='Neutral' onClick={handleNeutral}/>
      {/* <p>Good {good}</p>
      <p>Bad {bad}</p>
      <p>Neutral {neutral}</p>
      <p>All {neutral+bad+good}</p>
      <p>Average {(neutral+bad+good)/3}</p>
      <p>Percentage {(neutral+bad+good)>0 ? ((good*100)/(neutral+bad+good)) : 0}</p> */}
      {(good>0 || bad>0 || neutral>0)?
      <Statistics good={good} bad={bad} neutral={neutral}/>: <p style={{fontWeight:'bold'}}>No feedback given</p>}
    </>
  )
}

export default App
