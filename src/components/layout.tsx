import { Outlet } from "react-router-dom";
import Header from "./header";
import Navbar from "./navbar";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-Nunito">
      <header className="sticky top-0 z-50">
        <Header />
      </header>

      <nav className="fixed bottom-0 flex justify-center w-full lg:w-auto lg:h-full lg:top-0 lg:left-0 lg:flex-col">
        <Navbar />
      </nav>

      <main className="flex-grow pt-4 bg-[#F3F5F7] lg:px-24 lg:p-8">
        <Outlet /> {/* Render nội dung trang con ở đây */}
      </main>
    </div>
  );
}
