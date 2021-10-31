import React, {useEffect, useState} from "react"
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import {Route} from "react-router-dom";
import axios from "axios";

function App() {

    const [cartItem, setCartItem] = useState([])

    useEffect (() => {
        async function fetchData() {
            try {
                const cartResponse = await axios.get('https://stoplight.io/mocks/kode-education/trainee-test/25143926/users')

                setCartItem(cartResponse.data.items)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
      <div className="container">
          <Route path='/' exact>
              <Home cartItem={cartItem} setCartItem={setCartItem}/>
          </Route>
          <Route path='/profile' exact >
              <Profile cartItem={cartItem} setCartItem={setCartItem} />
          </Route>
      </div>
    )
}

export default App
