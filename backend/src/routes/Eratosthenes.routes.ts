import express, { Router } from 'express';
import { EratosthenesController } from '../controllers/Eratosthenes.controller';

const router: Router = express.Router();
const eratosthenesController: EratosthenesController = new EratosthenesController();

router.get('/', eratosthenesController.testingFunction.bind(eratosthenesController));

export default router;
