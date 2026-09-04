import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import SignupForm from './pages/SignupForm';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Post from './pages/Post';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;