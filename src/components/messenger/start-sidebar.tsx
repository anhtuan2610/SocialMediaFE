import hiIcon from "../../assets/messenger-icon/hi.svg";
import conversation from "../../assets/messenger-icon/conversation.svg";
import { useUserStore } from "../../stores/user";

export default function StartSidebar() {
  const user = useUserStore((state) => state.user);
  return (
    <div className="rounded-3xl overflow-hidden flex flex-col h-[780px] w-full bg-white">
      <div className="w-full h-full flex flex-col justify-center items-center text-3xl gap-4">
        <div className="flex items-center gap-4">
          <p>Welcome</p> <img className="w-14 h-14" src={hiIcon} alt="" />
          <div className="font-bold">{user?.userInfo.fullName}</div>
        </div>
        <div>Select a chat to start messaging</div>
        <div>
          <img className="w-20 h-20" src={conversation} alt="" />
        </div>
      </div>
    </div>
  );
}
