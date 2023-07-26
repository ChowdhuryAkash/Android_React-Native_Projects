import React ,{useState} from 'react';
import {View,Text} from 'react-native';
import Getstarted from './components/Getstarted'

export default function App() {
  const[page,setPage]=useState("Getstarted");




  return (
    <View>
      <Getstarted />

    </View>
      

    
    

  );
}
