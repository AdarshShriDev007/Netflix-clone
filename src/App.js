import React, { useEffect } from 'react';
import Login from './cmp/Login/Login';
import {useSelector,useDispatch} from "react-redux";
import {selectUser,login,logout} from "./features/userSlice";
import Home from './cmp/Home/Home';
import {auth,onAuthStateChanged} from "./firebase";

function App() {

  const isUser = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user)
      {
        dispatch(login({
          uid : user.uid,
          email : user.email
        }));
      }
      else{
        dispatch(logout(null));
      }
    });
  },[]);

  return (
    <div className="App">
      {
        !isUser ? (<Login />) : (<Home />)
      }
    </div>
  );
}

export default App;
