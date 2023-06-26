import "./App.css";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import Alert from "./components/Alert";
import React, {useState} from 'react'

var aboutUs = "Hi we are an ai startup. We focus on building a handfree world."

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
      
      setAlert(
          {
            msg: msg,
            type: type
          }
      );
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }

  const toggleMode = ()=> {
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("dark mode has been enabled baby!!!", "success");
    } else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled baby!!!!", "success");
    }
  }

  return (
    <>
    <Navbar title="TextUtils" aboutText={aboutUs} mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-3">
      <TextForms boxtext="write your text here...." mode={mode} alertFunc={showAlert}/>
    </div>
    </>
  );
}

export default App;
