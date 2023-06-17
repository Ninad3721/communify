import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Detail from './pages/Detail'
import UnAuthorized from './pages/UnAuthorized'
import Home from './pages/Home';
import Signup from "./pages/Signup"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/UnAuthorized" element={<UnAuthorized></UnAuthorized>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
