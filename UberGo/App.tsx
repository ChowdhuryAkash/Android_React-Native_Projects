import React ,{useState} from 'react';
import {View,Text} from 'react-native';
import Getstarted from './components/Getstarted'
import Login from './components/Login'

export default function App() {
  const[page,setPage]=useState("Getstarted");

  const switchToLogin=()=>{
    setPage("Login");

  }

  if(page=="Getstarted"){
    return(
      <Getstarted switchToLogin={switchToLogin}/>
    )
  }
  else if(page=="Login"){
    return(
      <Login />
    )
  }




  return (
    <View>
     

    </View>
      

    
    

  );
}
