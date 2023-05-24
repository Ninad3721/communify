import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Detail from './pages/Detail'
import UnAuthorized from './pages/UnAuthorized'
import Home from './pages/Home';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/UnAuthorized" element={<UnAuthorized></UnAuthorized>} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
