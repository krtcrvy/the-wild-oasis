import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>App</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
