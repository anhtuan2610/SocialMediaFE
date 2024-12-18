import LeftSidebar from "../components/messenger/left-sidebar";
import RightSidebar from "../components/messenger/right-sidebar";

export default function Messenger() {
  return (
    <div className="flex cursor-default gap-10">
        <div className="w-full lg:w-1/4 "><LeftSidebar/></div>
        <div className="hidden lg:block lg:w-3/4"><RightSidebar /></div>
    </div>
  );
}
