export class EratosthenesService {
  
  sieveOfEratosthenes(inputNumber: number): number[]{
    const primeNumbers: boolean[] = new Array(inputNumber + 1).fill(true);
    primeNumbers[0] = primeNumbers[1] = false;

    for(let i = 2; i * i <= inputNumber; i++){
      if(primeNumbers[i]){
          for(let j = i * i; j <= inputNumber;  j += i){
            primeNumbers[j] = false;
          }
      }
    }
    return primeNumbers.reduce((acc: number[], isPrime: boolean, index: number) => {
      if(isPrime && index > 0){
        acc.push(index);
      }
      return acc;
    }, []);
  }

  findMedianPrimes(inputNumber: number): number[]{
    const primeNumbers = this.sieveOfEratosthenes(inputNumber);
    const length = primeNumbers.length;
    const indexOfMedian = Math.floor(length / 2);

    if(length % 2 === 0){
      return [primeNumbers[indexOfMedian - 1], primeNumbers[indexOfMedian]];
    }else{
      return [primeNumbers[indexOfMedian]];
    }
  }

}