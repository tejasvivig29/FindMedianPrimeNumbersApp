import express, { Application } from 'express';
import eratosthenesRoute from '../src/routes/Eratosthenes.routes';

const app: Application = express();

app.use('/findPrimeMedian', eratosthenesRoute);

const port = 3000;

app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`);
});