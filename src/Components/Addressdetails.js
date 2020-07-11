import React, {useContext} from 'react';
import {Button, TextField} from '@material-ui/core';
import {multiStepContext} from '../StepContext';



function Addressdetails() {
    const {setStep, userData, setUserData, submitData} = useContext(multiStepContext);
    return (
        <div>
            <div>
                <TextField label="City name" value={userData['cityname']} onChange={(e) => setUserData({...userData, "cityname": e.target.value})} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField label="Landmark name" value={userData['landmarkname']} onChange={(e) => setUserData({...userData, "landmarkname": e.target.value})} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField label="Postal code name" value={userData['postalcode']} onChange={(e) => setUserData({...userData, "postalcode": e.target.value})} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <Button variant="contained" onClick={() => setStep(2)} color="secondary" style={{margin: "30px"}}>Back</Button>
                <Button variant="contained" onClick={() => setStep(4)} color="primary" style={{margin: "30px"}}>Submit</Button>
            </div>
        </div>
    )
}

export default Addressdetails;
