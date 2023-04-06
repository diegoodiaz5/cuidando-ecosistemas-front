import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import User from "./Components/User/User.jsx"
import Home from "./Components/Home/Home.jsx"
import MyPlant from "./Components/MyPlant/MyPlant.jsx"
import Forum from "./Components/Forum/Forum.jsx"
import UserConfiguration from './Components/UserConfiguration/UserConfiguration';
import AddPlant from './Components/AddPlant/AddPlant';
import MyProfile from './Components/UserConfiguration/MyProfile/MyProfile'
import Help from './Components/UserConfiguration/Help/Help';
import Notifications from './Components/UserConfiguration/Notifications/Notifications';
import TermsAndConditions from './Components/UserConfiguration/TermsAndConditions/TermsAndConditions';
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
        <Route path="userconfiguration/myprofile" element={<MyProfile />} />
        <Route path="addplant" element={<AddPlant />} />
        <Route path="help" element={<Help />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="termsandconditions" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
