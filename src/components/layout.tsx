import { Outlet } from "react-router-dom";
import Header from "./header";
import Navbar from "./navbar";
import { SocketContext } from "../context/socket-context";
import useSocket from "../hooks/useConnectSocket";

export default function Layout() {
  const socket = useSocket("http://localhost:8080");

  return (
    <div className="min-h-screen flex flex-col font-Nunito">
      <header className="sticky top-0 z-50">
        <Header />
      </header>
      <SocketContext.Provider value={socket}>
        <nav className="fixed bottom-3 flex justify-center w-full lg:w-auto lg:h-full lg:top-0 lg:left-1 lg:flex-col z-10">
          <Navbar />
        </nav>
        <main className="flex-grow bg-[#F3F5F7]">
          <Outlet /> {/* Render nội dung trang con ở đây */}
        </main>
      </SocketContext.Provider>
    </div>
  );
}
