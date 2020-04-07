import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import logo from './logo.svg';
// import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import ListProps from './components/ListProps'
import StateLessComponent from './components/StateLessComponent'
import ConditionalComponent from './components/ConditionalComponent'
import AddForm from './components/AddForm'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'
import GetData from './components/GetData'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'


// class App extends Component {
//   state = {
//     // listData : [
//     //   {name: 'John', age: 25},
//     //   {name: 'Curter', age: 35},
//     //   {name: 'Mr. A', age: 15},
//     //   {name: 'MR. B', age: 35},
//     // ]

//     todos: [
//       {id: 1, content: 'Hello John'},
//       {id: 2, content: 'Hello Curter'}
//     ]
//   }

//   // FormData = (data) => {
//   //   console.log(data);
//   //   let listData = [...this.state.listData, data];
//   //   this.setState({
//   //     listData: listData
//   //   })
//   // }

//   deleteTodo = (id) => {
//     console.log(id);
//     const todos = this.state.todos.filter(todo => {
//       return todo.id !== id;
//     });
//     this.setState({
//       todos: todos
//     })
//   }

//   addTodo = (todo) => {
//     todo.id = Math.random();
//     let todos = [...this.state.todos, todo];
//     this.setState({
//       todos: todos
//     })
//   }

//   render() {
//     return (
//       <div className="App container">
//         {/* <Welcome /> */}
//         {/* <Hello name="Hore" age="20" /> */}
//         {/* <ListProps listData={this.state.listData} /> */}
//         {/* <StateLessComponent listData={this.state.listData} /> */}
//         {/* <ConditionalComponent listData={this.state.listData} /> */}
//         {/* <AddForm formValue={this.FormData} /> */}
//         <h1 className="center blue-text">Todo's</h1>
//         <TodoForm addTodo={this.addTodo} />
//         <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
//         <GetData />
//       </div>
//     );
//   }
// }


class App extends Component {
  render() {
    return(
      <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/post/:post_id' component={Post}></Route>
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}


export default App;
