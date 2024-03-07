import { useState } from "react";
import { Button } from "./ui/button";

export function UseState() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="hello">Count is: {count} </div>

      <Button onClick={() => setCount(count + 1)}>Count</Button>
    </>
  );
}
