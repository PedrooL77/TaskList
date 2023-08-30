import { useEffect, useState } from "react";

function App() {
  
  const [ListaTarefas, setListaTarefas] = useState( [] );
  const [tarefa, setTarefa] = useState( { id: '' , texto: "" , status: ""} );

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

  function statusTarefa( id, status)
  {
    const index = ListaTarefas.findIndex( (tarefa) => tarefa.id === id );
    ListaTarefas[index].status = !status;
    setListaTarefas( [...ListaTarefas ]);
  }

  useEffect( () => {
    setTarefa( {id: "" , texto:"" , status: ""})
  }, [ListaTarefas])

  return (
    <>
      <header>
        <h1>To-Do List</h1>
      </header>
      <div>
        <input type="text" name="tarefa" placeholder="Digite sua tarefa" value={tarefa.texto} onChange={(e) => setTarefa( { id: Math.random(), texto:e.target.value , status: false} ) }/>
        <button onClick={addTarefa}>Adicionar</button>
      </div>
      <div>
        <ul>
            {ListaTarefas.map( (item, index) => (
            <li key={index}>{item.texto} <button onClick={ () => statusTarefa(item.id, item.status) }>{item.status ? 'Concluida' : 'Não Concluido'}</button> <button onClick={ () => excluirTarefa(item.id) }>Excluir</button></li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
