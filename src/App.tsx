import { useState } from "react";

import "./App.css";
import { LocationForm } from "./components/LocationForm";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <LocationForm value={searchTerm} setValue={setSearchTerm} />
    </>
  );
}

export default App;
