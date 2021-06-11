import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';
import { checkUserSession } from './redux/user/user.actions';
import { useEffect } from 'react';


const App = ({checkUserSession, currentUser}) => {

  useEffect(() => {
    checkUserSession();
  },[checkUserSession])
  

    return (
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={ () => currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />) }/>
          </Switch>
      </div>
    );
}

// const mapStateToProps = ({user}) => ({
//   currentUser : user.currentUser
// })


const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession : () => dispatch(checkUserSession()) 
 })

// // setCurrentUser is a function that dispatch an action to update redux store (state)
// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// })

export default connect(mapStateToProps, mapDispatchToProps)(App);


// export default connect(mapStateToProps, mapDispatchToProps)(App);
// if we needed to handle state, instead of null as first argument of connect, we should pass a mapStateToProps function 
// to get the object that we want from redux store
