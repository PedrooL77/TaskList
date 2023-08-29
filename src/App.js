import { useEffect, useState } from "react";

function App() {
  
  const [ListaTarefas, setListaTarefas] = useState( [] );
  const [tarefa, setTarefa] = useState( { id: '' , texto: "" } );

  function addTarefa()
  {
    if( tarefa.texto !== ""){
      setListaTarefas([...ListaTarefas, tarefa])
    }
  }

  function excluirTarefa( id )
  {
    const novaLista = ListaTarefas.filter( (tarefa) => tarefa.id !== id);
    setListaTarefas( novaLista );
  }

  useEffect( () => {
    setTarefa( {id: "" , texto:""})
  }, [ListaTarefas])

  return (
    <>
      <header>
        <h1>To-Do List</h1>
      </header>
      <div>
        <input type="text" name="tarefa" placeholder="Digite sua tarefa" value={tarefa.texto} onChange={(e) => setTarefa( { id: Math.random(), texto:e.target.value } ) }/>
        <button onClick={addTarefa}>Adicionar</button>
      </div>
      <div>
        <ul>
          {ListaTarefas.map( (item, index) => (
            <li key={index}>{item.texto} <button onClick={ () => excluirTarefa(item.id) }>Excluir</button></li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
