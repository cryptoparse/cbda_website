import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import LoadingAction from './Components/LoadingAction';
import WelcomeScreen from './WelcomeScreen/WelcomeScreen';
import 'bootstrap/dist/css/bootstrap.css'
const GlobalContext = React.createContext(null);

function App() {
  const loadingRef = useRef(null);
  const [globalState, SetGlobalState] = useState();

  useEffect(()=>{
    loadingRef.current.loadingOn();
    setTimeout(() => {
      loadingRef.current.loadingOff();
    }, 1000);
  })
  return (
    <div className="App">
      <GlobalContext.Provider value={(globalState,SetGlobalState)}>
        <WelcomeScreen/>
        <LoadingAction ref = {loadingRef}> 
        <div className="d-grid gap-2" >
          <button type='button' className='btn btn-lg' >START</button>
          </div>          
        </LoadingAction>
      </GlobalContext.Provider>
    </div>
  );

}

export default App;
