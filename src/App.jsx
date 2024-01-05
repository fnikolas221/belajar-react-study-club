import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Connect from "./Connect";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
