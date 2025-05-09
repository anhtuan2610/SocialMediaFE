import avatarMessage2 from "../../assets/home-icon/mubark-image.jpg";
import phoneIcon from "../../assets/messenger-icon/phone.svg";
import videoIcon from "../../assets/messenger-icon/video.svg";
import infoIcon from "../../assets/messenger-icon/i-icon.svg";
import backIcon from "../../assets/messenger-icon/back.svg";
import { useQuery } from "@tanstack/react-query";
import { getChatRoomInfo } from "../../services/chat-room-api";
import { useUserStore } from "../../stores/user";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function MessageHeader({
  roomIdSelected,
  handleGoBack,
}: {
  roomIdSelected: string;
  handleGoBack: () => void;
}) {
  const user = useUserStore((state) => state.user);
  const { isLoading, data } = useQuery({
    queryKey: ["fetchChatRoomInformation", roomIdSelected],
    queryFn: async () => {
      const response = await getChatRoomInfo(roomIdSelected);
      const chatRoomName = response.data.members.filter(
        (member) => member._id != user?.userInfo._id
      )[0].fullName;
      console.log(chatRoomName);

      response.data.name = chatRoomName;
      return response;
    },
  });

  return (
    <div className="bg-white flex justify-between items-center p-2 px-4 lg:p-3 lg:px-6">
      {isLoading ? (
        <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
          <Skeleton circle width={64} height={64} />
          <div className="pl-2 flex-1 space-y-2">
            <Skeleton width="40%" height={20} />
            <Skeleton width="30%" height={20} />
          </div>
        </SkeletonTheme>
      ) : (
        <div className="flex items-center gap-4">
          <div
            className="lg:hidden bg-gray-200 rounded-full flex justify-center items-center w-8 h-8"
            onClick={handleGoBack}
          >
            <img className="w-6 h-6" src={backIcon} alt="" />
          </div>
          <div className="flex items-center justify-center gap-3">
            <img
              className="rounded-full w-14 h-14 lg:w-16 lg:h-16"
              src={avatarMessage2}
              alt=""
            />
            <div>
              <div className="font-bold">{data?.data.name}</div>
              <div className="text-sm text-[#697497] font-semibold">
                Active 16m ago
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex space-x-4 lg:space-x-10">
        <img className="w-7 lg:w-10" src={phoneIcon} alt="" />
        <img className="w-7 lg:w-10" src={videoIcon} alt="" />
        <img className="w-7 lg:w-10" src={infoIcon} alt="" />
      </div>
    </div>
  );
}
