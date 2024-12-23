import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Layout from "./components/layout";
import Messenger from "./pages/messenger";
import Register from "./pages/register";
import ProtectedRoute from "./routes/ProtectedRoute";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/messenger" element={<Messenger />} />
        </Route>
      </Route>
    </Routes>
  );
}
