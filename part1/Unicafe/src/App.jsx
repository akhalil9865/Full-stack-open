import { useState } from "react";
import { Button } from "./components/Button";
import { Stat } from "./components/Stat";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };
  return (
    <>
      <h1>give feedback</h1>
      <Button content={"good"} handle={handleGood} />
      <Button content={"neutral"} handle={handleNeutral} />
      <Button content={"bad"} handle={handleBad} />
      <h2>statistics</h2>
      <Stat content={"good"} count={good} />
      <Stat content={"neutral"} count={neutral} />
      <Stat content={"bad"} count={bad} />
      <Stat content={"all"} count={good + neutral + bad} />
      <Stat content={"average"} count={good + bad * -1} />
      <Stat content={"positive"} count={good / (good + neutral + bad || 1)} />
    </>
  );
};

export default App;
