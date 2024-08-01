import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

function App() {
  const [modef, setModef] = useState('light');
  const [btnMode1, setBtnMode1] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const removeclasslist =()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-dark')
  }

  const toggalMode = (cls) => {
    removeclasslist()
    console.log(cls)
    document.body.classList.add('bg-'+cls)
  
    if (modef === 'light') {
      setModef('dark');
      setBtnMode1('Enable Dark Mode');
      document.body.style.backgroundColor = '#032744';
      showAlert('Dark mode on', 'success');
    } else {
      setModef('light');
      setBtnMode1('Enable Light Mode');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode on', 'success');
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <>
      <Router>
        <Navbar title='TextUtils' mode={modef} btnMode={btnMode1} toggalMode={toggalMode} />
        <Alert alert={alert} />
        <div className={`container my-3 text-${modef === 'dark' ? 'light' : 'gray'}`}>
          <Routes>
            <Route path='/about' element={<About abouts={modef} aboutText='primary' />} />
            <Route path='/' element={<Textform mode={modef} heading='Enter the text to analyze below' showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
