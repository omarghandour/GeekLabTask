import LSide from "./components/LSide";
import Middle from "./components/Middle";
import RSide from "./components/RSide";

function App() {
  return (
    <div className="app h-full flex">
      <LSide />
      <div className="flex w-full justify-between">
        <Middle />
        <RSide />
      </div>
    </div>
  );
}

export default App;
