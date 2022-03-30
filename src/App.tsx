import React, { useState } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Header from "./core/Header";
import LoginComponent from "./features/login/Login";
import Login from "./features/login/Login";
import UsersComponent from "./features/users/Users";

const App = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  return (
    <>
      <Header logout={() => setIsLogged(false)}></Header>
      <div className="container">
        <h1>{JSON.stringify(isLogged)}</h1>

        <Router>
          <Route path="/" exact>
            <LoginComponent loginAction={() => setIsLogged(true)} />
          </Route>
          {isLogged ? (
            <Route path="/users" exact component={UsersComponent} />
          ) : (
            <Redirect from="*" to={"/"}></Redirect>
          )}
        </Router>
      </div>
    </>
  );
};

export default App;
