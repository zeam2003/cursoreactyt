import logo from './logo.svg';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import './App.css';
import RenderizadoCondicional from './components/RederizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos';
import ComunicacionComponentes from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHooks';
import AjaxHooks from './components/AjaxHooks';
import HooksPersonalizados from './components/HooksPersonalizados';
import Referencias from './components/Referencias';
import Formularios from './components/Formularios';
import Estilos from './components/Estilos';
import ComponentesEstilizados from './components/ComponentesEstilizados';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
      <section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </section>
      <section>
        <Componente msg="Hola soy un componente!2" />
        <hr />
        <Propiedades 
          cadena="Esto es una cadena de texto" 
          numero = {19} 
          booleano={true} 
          arreglo={[1,2,3]}
          objeto={{nombre: 'Jhon', correo:'jcat@gmail.com'}}
          funcion={num => num*num}
          elementoReact={<i>Esto es un elemento react</i>}
          componenteReact={<Componente msg="Soy un componente"/>}/>
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <EventosES6 />
          <hr />
          <EventosES7 />
          <hr />
          <MasSobreEventos />
          <hr />
          <ComunicacionComponentes />
          <hr />
          <CicloVida />
          <hr />
          <AjaxApis />
          <hr />
          <ContadorHooks titulo="Seguidores" />
          <hr />
          <ScrollHooks />
          <hr />
          <RelojHooks />
          <hr />
          <AjaxHooks />
          <hr />
          <HooksPersonalizados />
          <hr />
          <Referencias />
          <hr />
          <Formularios />
          <hr />
          <Estilos />
          <hr />
          <ComponentesEstilizados />
      </section>
       
      </header>
      
    </div>
  );
}

export default App;
