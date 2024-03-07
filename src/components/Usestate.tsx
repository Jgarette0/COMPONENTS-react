import { useState } from "react";
import { Button } from "./ui/button";

export function UseState() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Button variant="outline" onClick={() => setCount(count + 1)}>
          Count : {count}
        </Button>
      </div>
    </>
  );
}
