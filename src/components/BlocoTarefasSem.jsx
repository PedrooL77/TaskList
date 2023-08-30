import { useEffect, useState } from "react";
import "./App.css";

function BlocoTarefasSem(props) {
  
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
    <section className="tudo">
        <div className="BlocoTarefa">
            <div className="materia">
            <h2>{props.text}</h2>
            </div>
        <div className="digitar">
          <h3>Task</h3>
          <input type="text" name="tarefa" placeholder="Digite sua tarefa" value={tarefa.texto} onChange={(e) => setTarefa( { id: Math.random(), texto:e.target.value , status: false} ) } maxLength={23}/>
          <i class="fa-solid fa-plus" onClick={addTarefa}></i>
        </div>
        <div className="tarefas">
          <ul>
            {ListaTarefas.map( (item, index) => (
            <li className={item.status ? 'ItemAtivo' : 'ItemInativo'} key={index}>{item.texto} <button onClick={ () => statusTarefa(item.id, item.status) }>{item.status ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-ellipsis"></i>}</button><i class="fa-solid fa-trash" onClick={ () => excluirTarefa(item.id) }></i></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default BlocoTarefasSem;