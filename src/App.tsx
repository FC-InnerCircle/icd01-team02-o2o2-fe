import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "pages/Menu";
import MenuDetail from "pages/MenuDetail";
import Profile from "pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home role="store-owner" />} />
      <Route path="/menu" element={<Menu />} />
      {/* 관리자만 */}
      <Route path="/menu/:id" element={<MenuDetail />} />
      <Route path="/order" element={<Menu />} />
      {/* 관리자만 */}
      <Route path="/order/:id" element={<MenuDetail />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
