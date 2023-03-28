import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import User from "./Components/User/User.jsx"
import Home from "./Components/Home/Home.jsx"
import MyPlant from "./Components/MyPlant/MyPlant.jsx"
import Forum from "./Components/Forum/Forum.jsx"
import UserConfiguration from './Components/UserConfiguration/UserConfiguration';
import AddPlant from './Components/AddPlant/AddPlant';
import './Firebase'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="home" element={<Home />} />
        <Route path="myplant" element={<MyPlant />} />
        <Route path="forum" element={<Forum />} />
        <Route path="userconfiguration" element={<UserConfiguration />} />
        <Route path="addplant" element={<AddPlant />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
