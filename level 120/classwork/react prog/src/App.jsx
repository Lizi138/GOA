import Button from "./components/Button"

const App = () => {
  const handleClick = () => {
    alert("You are HACKER!")
  }
  return (
    <>
      <Button onClick={handleClick} />
    </>
  )
}

export default App;