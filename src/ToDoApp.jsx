import React, { useState } from 'react'
import './ToDoApp.css'

function ToDoApp() {

    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])

    // function to add todo to the todo list
    const addTodo = () => {
        setTodos([...todos, { // array of objects
            'id': Date.now(),  // used to uniquely identify each todo items
            'todoItem': todo,
            'status': false
        }])

        setTodo('')
    }

    return (
        <>
            <div className='container-fluid outer-div'>
                <div className='container'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-lg-6 mt-5'>
                            <div>
                                <h1 className='text-center mb-5 head-text'><i className="bi bi-check2-circle"></i>&nbsp;Todo List</h1>
                                <h6 className='mb-3 day'>Wednesday</h6>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control todo-input" placeholder="📝 Add your task" value={todo} onChange={(e) => setTodo(e.target.value)} />
                                <button className="btn add-btn" type="button" onClick={addTodo}><i className="bi bi-plus-circle-fill"></i>&nbsp;ADD</button>
                            </div>

                            {
                                console.log("todo: ", todo)
                            }
                            {
                                console.log("todo list", todos)
                            }

                            {
                                todos.map((obj, index) => {
                                    return (
                                        <div className='todos' key={index}>
                                            <span onClick={() => {
                                                console.log("Default Obj1: ", obj)
                                                // filter will gives you a new filtered array
                                                setTodos(todos.filter(obj2 => {
                                                    console.log("Obj1 before if: ",obj)
                                                    console.log("Obj2 before if: ", obj2)
                                                    if (obj2.id === obj.id) {
                                                        obj2.status = !obj2.status
                                                        console.log("Obj1 in if: ", obj)
                                                        console.log("Obj2 in if: ", obj2)
                                                    } return obj2
                                                }))
                                            }} className={obj.status ? 'todo-check-icon-change' : 'todo-check-icon'} ><i className="bi bi-check-circle-fill"></i></span>
                                            <span className={obj.status ? 'todo-strike' : 'todo'}>{obj.todoItem}</span>
                                            <span className='todo-trash-icon'><i className="bi bi-trash3-fill"></i></span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDoApp
