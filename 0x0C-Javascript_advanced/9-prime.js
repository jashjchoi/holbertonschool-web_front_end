function countPrimeNumbers () {
  const primes = [2];
  for (let i = 2; i <= 100; i++) {
    if (i % 2 !== 0) {
      let isPrime = true;
      for (const prime of primes) {
        if (i % prime === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(i);
      }
    }
  }
  return (primes.length);
}
console.log(countPrimeNumbers());

const t0 = performance.now();
countPrimeNumbers();
const t1 = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);
