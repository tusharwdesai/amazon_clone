import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe('pk_test_51HQGCoGT5QjxW6hMHG9B0ZpHydcQ1szbmfAEiwjxxE0gwPIWBy6XBwDlIlPXRuKrn0rJ83U1mRTae1X29KfO9wev00REOJNh7p');

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])

  return (
    //BEM naming convention
    <Router>
      <div className="app">

        <Switch>
          <Route path="/login">

            <Login />

          </Route>
          <Route path="/orders">
            <Header />
            <Orders />

          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />

          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>



          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
