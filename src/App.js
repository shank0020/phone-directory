import React, { Fragment } from 'react';
import Header from "./Header"

function App() {
  let x = 10, y = 20;
  return (
    
    <div>
        <Header/>
        <button>Add</button>
        <div>
          <span>Name</span><br />
          <span>Phone</span>
        </div>
        <input type="text" placeholder="value" defaultValue={x+y}></input>
      </div>
  );
}

export default App;
