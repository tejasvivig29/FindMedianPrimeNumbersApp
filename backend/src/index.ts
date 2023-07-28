import express, { Application } from 'express';
import eratosthenesRoute from '../src/routes/Eratosthenes.routes';
import cors from 'cors';
import 'dotenv/config';

const app: Application = express();

app.use(cors());

app.use('/findPrimeMedian', eratosthenesRoute);

const port = process.env.PORT;

app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`);
});