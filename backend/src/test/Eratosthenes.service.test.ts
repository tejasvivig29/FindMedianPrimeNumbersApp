import { expect } from 'chai';
import { EratosthenesService } from '../services/Eratosthenes.service';

describe('EratosthenesService Test', () => {
  const eratosthenesService = new EratosthenesService();

  it('should return the correct prime numbers up to the input number', () => {
    const inputNumber = 20;
    const expectedPrimes = [2, 3, 5, 7, 11, 13, 17, 19];
    const result = eratosthenesService.sieveOfEratosthenes(inputNumber);
    expect(result).to.deep.equal(expectedPrimes);
  });

  it('should return the correct median prime for an odd number of primes', () => {
    const inputNumber = 20;
    const expectedMedianPrimes = [7,11];
    const result = eratosthenesService.findMedianPrimes(inputNumber);
    expect(result).to.deep.equal(expectedMedianPrimes);
  });

  it('should return the correct median primes for an even number of primes', () => {
    const inputNumber = 30;
    const expectedMedianPrimes = [11, 13];
    const result = eratosthenesService.findMedianPrimes(inputNumber);
    expect(result).to.deep.equal(expectedMedianPrimes);
  });
});
