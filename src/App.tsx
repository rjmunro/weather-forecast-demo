import { useState } from "react";

import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div>
        <label>
          Location:
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter a location..."
          />
        </label>
        <button>
          Search
        </button>
      </div>
    </>
  );
}

export default App;
