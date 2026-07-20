import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import Myclass from "./components/class";
import Testmyredux from "./components/reduxtest";
// import MyContext from "./components/context/userContext";
import Test1 from "./components/test/test1";
import TestMyClass from "./components/test/classTest";
import ParentContext from "./components/context/parentContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Test from "./components/test";
import Routing1 from "./components/routing/route1";

function App() {
  const Routing1 = lazy(() => import("F:/Srikanth/ReactJS/first/my-app/src/components/routing/route1.jsx"));
  const Routing2 = lazy(() => import("F:/Srikanth/ReactJS/first/my-app/src/components/routing/routing2.jsx"));

  return (
    <BrowserRouter>
      <Suspense fallback={<h2>........Loading</h2>}>
        <Routes>
          {/* <Route> */}
          {/* <div className="App">
              <header className="App-header"> */}
          {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
          {/* <h3>Learn React </h3> */}
          {/* <Home /> */}
          {/* <Myclass /> */}
          {/* <Testmyredux></Testmyredux> */}
          {/* <MyContext></MyContext> */}
          {/* <Test1></Test1> */}
          {/* <TestMyClass></TestMyClass> */}
          {/* <ParentContext></ParentContext> */}
          {/* </header>
            </div> */}
          {/* </Route> */}
          <Route path="/" element={<Home></Home>}></Route>
        <Route path = "/test" element = {<Test></Test>} ></Route>

          <Route path="/routing1" element={<Routing1></Routing1>}></Route>
          <Route path="/routing2" element={<Routing2></Routing2>}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
