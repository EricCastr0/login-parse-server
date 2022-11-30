import './App.css';
import Conexao from './conexao/conexaoParse';
import { PersonComponent } from './usuarios/usuarios';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Conexao/>
        <PersonComponent />
      </header>
    </div>
  );
}

export default App;