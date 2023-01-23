import React, { Component } from 'react'
import ToDoForm from './ToDoForm.css'

export class toDoForm extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: ''
    };

    this.onInputChange = this.onInputChange.bind(this)
  }
    


  onInputChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddToDo(this.state);
  }
  

  render() {
    return (
      <>
        <div id='div-nav-form' className='navbar navbar-dark bg-dark'>
          <form className='card-body' onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <span>Add Task</span>
              <input
                type='text'
                name='title'
                onChange={this.onInputChange}
                className='form-control'
                placeholder='Title'
              />
              </div>
              <div className='form-group'>
              <input
                type='text'
                name='responsible'
                onChange={this.onInputChange}
                className='form-control'
                placeholder='Responsible'
              />
              </div>
              <div className='form-group'>
              <input
                type='text'
                name='description'
                onChange={this.onInputChange}
                className='form-control'
                placeholder='Description'
              />
              </div>
              <div className='form-group'>
              <select
                name='priority'
                className='form-control'
                onChange={this.onInputChange}
              
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
              </div>
              <button type='submit' className='btn btn-primary'>
                Agregar
              </button>



          </form>
        </div>

      </>

      
    )
  }
}

export default toDoForm