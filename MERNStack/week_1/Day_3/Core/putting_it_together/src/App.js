import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  const persons = [
    { firstName: "Jane", lastName: "Doe", age: 45, hairColor: "Black" },
    { firstName: "John", lastName: "Smith", age: 88, hairColor: "Brown" },
    { firstName: "Millard", lastName: "Fillmore", age: 50, hairColor: "Brown" },
    { firstName: "Maria", lastName: "Smith", age: 62, hairColor: "Brown" },
  ];
  return (
    <div className="App">
      <PersonCard person={persons[0]} />
      <PersonCard person={persons[1]} />
      <PersonCard person={persons[2]} />
      <PersonCard person={persons[3]} />
    </div>
  );
}

export default App;
