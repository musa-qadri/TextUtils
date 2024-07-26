
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';


function App() {
  const [modef , setModef] = useState('light')
  const [btnMode1 , setBtnMode1] = useState('Enable Dark Mode')
  const [alert ,setAlert] =useState(null)
 


  const toggalMode = () =>{
    if(modef == 'light'){
      setModef('dark')
      setBtnMode1('Enable Dark Mode')
      document.body.style.backgroundColor = '#032744';
      showAlert('Dark maode on' , 'success')

    }
    else{
      setModef('light')
      setBtnMode1('Enable Light Mode')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode on', 'success')
    }
  }

  const showAlert =(message ,type)=>{
   
      setAlert({
        msg:message,
        type:type,
      })

      setTimeout(() => {
        setAlert(null)
      }, 1000);
  }

  return (
   <>
  <Navbar title='TextUtils' mode={modef} btnMode={btnMode1} toggalMode={toggalMode}/>
  <Alert alert={alert}/>
  <div className={`container my-3  text-${modef==='dark'?'light':'dark'} `} >
   <Textform mode={modef} heading='Enter the text to analyze below' showAlert={showAlert}/>
   <About />
  </div>
   </>
  );
}

export default App;
