import { Request, Response } from "express";
import { EratosthenesService } from '../services/Eratosthenes.service';

export class EratosthenesController {
    private eratosthenesService: EratosthenesService;

    constructor(){
        this.eratosthenesService = new EratosthenesService();
    }

    testingFunction(req: Request, res: Response){
        const message = this.eratosthenesService.printMessage();
        res.send(message);
    }
}