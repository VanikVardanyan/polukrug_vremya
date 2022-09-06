import { Watch } from "./components/Watch";
import { Routes, Route } from "react-router-dom";
import { CircleHalf } from "./components/CircleHalf";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Watch />} />
        <Route path="/circlehalf" element={<CircleHalf />} />
      </Routes>
    </>
  );
}

export default App;
