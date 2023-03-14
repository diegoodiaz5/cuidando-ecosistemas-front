import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import User from "./Components/User/User.jsx"
import Home from "./Components/Home/Home.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User/>}/>
        <Route path="Home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
