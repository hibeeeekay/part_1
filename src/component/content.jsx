const Content = ({ parts = [] }) => {
  if (!parts || parts.length === 0) {
    return <p>No parts available</p>;
  }

  return (
    <>
      <ul>
        {parts.map((part, index) => (
          <li key={index}>
            {part.name} - {part.exercises}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Content;
