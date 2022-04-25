import data from "./animals.json";
import { useState } from "react";
import ToggleCell from "./ToggleCell";

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
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  const filtered = filter === "" ? animals : animals.filter((animal) => animal.type === filter);
  if (sortDirection === "asc") {
    filtered.sort((a, b) => {
      if (a[sort] > b[sort]) {
        return -1;
      }
      if (a[sort] < b[sort]) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });
  } else {
    if (sortDirection === "asc") {
      filtered.sort((a, b) => {
        if (a[sort] < b[sort]) {
          return -1;
        }
        if (a[sort] > b[sort]) {
          return 1;
        }
        // a must be equal to b
        return 0;
      });
    }
  }
  return (
    <div className="App">
      <button onClick={() => setFilter("cat")}>Cats</button>
      <button onClick={() => setFilter("dog")}>Dogs</button>
      <button onClick={() => setFilter("")}>All</button>
      <table>
        <thead>
          <tr>
            <ToggleCell
              setSort={setSort}
              setDirection={setSortDirection}
              title="Name"
              sortKey="name"
            />
            <ToggleCell
              setSort={setSort}
              setDirection={setSortDirection}
              title="Description"
              sortKey="desc"
            />
            <ToggleCell
              setSort={setSort}
              setDirection={setSortDirection}
              title="Type"
              sortKey="type"
            />
            <ToggleCell
              setSort={setSort}
              setDirection={setSortDirection}
              title="Age"
              sortKey="age"
            />
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
