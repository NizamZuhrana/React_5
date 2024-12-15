import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import DetailPage from "./page/DetailPage";
import LoginPage from "./page/LoginPage";
import ProtectRoutes from "./routes/protectRoutes";
import ProfilePage from "./page/ProfilePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/detail/:id"
          element={
            <ProtectRoutes>
              <DetailPage />
            </ProtectRoutes>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectRoutes>
              <ProfilePage />
            </ProtectRoutes>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// 1 components logic = token => halaman nya
// token !== null ? halaman login : halaman utama
