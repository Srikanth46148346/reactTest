import React from "react";
import Child from "./child";
import Test from "./test";
import { useNavigate } from "react-router-dom";
import Routing2 from "./routing/routing2";
import CreateApplication from "./forms/testForms";

function Home() {
  const some = ["sdf", "df", "23sd", "v323", "sdf2", "98sdf", "sdfb"];

  const navigate = useNavigate();

  function handleNavigation() {
    navigate("/test");
  }
  return (
    <div>
      <h3>Hello I'm from Home component</h3>
      <ul>
        {some.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul>
      <Child some={some} />
      {/* <Test /> */}
      <button onClick={handleNavigation}>Navigate</button>
      <Routing2></Routing2>
      <CreateApplication></CreateApplication>
    </div>
  );
}

export default Home;