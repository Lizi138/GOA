import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import { MainContext } from "./context/MainContext";

function App() {
  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <Comp1 />
      <Comp2 />
      <Comp3 />
      <MainContext />
    </div>
  );
}

export default App;
