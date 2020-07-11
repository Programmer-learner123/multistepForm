import React , { useContext }from 'react';
import {Button, TextField} from '@material-ui/core';
import {multiStepContext} from '../StepContext';


function Personaldetails() {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div>
            <div>
                <TextField label="Email Id" value={userData['emailId']} onChange={(e) => setUserData({...userData, "emailId": e.target.value})}margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField label="Country" value={userData['countryname']} onChange={(e) => setUserData({...userData, "countryname": e.target.value})} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField label="Contact Number" value={userData['contact']} onChange={(e) => setUserData({...userData, "contact": e.target.value})} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <Button variant="contained" onClick={() => setStep(3)} color="primary" style={{margin: "30px"}}>Next</Button>
                <Button variant="contained" onClick={() => setStep(1)} color="secondary" style={{margin: "30px"}}>Back</Button>
            </div>
        </div>
    )
}

export default Personaldetails;
