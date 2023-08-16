// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TForm from './Components/TForm';
import Alert from './Components/Alert';
// import About from './Components/About';
// import { BrowserRouter as King, Route , Routes } from 'react-router-dom';
// import Error from './Components/Error';

function App() {

  //variables to switch the mode 
  const [mode,setMode] = useState(`light`)

  //Alert setting Variables
  const [alert,setAlert] = useState(``)

  const showAlert = (msg,type) => {
    setAlert({
      message : msg,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  
  }

  const toggleMode = () =>{
    if(mode===`light`){
      setMode(`dark`)
      document.body.style.backgroundColor = `#0b0051`
      showAlert(" Dark Mode has been Enabled ","success")
      // document.title = "TextUtils - DarkMode"
    }
    else{
      setMode(`light`)
      document.body.style.backgroundColor = `white`
      showAlert(" light Mode has been Enabled ","success")
      // document.title = "TextUtils - Home"
      
    }
  }

  //Enable red mode function
  const togglermode = () =>{
    if(mode===`dark` || mode===`green`){
      setMode(`red`)
      document.body.style.backgroundColor = `#721212`
      showAlert(" Red Mode has been Enabled ","success")

    }
    else if(mode===`light`){
      setMode(`light`)
      document.body.style.backgroundColor = `white`
      showAlert(" First Enable the dark Mode ","danger")

    }
    else{
      setMode(`dark`)
      document.body.style.backgroundColor = `#0b0051`
      showAlert(" red mode is disabled ","success")

    }
  }


  //Enable Green mode function
  const togglegmode = () =>{
    if(mode===`dark` || mode===`red`){
      setMode(`green`)
      document.body.style.backgroundColor = `green`
      showAlert(" Green Mode has been Enabled ","success")

    }
    else if(mode===`light`){
      setMode(`light`)
      document.body.style.backgroundColor = `white`
      showAlert(" first Enable the dark Mode","danger")

    }
    else{
      setMode(`dark`)
      document.body.style.backgroundColor = `#0b0051`
      showAlert(" green mode is disabled ","success")

    }
  }

  return (
    <>
{/* exact is used to get exact path
    for eg - 
    /users --> Component 1
    /users/home --> Component 2 */}


    {/* <King> */}
    <Navbar title='TextUtils' about='About Us' mode={mode} showAlert={showAlert} alert={alert} togglemode={toggleMode} togglegmode= {togglegmode} togglermode={togglermode}/>
    <Alert alert={alert}/>
    <TForm mode={mode} showAlert={showAlert}/>
    {/* <Routes> */}
      {/* <Route exact path='/' element={<TForm mode={mode} showAlert={showAlert}/>} />
      <Route exact path='/about' element={<About mode={mode}/>} />
      <Route path='/*' element={<Error/>} />
      <Route path='/home' elemen /> */}
    {/* </Routes> */}
    
    
    {/* </King> */}
    </>
  );
}

export default App;
