import React, { useState } from "react";

const App = () => {

  const Anecdotes = [

    "If it hurts, do it more often",

    "Adding manpower to a late software project makes it later!",

    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    
    "Premature optimization is the root of all evil.",
    
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [Points, setPoints] = useState([0, 0, 0, 0, 0, 0]);
  const [Top, setTop] = useState(0);
  const [TopIndex, setTopIndex] = useState(0);


  // Functiong for adding vote to an anecdote
  const handleVote = () => {
    
    // Copying array and adding vote
    const new_vote = [...Points];
    new_vote[selected] += 1;
    setPoints(new_vote);

    const topNum = [...new_vote];
    setTopIndex(topNum.indexOf(Math.max(...topNum)));

    setTop(Math.max(...topNum));
  };


  const [selected, setSelected] = useState(0);

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * Anecdotes.length));
  };

  return (
    <div>
      <h2> Anecdote of the day </h2>
      <p> {Anecdotes[selected]} </p>
      <p>Has {Points[selected]} Points</p>
      <p>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleClick}>next anecdote</button>
      </p>

      <h2>Anecdote with most votes</h2>
      <p>{Anecdotes[TopIndex]}</p>
      <p>Has {Top} Points</p>
    </div>
  );
};

export default App;