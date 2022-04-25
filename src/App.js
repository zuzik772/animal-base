import "./App.css";
import data from "./animals.json";
import { useState } from "react";

function clean(arr) {
  return arr.map((animal) => {
    "Mandu the amazing cat";
    const [name, , desc, type] = animal.fullname.split(" ");
    return {
      name,
      desc,
      type,
      age: animal.age,
    };
  });
}

function App() {
  const animals = clean(data);
  console.log(animals);
  const [filter, setFilter] = useState("cat");
  const [sort, setSort] = useState("name");

  const filtered = filter === "" ? animals : animals.filter((animal) => animal.type === filter);
  return (
    <div className="App">
      <button onClick={() => setFilter("cat")}>Cats</button>
      <button onClick={() => setFilter("dog")}>Dogs</button>
      <button onClick={() => setFilter("")}>All</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Desc</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((animal) => {
            return (
              <tr>
                <td>{animal.name}</td>
                <td>{animal.type}</td>
                <td>{animal.desc}</td>
                <td>{animal.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
