import React, {useContext} from 'react';
import {Button, TextField} from '@material-ui/core';
import {multiStepContext} from '../StepContext';


function Userdetails() {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div>
            <div>
                <TextField label="First name" value={userData['firstname']} onChange={(e) => setUserData({...userData, "firstname": e.target.value})} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField label="Middle name" value={userData['middlename']} onChange={(e) => setUserData({...userData, "middlename": e.target.value})} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                 <TextField label="Last name" value={userData['lastname']} onChange={(e) => setUserData({...userData, "lastname": e.target.value})} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                 <Button onClick={() => setStep(2)} variant="contained" color="primary" style={{margin: "30px"}}>Next</Button>
            </div>
        </div>
    )
}

export default Userdetails;
