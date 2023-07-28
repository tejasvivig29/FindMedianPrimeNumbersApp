import { expect } from 'chai';
import { EratosthenesController } from '../controllers/Eratosthenes.controller';

describe('EratosthenesController Test', () => {
  const eratosthenesController = new EratosthenesController();

  it('should return the median prime numbers for a valid input', () => {
    const mockRequest: any = {
      query: {
        inputNumber: 20,
      },
    };

    const mockResponse: any = {
      send: (data: any) => {
        expect(data).to.deep.equal({ medianPrimeNumbers: [7,11] });
      },
    };

    eratosthenesController.getMedianPrimeNumbers(mockRequest, mockResponse);
  });

  it('should return a status code of 400 for an invalid input', () => {
    const invalidMockRequest: any = {
      query: {
        inputNumber: 'invalidNumber',
      },
    };

    const mockResponse: any = {
      status: (statusCode: number) => {
        expect(statusCode).to.equal(400);
        return {
          send: (message: string) => {
            expect(message).to.equal('The number you have entered is invalid. Please enter a positive number');
          },
        };
      },
    };

    eratosthenesController.getMedianPrimeNumbers(invalidMockRequest, mockResponse);
  });
});
