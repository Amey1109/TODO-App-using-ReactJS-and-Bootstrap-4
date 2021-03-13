import React from 'react'
import TodoApp from './components/TodoApp'

export default class App extends React.Component{
  constructor(props) {
    super(props)

  }
  render(){
    return(
      <div className= "container">
        <TodoApp />
      </div>
    )
  }
  
}