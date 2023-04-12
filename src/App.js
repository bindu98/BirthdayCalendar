import React, { useState } from "react";
import data from "./data";
import List from "./list";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section>
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button
          onClick={() => {
            setPeople([]);
          }}
        >
          ClearAll
        </button>
      </section>
    </main>
  );
}

export default App;
