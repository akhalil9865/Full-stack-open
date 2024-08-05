import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });

  const getRandomInteger = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
  };

  const handleClick = () => {
    setSelected(getRandomInteger(0, 8));
  };
  const handleVote = () => {
    const x = { ...votes };
    x[selected] += 1;
    console.log(x);

    setVotes(x);
  };
  let sortable = [];
  for (var vehicle in votes) {
    sortable.push([vehicle, votes[vehicle]]);
  }

  sortable.sort(function (a, b) {
    return a[1] - b[1];
  });
  console.log(sortable);

  return (
    <>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes </div>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <h1>anecdotes with the most votes</h1>
      <div>
        {sortable[7][1]}:{anecdotes[sortable[7][0]]}
      </div>
    </>
  );
};

export default App;
