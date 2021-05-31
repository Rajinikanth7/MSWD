import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//Creating the feedback button 
const Button = ({text,handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

//create the const statistics 
const Statistics = ({Good , Neutral , Bad , All , Average , Postive}) =>{
  
  //condition
  if(Good === 0 && Neutral === 0 && Bad == 0){
    return (
      <p>No feedback given</p>
    )
  }
  else
    return (
      <table>
        <tbody>
        <tr>
          <td><Statistic feedback="Good" value={Good}/></td>
        </tr>

        <tr>
          <td><Statistic feedback="Neutral" value={Neutral}/></td>
        </tr>

        <tr>
          <td><Statistic feedback="Bad" value={Bad}/></td>
        </tr>

        <tr>
          <td><Statistic feedback="All" value={All}/></td>
        </tr>

        <tr>
          <td><Statistic feedback="Average" value={ isNaN(Average)? 0 : Average}/></td>
        </tr>

        <tr>
          <td><Statistic feedback="Positive" value={ isNaN(Postive)? 0: Postive + " %"}/></td>
        </tr>
        </tbody>
      </table>
    )
}

const Statistic = ({feedback,value}) => {
  return (
    <td>{feedback} {value}</td>
  )
} 

const App = () => {
  
  //calculating the responce
  const [Good, setGood] = useState(0)

  const [Neutral, setNeutral] = useState(0)

  const [Bad, setBad] = useState(0)

  //Increases the good value
  const addToGood = () => {
    setGood(Good + 1)
  }

  //Increases the Neutral value
  const addToNeutral = () => {
    setNeutral(Neutral + 1)
  }

  //Increases the Bad value
  const addToBad = () =>{
    setBad(Bad + 1)
  }

  //finding the All,Neutal and Bad values
  const All = Good+Neutral+Bad
  const Average = ((Good - Bad)/All)*100
  const Postive = (Good/All)*100
  return (
    <div>
      <h1>Please provide the feedback</h1>
      <Button text="Good" handleClick={()=>addToGood()}/>

      <Button text="Neutral" handleClick={()=>addToNeutral()}/>

      <Button text="Bad" handleClick={()=>addToBad()}/>

      <h2>Statistics</h2>
      
      <Statistics Good={Good} Bad={Bad} Neutral={Neutral} All={All} Average={Average} Postive={Postive}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)