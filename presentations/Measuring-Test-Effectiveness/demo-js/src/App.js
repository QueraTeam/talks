import {useState} from "react";
import "./App.css";

function countFactors(number) {
  let cnt = 0;
  for (let i = 1; i*i <= number; i++)
    if (number % i === 0)
      cnt += 1;
  return number === 1 ? 1 : cnt + 1;
}

function isPrime(number) {
  return countFactors(number) === 2;
}

function countPrimes(max) {
  let cnt = 0;
  for (let i = 1; i <= max; i++) {
    if (isPrime(i))
      cnt++;
  }
  return cnt;
}

function App() {
  const [input, setInput] = useState(2);
  return (
    <div className="App">
      <br/><br/>
      <label htmlFor="number">Input</label>
      <input id="number" type="number" value={input} onChange={(e) => setInput(e.target.value)}/>
      <p>
        Number of primes less than or equal to {input} is: <span data-testid="result">{countPrimes(input)}</span>
      </p>
    </div>
  );
}

export default App;
