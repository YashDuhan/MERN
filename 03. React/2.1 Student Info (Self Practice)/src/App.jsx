import { useState } from "react";

function App() {
  const [student_info, setStudent_info] = useState([
    {
      name: "Yash",
      age: 19,
    },
    {
      name: "John",
      age: 20,
    },
    {
      name: "Alice",
      age: 18,
    },
  ]);

  function addStudents() {
    // this will use the setStudent_info to add the students
    // Now the ...student_info is actually populating the previous student_info with this new data
    setStudent_info([
      ...student_info,
      {
        name: "Random Name",
        age: 22,
      },
    ]);
  }

  return (
    <div>
      <h1>Student Info</h1>
      {student_info.map(function (data) {
        return <PrintStudent name={data.name} age={data.age} />;
      })}
      <button onClick={addStudents}>Add a random student</button>
    </div>
  );
}

function PrintStudent(props) {
  return (
    <p>
      Name: {props.name}, Age: {props.age}
    </p>
  );
}

export default App;
