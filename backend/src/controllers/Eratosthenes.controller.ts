import { Request, Response } from "express";
import { EratosthenesService } from '../services/Eratosthenes.service';

export class EratosthenesController {
    private eratosthenesService: EratosthenesService;

    constructor(){
        this.eratosthenesService = new EratosthenesService();
    }

    getMedianPrimeNumbers(req: Request, res: Response){
        const inputNumber = Number(req.query.inputNumber);
        if (isNaN(inputNumber) || inputNumber <= 0){
            res.status(400).send('The number you have entered is invalid. Please enter a positive number');
        }else{
            const medianPrimeNumbers = this.eratosthenesService.findMedianPrimes(inputNumber);
            res.send({ medianPrimeNumbers });
        }
    }
}