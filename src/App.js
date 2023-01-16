import { Banner } from "./Components/Banner";
import { Counter } from "./Components/Counter";

/* Create our main function-based component and inside this component we will build our app.
We create a variable in which we store an arrow function which returns the main div
and in this div we will add every other component we create*/

export const App = () => {
  return (
    <div>
      <Banner />
      <Counter />
    </div>
  );
};
