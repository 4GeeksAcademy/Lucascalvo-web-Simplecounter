import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';




let root = ReactDOM.createRoot(document.getElementById('root'));
let contador = 0;

setInterval(() => {
  let two = Math.floor((contador / 10) % 10);
  let one = Math.floor((contador / 1) % 10);
  contador++;

  root.render(
    <React.StrictMode>
      <Home digitOne={one} digitTwo={two} />
    </React.StrictMode>
  );
}, 1000);
