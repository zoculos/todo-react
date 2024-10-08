import {useState} from 'react'

const TodoForm = ({addTodo}) => {
  const [value,setValue] = useState("");
  const [category,setCategory] = useState("");

  const handleSubmit=(e) => {
e.preventDefault();
if (!value || !category) 
  return; 
// Add no TODO 
addTodo(value,category);
    setValue("");
    setCategory("");
    // Limpar os Campos selecionados anteriormente

};
  return (
    <div className='todo-form'>
        <h2> Criar Tarefa:</h2>
        <form onSubmit={handleSubmit}>
<input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder='Digite o titulo' />

<select value={category} onChange={(e) => setCategory(e.target.value)}>
<option value=""> Selecione a categoria</option>
<option value="Trabalho"> Trabalho</option>
<option value="Pessoal"> Pessoal </option>
<option value="Estudos"> Estudos </option>
</select>
<button type='submit'> Criar Tarefa</button>
        </form>
        </div>
  )
}

export default TodoForm