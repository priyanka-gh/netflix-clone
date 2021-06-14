import './App.css';
import Row from '../src/components/Row/Row';
import requests from '../src/util/requests';
import {useEffect} from 'react';
import HomeScreen from '../src/components/HomeScreen/HomeScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from '../src/components/Login/Login'
import { auth } from './util/firebase';
import { useDispatch ,useSelector} from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Profile from './components/Profile/Profile'

function App() {
  
  const user = useSelector(selectUser);
  const dispatch=useDispatch();
  
  useEffect(()=>{

    const unsubscribe=auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        console.log(userAuth);

        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
        })
        );
      }else{
        dispatch(logout());
      }
    })
    return unsubscribe;
  },[])
  return (
    <div className="App">
        <Router>
          {!user?(
            <Login/>
          ):(
          <Switch>
            <Route exact path="/profile">
              <Profile/>
            </Route>
            <Route exact path="/">
              <HomeScreen/>
            </Route>
          </Switch>
          )}
        </Router>
    </div>
  );
}

export default App;
