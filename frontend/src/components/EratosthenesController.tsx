import React, { useState, ChangeEvent } from 'react';
import { getMeridianPrimeNumbers } from '../services/EratosthenesService';
import { Button, TextField } from '@mui/material';

function EratosthenesController (){
    const [inputNumber, setInputNumber] = useState<number | ''>('');
    const [solution, setSolution] = useState<string>('');
    const [isLoading, setLoading] = useState<boolean>(false);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setInputNumber(inputValue !== '' ? Number(inputValue) : '');
    }

    const handleCalculate = async () =>{
        try{
            if(typeof inputNumber !== 'number' || isNaN(inputNumber) || inputNumber < 0){
                setSolution("Enter a positive number");
                return;
            }
            setLoading(true);
            const medianPrimeNumbers = await getMeridianPrimeNumbers(inputNumber);
            setSolution(medianPrimeNumbers.join(', '));
        }catch (e){
            if(e instanceof Error){
                setSolution(e.message);
            }
        }finally{
            setLoading(false);
            setInputNumber('');
        }
    }

    return(
        <div >
            <h1  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    }}>Calculate Median Prime Number</h1>
            <div className="input-container"  style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        marginRight: "1rem"
                    }}>
                <TextField id="standard-basic" label="Enter a positive number" variant="standard" type="number" value={inputNumber} placeholder="Enter a positive number" onChange={handleInputChange}></TextField>
                <Button variant="contained" onClick={handleCalculate}>Calculate</Button>
            </div>
            <div  style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%"
                    }}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <p>Output: {solution}</p>
                )}
            </div>
        </div>
    );
}

export default EratosthenesController;