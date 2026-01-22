import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import { MainContext } from "./context/MainContext";

function App() {
  return (
    <div>
      <Comp1 />
      <Comp2 />
      <Comp3 />
      <MainContext />
    </div>
  );
}

export default App;
