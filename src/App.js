import { useState } from 'react';
import './App.css';

let nextId = 4;

const todos = [{
  id: 0,
  name: 'do this'
}, {
  id: 1,
  name: 'do that'
}, {
  id: 2,
  name: 'do the other'
}];

export default function List() {

  const [name, setName] = useState('');
  const [todoitems, setTodoitems] = useState(todos);

  function handleClick() {
    const insertAt = 1; // Could be any index
    const nextTodo = [
      // Items before the insertion point:
      ...todoitems.slice(0, insertAt),
      // New item:
      { id: nextId++, name: name },
      // Items after the insertion point:
      ...todoitems.slice(insertAt)
    ];
    setTodoitems(nextTodo);
    setName('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
      </header>
      <main>
        <input 
          type="text" 
          id="addtask" 
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button onClick={handleClick}>Add</button>
        <ul>
          {todoitems.map((todoitem) => (
            <li key={todoitem.id}>{todoitem.name}
              <button onClick={() => {
              setTodoitems(
                todoitems.filter(a =>
                  a.id !== todoitem.id
                )
              );
            }}>
                Delete
              </button>
            </li>
          ))} 
        </ul>
      </main>
    </div>
  );
}
