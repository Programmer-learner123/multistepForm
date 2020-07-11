import React , { useState } from 'react';
import App from './App';
export const multiStepContext = React.createContext();

const StepContext = () => {
 const [currentStep, setStep] = useState(1);
 const [userData, setUserData] = useState([]);
 const [finalData, setFinalData] = useState([]);
    return (
        <div>
            <multiStepContext.Provider 
            value={{currentStep, setStep , userData, setUserData, finalData, setFinalData}}>
            <App />
            </multiStepContext.Provider>
        </div>
    )
}

export default StepContext;
