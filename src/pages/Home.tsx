import LeftSidebar from "../components/home/left-sidebar";
import MainContent from "../components/home/main-content";
import RightSidebar from "../components/home/right-sidebar";

export default function Home() {
  return (
    <div className="flex justify-between lg:space-x-10 px-4 pt-4 lg:p-8 lg:px-24">
      <div className="hidden lg:block w-1/4">
        <div className="fixed left-8 top-30 w-1/4 h-screen overflow-y-auto">
          <LeftSidebar />
        </div>
      </div>
      <div className="w-full px-1 lg:w-1/2">
        <MainContent />
      </div>
      <div className="hidden lg:block w-1/4">
        <div className="fixed right-8 top-30 w-1/4 h-screen overflow-y-auto">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
