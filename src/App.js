import React from "react"
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import {Route} from "react-router-dom";

function App() {
    return (
      <div className="container">
          <Route path='/' component={Home} exact />
          <Route path='/profile' component={Profile} exact />
      </div>
    )
}

export default App
