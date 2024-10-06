import { useState } from 'react'

function App() {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const randomNote=()=>{
    const randomnum=Math.floor((Math.random()*anecdotes.length))
    setSelected(randomnum)
  }
  const voteanecdote=()=>{
    const copy=[...votes]
    copy[selected]+=1
    setVotes(copy)
  }
  const mostVotes=Math.max(...votes)
  const mostVoteIndex= votes.indexOf(mostVotes)

  return (
    <>
      <h1>Anecdote of the day</h1>
      <h2>{anecdotes[selected]}</h2>
      <p>has {votes[selected]} votes</p>
      <button onClick={voteanecdote}>vote</button>
      <button onClick={randomNote}>Next anecdote</button>

      <h1>Anecdotes votes</h1>
      <ul>
      {anecdotes.map((anecdote, index) => (
          <li key={index}>
            {anecdote}: {votes[index]} votes
          </li>
        ))}
      </ul>
      <h1>Anecdote with the most votes</h1>
      {mostVotes >0 && (
        <>
      <p>{anecdotes[mostVoteIndex]}</p>
      <p>has {mostVotes} votes</p>
      </>)}
      
    </>
  )
}

export default App
