import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Users from "./pages/users";
import Nav from "./components/nav";
import NotFoundPage from "./pages/notFoundPage";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
export default App;
