import React, {useEffect, useState} from "react"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import {Redirect, Route, Switch} from "react-router-dom"
import UserService from "./components/API/UserService"
import {useFetching} from "./hooks/useFetching"

function App() {

    const [cartItem, setCartItem] = useState([])

    const [fetchUsers, isLoading, userError] = useFetching(async () => {
        const users = await UserService.getAll()
        setCartItem(users)
    })

    useEffect(() => {
        fetchUsers()
    }, [])

    // useEffect (() => {
    //     async function fetchData() {
    //         try {
    //             const cartResponse = await axios.get('https://stoplight.io/mocks/kode-education/trainee-test/25143926/users')
    //
    //             setCartItem(cartResponse.data.items)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fetchData()
    // }, [])

    // async function fetchUsers() {
    //     const users = await UserService.getAll()
    //     setCartItem(users)
    // }

    return (
      <div className="container">
          <Switch>
              <Route path='/' exact>
                  <Home userError={userError} isLoading={isLoading} cartItem={cartItem} setCartItem={setCartItem}/>
              </Route>
              <Route path='/profile/:id' exact >
                  <Profile cartItem={cartItem} setCartItem={setCartItem} />
              </Route>
              <Redirect to='/' />
          </Switch>
      </div>
    )
}

export default App