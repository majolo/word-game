import React from 'react';
import './App.css';
import {List} from "./List";
import {CreateGameForm} from "./CreateForm";

function App() {

  let path = window.location.pathname.slice(1)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          The Word Game
        </p>
        {path.length > 0 && (
            <List/>
        )}
        {path.length < 1 && (
            <CreateGameForm/>
        )}
      </header>
    </div>
  );
}

export default App;
