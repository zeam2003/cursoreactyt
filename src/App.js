import logo from './logo.svg';
import './App.css';

function App() {
  let nombre = 'Pepe';
  let auth = true;
  let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{nombre}</h1>
        <p>{auth ? "el usuario esta" : "El usuario no esta logueado"}</p>
        <p>{2 + 1}</p>
        <ul>
        {estaciones.map( (el, index) => <li key={index}>{el}</li>)}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
