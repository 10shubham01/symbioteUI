// Example from https://beta.reactjs.org/learn

import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="bg-red-600">
      <button onClick={handleClick}>Clicked {count} times11</button>
    </div>
  );
}

export default function MyApp() {
  return <MyButton />;
}
