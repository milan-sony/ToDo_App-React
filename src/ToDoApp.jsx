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
                                <h1 className='text-center mb-5 head-text'><i class="bi bi-check2-circle"></i>&nbsp;Todo List</h1>
                                <h6 className='mb-3 day'>Wednesday</h6>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control todo-input" placeholder="📝 Add your task" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn add-btn" type="button" id="button-addon2"><i class="bi bi-plus-circle-fill"></i>&nbsp;ADD</button>
                            </div>

                            {/* list item */}
                            <div className='todos'>
                                <span className='todo-check-icon'><i class="bi bi-check-circle-fill"></i></span>
                                <span className='todo'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, qui.</span>
                                <span className='todo-trash-icon'><i className="bi bi-trash3-fill"></i></span>
                            </div>
                            <div className='todos'>
                                <span className='todo-check-icon'><i class="bi bi-check-circle-fill"></i></span>
                                <span className='todo'>Lorem ipsum</span>
                                <span className='todo-trash-icon'><i className="bi bi-trash3-fill"></i></span>
                            </div>
                            <div className='todos'>
                                <span className='todo-check-icon'><i class="bi bi-check-circle-fill"></i></span>
                                <span className='todo'>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quos accusantium, repudiandae impedit sunt provident dignissimos veniam quidem cumque vero enim, voluptates quia molestias ut quas corrupti numquam quasi ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi similique vitae veniam cumque sit aliquam, beatae ducimus placeat corporis! Architecto labore eos, in nemo dolor unde veniam cupiditate inventore ad? lore</span>
                                <span className='todo-trash-icon'><i className="bi bi-trash3-fill"></i></span>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ToDoApp
