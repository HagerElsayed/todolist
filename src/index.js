import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import TodoContainer from "./functionBased/components/TodoContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // use Router as alias

//stylesheet
import "./App.css";
import About from "functionBased/components/pages/About";
import NotMatch from "functionBased/components/pages/NotMatch";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotMatch />} />
      </Routes>
      {/* <TodoContainer /> */}
    </Router>

    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from "react"
// import ReactDOM from "react-dom"
// import  TodoContainer from "./components/TodoContainer"
// // const element = <h1>Hello from Create React App</h1>

// ReactDOM.render(
//   <React.StrictMode>
//     <TodoContainer />
//   </React.StrictMode>,
//   document.getElementById("root")
// )
