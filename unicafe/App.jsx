import Header from "./component/header";
import Statistics from "./component/statistics";
import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setTotal(updatedGood + neutral + bad);
  };

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(updatedNeutral + good + bad);
  };

  const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setTotal(updatedBad + good + neutral);
  };

  const totalResponses = good + neutral + bad;
  const totalSum = good * 1 + neutral * 0 + bad * -1;
  const average = totalResponses > 0 ? totalSum / totalResponses : 0;
  const goodRating = totalResponses > 0 ? (good / totalResponses) * 100 : 0;

  return (
    <div>
      <Header text="give feedback" />
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <br />
      <Header text="statistics" />

      {totalResponses > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          average={average}
          goodRating={goodRating}
        />
      ) : (
        <p>No feedback gathered yet.</p>
      )}
    </div>
  );
};
export default App;
