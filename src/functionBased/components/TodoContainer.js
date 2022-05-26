import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";
import InputTodo from "./InputTodo";
const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos());

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

  function getInitialTodos() {
    const temp = localStorage.getItem("todos");
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }
  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
    console.log("items", todos);
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };
  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodosList
          todos={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={deleteTodo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
