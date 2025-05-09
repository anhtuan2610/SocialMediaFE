import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./pages/login";
import Home from "./pages/home";
import Layout from "./components/common/ui/layout";
import Messenger from "./pages/messenger";
import Register from "./pages/register";
import Profile from "./pages/profile";
import NotFound from "./components/permission/not-found";
import AccessDenied from "./components/permission/access-denied";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/access-denied" element={<AccessDenied />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/messenger/:roomId?" element={<Messenger />} />
          <Route path="/profile/:userId" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}
