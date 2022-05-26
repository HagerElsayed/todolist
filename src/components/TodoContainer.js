// import React from "react";
// import Header from "./Header";
// import TodosList from "./TodosList";
// import { v4 as uuidv4 } from "uuid";
// import InputTodo from "../functionBased/components/InputTodo";

// class TodoContainer extends React.Component {
//   state = {
//     todos: [],
//   };
//   componentDidMount() {
//     const temp = localStorage.getItem("todos");
//     const loadedTodos = JSON.parse(temp);
//     if (loadedTodos) {
//       this.setState({
//         todos: loadedTodos,
//       });
//     }
//     // fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
//     //   .then((response) => response.json())
//     //   .then((data) => this.setState({ todos: data }));
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.todos !== this.state.todos) {
//       const temp = JSON.stringify(this.state.todos);
//       localStorage.setItem("todos", temp);
//     }
//   }
//   handleChange = (id) => {
//     this.setState((prevState) => {
//       return {
//         todos: prevState.todos.map((todo) => {
//           if (todo.id === id) {
//             // todo.completed = !todo.completed;
//             return {
//               ...todo,
//               completed: !todo.completed,
//             };
//           }
//           return todo;
//         }),
//       };
//     });
//   };

//   deleteTodo = (id) => {
//     this.setState({
//       todos: [
//         ...this.state.todos.filter((todo) => {
//           return todo.id !== id;
//         }),
//       ],
//     });
//   };

//   addTodoItem = (title) => {
//     const newTodo = {
//       id: uuidv4(),
//       title: "React.js",
//       completed: false,
//     };
//     this.setState({
//       todos: [...this.state.todos, newTodo],
//     });
//   };
//   setUpdate = (updatedTitle, id) => {
//     this.setState({
//       todos: this.state.todos.map((todo) => {
//         if (todo.id === id) {
//           todo.title = updatedTitle;
//         }
//         return todo;
//       }),
//     });
//   };
//   render() {
//     return (
//       <div className="container">
//         <div className="inner">
//           <Header />
//           <InputTodo addTodoProps={this.addTodoItem} />
//           <TodosList
//             todos={this.state.todos}
//             handleChangeProps={this.handleChange}
//             deleteTodoProps={this.deleteTodo}
//             setUpdate={this.setUpdate}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default TodoContainer;
