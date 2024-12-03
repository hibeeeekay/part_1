const Statistics = ({ good, neutral, bad, average, goodRating, total }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {total}</p>
      <p>Average : {average.toFixed(1)}</p>
      <p>Positive: {goodRating.toFixed(1)} %</p>
    </div>
  );
};

export default Statistics;
