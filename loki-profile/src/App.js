import React, { Fragment, useEffect, useState } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { CSSTransition,TransitionGroup } from 'react-transition-group';
import Home from './screens/home';
import {routes} from './routes/index'
import {routesAuth} from './routes/auth'
import 'bootstrap/dist/css/bootstrap.css';
import { getUser } from './redux/auth/action';
import { useDispatch, useSelector } from 'react-redux';


const App = () => {
  const [currentUser, setCurrentUser] = useState(null || JSON.parse(localStorage.getItem("user")));

  // console.log(currentUser.id)

  return(
    <Fragment >
      <BrowserRouter basename={`/`}>
          <Home>
          <Route exact path={'/'} render={() => {
            return (<Redirect to='/homepage'/>)
          }} /> 
          <TransitionGroup>
          <CSSTransition 
            timeout={0}
            unmountOnExit>
            <Switch>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={`${path}`}>
                {() => (
                  <div ><Component currentUser={currentUser}/></div>
                )}
              </Route>
            ))}

            {
            currentUser && (
              routesAuth.map(({ path, Component }) => (
                <Route key={path}  exact  path={`${path}`}>
                  {() => (
                    <div><Component currentUser={currentUser}/></div>
                  )}
                </Route>
              ))
            )
            }
            </Switch>
            </CSSTransition> 
          </TransitionGroup> 
          </Home>
    </BrowserRouter>
    </Fragment>
  )
}

export default App