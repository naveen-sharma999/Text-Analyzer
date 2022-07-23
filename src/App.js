import "./App.css";
import React ,{useState} from "react";
import Form from "./custom-components/Form";
import Navbar from "./custom-components/Navbar";
import Alert from "./custom-components/Alert";
//import About from "./custom-components/About";
//import NotFound from "./custom-components/NotFound";
//import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light'); // default light
  const [btnext, setbtnext] = useState('DarkMode OFF');
  const [alert, setalert] = useState(null)
  
  const toggleMode = ()=>{ //on toggle or movement of switch 
    if(mode === 'light')  //main functionality
      {setmode('dark')   //means mode = "dark" 
       setbtnext('DarkMode ON')
       showAlert('Dark Mode is Enabeld', 'success')
       document.body.style.backgroundColor = '#042743'; //all over the body background
       document.body.style.color = 'white';}           // & text color
    else
      {setmode('light') //if turn off again mode = "light"
       setbtnext('DarkMode OFF')
       showAlert('Dark Mode is Disabled - Enable Darkmode, Helps you to protect your eyes', 'warning')
       document.body.style.backgroundColor = 'white'; // vise versa
       document.body.style.color = 'black';}
  }

  const showAlert = (message, type)=>{
    setalert({
      msg : message,
      type : type
   })
   setTimeout(()=>{
    setalert(null)
   },5000);
  }

  return (
    <>
    {/*<Router>*/}
      <Navbar contact="Contact us" title="Text Analyzer" mode={mode} toggleMode={toggleMode} btnText={btnext}/>
      <Alert alert={alert}/>
      {/*<Routes>*/}
      <Form heading="Enter The Text To Analyse" mode={mode} showAlert={showAlert}/>
      {/*<About mode={mode}/>*/}
      {/*<NotFound/>*/}
        {/*</Routes>*/}
    {/*</Router>*/}
    </>  
  );
}

export default App;
