import React from "react";
import PlayersList from "./PlayersList";

function App() {
  return (
    <div className="App">
      <br />
      <br />
      <br />
      <h1 className="title">FIFA player cards</h1>
      <hr
        style={{
          margin: "20px 0",
          border: "none",
          borderBottom: "1px solid #ccc",
        }}
      />
      <br />
      <br />
      <br />
      <PlayersList />
    </div>
  );
}

export default App;
