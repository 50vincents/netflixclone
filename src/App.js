import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
          uid: userAuth.uid,
          email: userAuth.email // pass in payload obj
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path='/profile'>
              <ProfileScreen />
            </Route>
            <Route path='/'>
              <HomeScreen />
            </Route>
          </Switch>
        )}
       
      </Router>
    </div>
  );
}

export default App;

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTQ0MzU3Y2I3OTlmNTg4NmNjMzViYzJjMDVhYzY5YSIsInN1YiI6IjVmOGY0Y2E1YzA0OGE5MDAzOTQwNThhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.711ByiNuTsA5NrEcsU4jzkYlhUfzhkMdinasUdwD4w8
// https://api.themoviedb.org/3/movie/550?api_key=ce44357cb799f5886cc35bc2c05ac69a