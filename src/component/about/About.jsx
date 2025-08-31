import { useState } from "react";

export default function About() {
  const [randomNum, setRandomNum] = useState(null);

  return (
    <div>
      <h2>About</h2>
      <button onClick={() => setRandomNum(Math.round(Math.random() * 100))}>
        Generate Random Number
      </button>
      {randomNum !== null && <p>Random Number: {randomNum}</p>}
    </div>
  );
}
