import React, { useState } from 'react'
import { todoType } from './appTypes'

function TodoItem({ task, deleteTask, todoList, setTodoList }) {
    const [updatedTask, setUpdatedTask] = useState(task.task)
    const [updatedNumber, setUpdatedNumber] = useState(task.workDay)

    const toggleEdit = (taskId: number): void => {
        setTodoList(todoList.map((todo: todoType) => todo.id === taskId ?
            { ...todo, edited: !todo.edited }
            : todo))
    }

    const updateTask = (taskId: number): void => {
        setTodoList(todoList.map((todo: todoType) => todo.id === taskId ?
            { ...todo, task: updatedTask, workDay: updatedNumber, edited: false }
            : todo))
    }

    return (
        <div>
            {task.edited ? (
                <div>
                    <input type="text" value={updatedTask} onChange={(e) => setUpdatedTask(e.target.value)} />
                    <input type="number" value={updatedNumber} onChange={(e) => setUpdatedNumber(e.target.value)} />
                    <button onClick={() => updateTask(task.id)}>Update</button>
                </div>
            ) : (
                <div>
                    <p>{task.task}</p>
                    <p>{task.workDay}</p>
                    <button onClick={() => toggleEdit(task.id)}>Edit</button>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default TodoItem