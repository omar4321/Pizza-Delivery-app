import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/Login/privateRoute/privateRoute';
import SignUp from './Components/Login/signup/Signup';
import Notfound from './Components/Notfound/Notfound';
import ServiceContent from './Components/ServiceContent/ServiceContent';
import Detelis from './Components/Services/Detelis/Detelis';
import AuthProvider from './contexts/AuthProvider';
import Dashboard from './Pages/dashboard/Dashboard';

import Home from './Pages/Home';

function App() {
  return (
    <>
      <AuthProvider>
        {' '}
        <Routes>
          <Route path="*" element={<Notfound />} />
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="services" element={<ServiceContent />} />
          <Route path="services/:id" element={<Detelis />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
