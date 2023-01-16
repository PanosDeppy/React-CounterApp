// Create our Counter function-based component.

import { useState } from "react";

export const Counter = () => {
  /* After you write what you want to return,
    you can write the logic here and then
    make the modifications you need on the return
    such as write the function onClick in the buttons: */

  /* We use the useState hook with desctructuring in order to
  set the initial state to 0 (count) and then
  return the stateful value count and the function setCount
  in order to update the state of the value of count.

  Then we add the onClick event to each button in order to
  decrease, reset and increas the count.
   */

  const [count, setCount] = useState(0);

  return (
    <div className="container text-center counterContainer p-3">
      <div>
        <h3 className="text-center p-3 fs-4">Count is: {count}</h3>
      </div>
      <div className="p-3 d-flex justify-content-evenly">
        <button
          className="decrease p-3 w-25 border-0 rounded"
          onClick={() => setCount(count - 1)}
          type="button"
        >
          Decrease!
        </button>
        <button
          className="reset p-3 w-25 border-0 rounded"
          onClick={() => setCount(0)}
          type="button"
        >
          Reset!
        </button>
        <button
          className="increase p-3 w-25 border-0 rounded"
          onClick={() => setCount(count + 1)}
          type="button"
        >
          Increase!
        </button>
      </div>
    </div>
  );
};
