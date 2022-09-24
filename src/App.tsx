import React, { useState } from "react";
import "./App.css";
import Checkbox from "./components/CheckBox/CheckBox";

function App() {
  return (
    <div className="App">
      <Checkbox
      checked={true}
        onChange={(value) => {
        }}
      />
    </div>
  );
}

export default App;
