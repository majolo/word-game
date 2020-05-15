import React from 'react';
import './App.css';
import {List} from "./List";
import {CreateGameForm} from "./CreateForm";
import {RandomGame} from "./Random";

function App() {
  let path = window.location.pathname.slice(11)


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Guess The Word Game
        </p>
        {path.length > 0 && (
            <List/>
        )}
        {path.length < 1 && (
            <div>
                <CreateGameForm/>
                <RandomGame/>
            </div>
        )}
      </header>
    </div>
  );
}

export default App;
