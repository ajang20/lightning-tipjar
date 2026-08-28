import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TipSuccess from "./pages/Success";
import NotFound from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/tip/success" element={<TipSuccess />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;