import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { Redirect, Route, Switch } from "react-router-dom";
import UserService from "./components/API/UserService";
import { useFetching } from "./hooks/useFetching";

function App() {
  const [users, setUsers] = useState([]);
  const [fetchUsers, isLoading, userError] = useFetching(async () => {
    const users = await UserService.getAll();
    setUsers(users);
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <Switch>
        <Route path="/" exact>
          <Home userError={userError} isLoading={isLoading} users={users} />
        </Route>
        <Route path="/profile/:id" exact>
          <Profile users={users} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
