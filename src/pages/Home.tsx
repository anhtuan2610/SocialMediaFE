import LeftSidebar from "../components/home/left-sidebar";
import MainContent from "../components/home/main-content";
import RightSidebar from "../components/home/right-sidebar";

export default function Home() {
  return (
    <div className="flex justify-between lg:space-x-10 px-4 pt-4 lg:p-8 lg:px-24">
      <div className="w-1/4 hidden lg:block">
        <LeftSidebar />
      </div>
      <div className="w-full px-1 lg:w-1/2">
        <MainContent />
      </div>
      <div className="w-1/4 hidden lg:block">
        <RightSidebar />
      </div>
    </div>
  );
}
