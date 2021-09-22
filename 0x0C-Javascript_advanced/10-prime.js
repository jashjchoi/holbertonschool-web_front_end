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

const t0 = performance.now();
for (let i = 0; i < 100; i++) countPrimeNumbers(100);
const t1 = performance.now();

console.log(
    `Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds.`
);
