import Header from "../component/header";
import Content from "../component/content";
import Total from "../component/total";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const totalExercises = course.parts
    ? course.parts.reduce((sum, part) => sum + part.exercises, 0)
    : 0;

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total totalExercises={totalExercises} />
    </>
  );
};

export default App;
