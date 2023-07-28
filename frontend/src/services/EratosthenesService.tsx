import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function getMeridianPrimeNumbers(inputNumber: number) {
    console.log(`${BASE_URL}/findMedianPrime/median?inputNumber=${inputNumber}`);
    try{
        const response = await axios.get(`${BASE_URL}/findPrimeMedian/median?inputNumber=${inputNumber}`);
        return response.data.medianPrimeNumbers;
    }catch(error){
        console.log('Error encountered while hitting the back end API ', error);
        throw new Error('An error occurred while getting the response back from the API');
    }
}


