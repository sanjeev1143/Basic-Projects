import './App.css';
import NavBar from './NavBar';
import React, { useState, createContext } from 'react'

import Main from './Main'


const Para = React.createContext();

function App() {
  const [paragraph, setParagraph] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, illum esse iste aperiam quas reiciendis obcaecati, culpa eius veniam explicabo ducimus porro fuga placeat unde tempore? Nostrum, necessitatibus quaerat excepturi incidunt accusamus consequuntur dolore nemo iusto ullam dolores fuga odit fugit harum ad corporis cumque eligendi a repellat laboriosam ea sit qui. Sit laudantium ratione, ducimus maiores velit sunt laborum ex, natus qui rem minus nam. Est, magnam dolores atque maiores impedit non recusandae sint odit corrupti aut blanditiis eveniet repudiandae consequuntur voluptatem officia asperiores eos dignissimos saepe soluta animi aperiam, obcaecati facere ab. Voluptate a harum quia dolorem. Quidem.");
  return (
    <div className="App">
      <Para.Provider value={paragraph}>
        <NavBar />

        {/* <Main /> */}
      </Para.Provider>
    </div>
  );
}

export default App;
export { Para };
