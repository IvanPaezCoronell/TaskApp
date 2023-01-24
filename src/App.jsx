import './App.css'
import { toDo } from './toDo'
import React, { Component, Fragment } from 'react';
import ToDoForm from './components/ToDoForm';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      toDo: toDo
    };
    this.handleAddToDo = this.handleAddToDo.bind(this)
  }

  handleAddToDo = (toDo) => {
    this.setState({
      toDo: [...this.state.toDo, toDo]
    })
  }

  handleDeleteToDo = (index) => {
    this.setState({
      toDo: this.state.toDo.filter((e, i) => {
        return i !== index
      }
      )
    })
  }

  render() {

    const toDos = this.state.toDo.map((toDo, i) => {
      return (

        <>

          <div id='container-div' className='co-md-4' key={i}>
            <div id="div-row" className='card mt-4'>
              <div id='header-div' className='card-header'>
                <h3>{toDo.title}</h3>
                <span className="badge text-bg-danger">{toDo.priority}</span>
              </div>
              <div className='card-body'>
                <p>{toDo.description}</p>
                <p><mark>{toDo.responsible}</mark></p>
              </div>
              <div className='card-footer'>
                <button className='btn btn-danger' onClick={this.handleDeleteToDo.bind(this, i)}>Delete</button>

              </div>
            </div>
          </div>


        </>

      )
    })



    return (
      <>
        <div id='div-nav' className='navbar navbar-dark bg-dark'>
          <nav id='nav-id'>
            <h6 id='h6-task'>Task App</h6>
            <div id='div-counter'>
              <span id='counter-task' className="badge text-bg-info">{this.state.toDo.length}</span>
            </div>
          </nav>
        </div>

        <div className='container'>
          <div className='row mt-4'>
            <div className='col-md-3'>
              <ToDoForm onAddToDo={this.handleAddToDo} />
            </div>
            <div className='col-md-9'>
              <div className='row'>
                {toDos}
              </div>
            </div>
          </div>
        </div>
      </>

    )
  }
}


export default App
