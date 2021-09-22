const isPrime = (number) => {
  if (number < 2) return false;

  const sqrt = parseInt(Math.sqrt(number));
  for (let i = 2; i <= sqrt; i++) {
    if (number % i === 0) { return false; }
  }
  return true;
};

const countPrimeNumbers = () => {
  const array = [2];
  for (let i = 3; i < 100; i += 2) {
    if (isPrime(i)) array.push(i);
  }

  return array.length;
};

const t0 = performance.now();
for (let i = 0; i < 100; i++) {
  setTimeout(countPrimeNumbers(), 0);
}
const t1 = performance.now();

console.log(
    `Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`
);
