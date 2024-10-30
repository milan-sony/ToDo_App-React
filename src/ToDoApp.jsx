import React from 'react'
import './ToDoApp.css'

function ToDoApp() {
    return (
        <>
            <div className='container-fluid outer-div'>
                <div className='container'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-lg-6 mt-5'>
                            <div>
                                <h1 className='text-center mb-5 head-text'>Todo List</h1>
                                <h6 className='mb-3 day'>Wednesday</h6>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" class="form-control todo-input" placeholder="📝 Add your task" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn add-btn" type="button" id="button-addon2">ADD</button>
                            </div>

                            {/* list item */}
                            <div class="input-group mb-3">
                                <div class="input-group-text">
                                    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
                                </div>
                                <input type="text" className="form-control list-item" aria-label="Text input with checkbox" value={"hello"} readOnly/>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ToDoApp
