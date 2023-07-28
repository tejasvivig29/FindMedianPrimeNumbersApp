import { expect, use } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { getMeridianPrimeNumbers } from '../services/EratosthenesService';
import axios from 'axios';
import sinon from 'sinon';

use(chaiAsPromised);

describe('EratosthenesService', () => {
  describe('getMeridianPrimeNumbers', () => {
    it('should return the median prime numbers for a valid input', async () => {
      const inputNumber = 10;
      const expectedResponse = { medianPrimeNumbers: [2, 3, 5, 7] };
      const axiosGetStub = sinon.stub(axios, 'get').resolves({ data: expectedResponse });
      const result = await getMeridianPrimeNumbers(inputNumber);
      expect(result).to.deep.equal(expectedResponse.medianPrimeNumbers);
      axiosGetStub.restore();
    });

    it('should throw an error for an invalid input', async () => {
      const inputNumber = -5;
      const errorMessage = 'An error occurred while getting the response back from the API';
      const axiosGetStub = sinon.stub(axios, 'get').rejects(new Error('API error'));
      await expect(getMeridianPrimeNumbers(inputNumber)).to.be.rejectedWith(Error, errorMessage);
      axiosGetStub.restore();
    });
  });
});
