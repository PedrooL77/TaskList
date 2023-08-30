import BlocosTarefas from './components/BlocoTarefas'
import BlocoTarefasSem from './components/BlocoTarefasSem';


function App() {
  return (
    <>
      <BlocosTarefas/>
      <BlocoTarefasSem text="Trabalho"/>
      <BlocoTarefasSem text="Afazeres Domésticos"/>
      <BlocoTarefasSem text="Afazeres Pessoais"/>
    </>
  );
}

export default App;
