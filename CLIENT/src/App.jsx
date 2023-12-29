import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./all_pages/Home";
import About from "./all_pages/About";
import Profile from "./all_pages/Profile";
import SignIn from "./all_pages/SignIn";
import SignUp from "./all_pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
