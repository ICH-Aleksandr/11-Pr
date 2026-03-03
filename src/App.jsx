import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Users from "./pages/users";
import UserProfile from "./pages/userProfile";
import Nav from "./components/nav";
import NotFoundPage from "./pages/notFoundPage";

function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserProfile />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
