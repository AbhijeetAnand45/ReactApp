import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/HomePage/Home'
import Sidebar from './components/SidebarComponent/Sidebar';
import Dashboard from './components/DashboardPage/Dashboard';
import Settings from './components/SettingPage/Settings';
import Logout from './components/LogoutPage/Logout';

function App() {
  return (
    <div className="App">
      <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
