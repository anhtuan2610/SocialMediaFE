import avatar from "../assets/home-icon/mubark-image.jpg";
import background from "../assets/profile/bg-image.jpg";
import air from "../assets/profile/air-icon.svg";
import ProfileStats from "../components/profile/profile-stats";
import ListFriend from "../components/profile/list-friend";
import ListGallery from "../components/profile/list-gallery";
import ProfilePost from "../components/profile/profile-post";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProfileInfo } from "../services/users-api";
import { useUserStore } from "../stores/user";
import { AnimatePresence, motion } from "motion/react";
import PostBox from "../components/profile/post-box";
import { getChatRoomId } from "../services/chat-room-api";
import { useEffect, useState } from "react";
import SettingModal from "../components/profile/setting-modal";

export default function Profile() {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();
  const { userId } = useParams();
  const [isShowSettingModal, setIsShowSettingModal] = useState(false);
  const { data } = useQuery({
    queryKey: ["fetchProfileInfo", userId],
    queryFn: async () => {
      if (userId) {
        const response = await getProfileInfo({ userId });
        return response;
      }
    },
  });

  const handleChatOnclick = async () => {
    if (user?.userInfo._id && userId) {
      const response = await getChatRoomId({
        userId1: user?.userInfo._id,
        userId2: userId,
      });
      if (response.data) {
        const chatRoomId = response.data;
        navigate(`/messenger/${chatRoomId}`);
      }
    }
  };

  useEffect(() => {
    if (isShowSettingModal) {
      document.body.classList.add("overflow-hidden"); // đang thêm class(thêm thuộc tính vào tailwind) overflow-hidden vào body (document đại diện toàn bộ trang, window -> document -> body)
      return;
    }
    document.body.classList.remove("overflow-hidden");
  }, [isShowSettingModal]);

  return (
    <div className="min-h-screen w-full relative">
      <div className="absolute cursor-pointer">
        <img
          className="max-h-96 w-screen object-cover"
          src={background}
          alt=""
        />
      </div>
      <div className="px-4 lg:px-28 pt-32">
        <div className="flex justify-center ">
          <div className="relative flex flex-col justify-center items-center gap-3 bg-white w-full border-2 border-black p-6 rounded-3xl lg:w-1/3 lg:translate-y-1/2">
            <div className="absolute -top-[55px] border-[3px] border-white rounded-full shadow-lg">
              <img
                className="rounded-full w-24 h-24 object-cover border-2"
                src={avatar}
                alt="Profile Avatar"
              />
            </div>
            <div className="text-center space-y-1 pt-6">
              <div className="font-bold text-xl">
                {data?.data.info.fullName}
              </div>
              <p className="text-center font-light">
                Ullum noster eu vis. Ius malorum feugait conclusionemque ex, mea
                an vocent tamquam vivendum. Vis amet vocent ne, no vix vidisse
                facilis. Te eam erant nominavi eloquentiam.{" "}
              </p>
            </div>
            <div className="w-full flex gap-3">
              {userId === user?.userInfo._id ? (
                <button
                  className="bg-gray-800 font-bold text-xl text-white p-3 rounded-2xl flex-grow hover:bg-gray-700 hover:scale-105 transition-all duration-300 ease-in-out"
                  onClick={() => setIsShowSettingModal(true)}
                >
                  Setting
                </button>
              ) : (
                <button className="bg-[#084FFF] font-bold text-xl text-white p-3 rounded-2xl flex-grow hover:bg-[#003EB3] hover:scale-105 transition-all duration-300 ease-in-out">
                  Add Friend
                </button>
              )}
              {userId !== user?.userInfo._id && (
                <button
                  className="p-3 bg-[#E9E6F2] rounded-2xl"
                  onClick={handleChatOnclick}
                >
                  <img
                    className="w-8 h-8 transform-gpu hover:scale-125 transition-all duration-300 ease-in-out"
                    src={air}
                    alt="Flying Airplane"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-4 lg:mt-40">
          <div className="flex gap-4">
            <ProfileStats />
            <div className="space-y-3">
              <ListFriend />
              <ListGallery />
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <div className="space-y-4 lg:w-2/3">
              <div className="w-full">
                <PostBox />
              </div>
              <div className="flex justify-center">
                <ProfilePost />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isShowSettingModal && (
          <motion.div
            key="modal"
            transition={{ duration: 0.2, ease: "linear" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {<SettingModal setIsShowSettingModal={setIsShowSettingModal} />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
