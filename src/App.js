import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import Upload from "./Components/Upload";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </div>
  );
}

export default App;
