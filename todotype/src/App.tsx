import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';
import { todoType } from "./appTypes"
import TodoItem from './TodoItem.tsx';

const App: FC = () => {
  const [task, setTask] = useState<string>("")
  const [workDay, setWorkDay] = useState<number>(0)
  const [todoList, setTodoList] = useState<todoType[]>([])

  console.log(todoList);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value)
    } else {
      setWorkDay(Number(e.target.value))
    }
  }

  const addNewTask = (): void => {
    const newTask = { task: task, workDay: workDay, id: Date.now(), edited: false }
    setTodoList([...todoList, newTask])
    setTask("")
    setWorkDay(0)
  }

  const deleteTask = (idToDelete: number): void => {
    setTodoList(todoList.filter((task) => task.id !== idToDelete))
  }

  return (
    <div className="App">
      <div>
        <input type="text" name="task" value={task} onChange={handleChange} placeholder='Enter your task' />
        <input type="number" name="workDay" value={workDay} onChange={handleChange} placeholder='In how many days?' />
        <button onClick={addNewTask}>Add new task</button>
      </div>

      <div>
        {todoList.map((task: todoType) => (
          <TodoItem task={task} key={task.id} todoList={todoList} setTodoList={setTodoList} deleteTask={() => deleteTask(task.id)} />
        ))}
      </div>
    </div>
  );
}

export default App;