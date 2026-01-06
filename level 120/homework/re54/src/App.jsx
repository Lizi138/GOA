import Hello from "./Hello";
import HelloButton from "./HelloButton";

const App = () => {
  const someFunction = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <Hello name="Alice" />
      <HelloButton onClick={someFunction} />
    </div>
  );
};

export default App;
