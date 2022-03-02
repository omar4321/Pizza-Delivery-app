import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/signup/Signup';
import AuthProvider from './contexts/AuthProvider';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <AuthProvider>
        {' '}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
