import React,{useState} from 'react';
import './App.css';
import  {Login } from './Component/Login';
import { Register } from './Component/Register';

function App() {
  const [currentForm,setCurrenForm]=useState('login');

const toggleForm=(formName)=>{
  setCurrenForm(formName);
}

  return (
    <div className="App">
      {
        currentForm==Login?<Login onFormSwitch={toggleForm}/>:<Register onFormSwitch={toggleForm}/>
       
      }
      
      
    </div>
  );
}

export default App;
