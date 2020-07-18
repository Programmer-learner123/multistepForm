import React, { useContext } from 'react';

import './App.css';
import DataFetching from './DataFetching';
import Userdetails from './Components/Userdetails';
import Personaldetails from './Components/Personaldetails';
import Addressdetails from './Components/Addressdetails';  
import Success from './Components/Success'; 
import { Stepper, StepLabel, Step} from '@material-ui/core';
import { multiStepContext } from './StepContext';
import { useMediaQuery} from '@material-ui/core';
function App() {

  const { currentStep, finalData} = useContext(multiStepContext);
    function showStep(step){
      console.log(step);
      switch(step){
        case 1: 
            return <Userdetails />
        case 2:
            return <Personaldetails />
        case 3:
            return <Addressdetails /> 
            case 4: 
            return <Success />    
      }
    }
    
  return (
    <div className="App user">
    
        
        <h3 style={{color: "blue", fontFamily: "Arial"}}> ReactJs Multistep Form Application</h3>
        
        <div className="center-stepper App-header task1" >
            <Stepper style={{width: "18%", background: "orange"}} activeStep={currentStep - 1} orientation="horizontal">
                <Step>
                  <StepLabel></StepLabel>
                </Step>
                <Step>
                  <StepLabel></StepLabel>
                </Step>
                <Step>
                  <StepLabel></StepLabel>
                </Step>
            </Stepper>
        </div>
        <div class="task1">
        { showStep(currentStep)}
        </div>
      
      <br/><br/>
    <h1> Used axios library to fetch data from jsonplaceholder.</h1>
      <DataFetching />
    
    </div>
  );
}

export default App;
