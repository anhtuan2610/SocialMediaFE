import { Heart, MessageSquare, UserPlus } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "like",
    user: "Nguyễn Văn A",
    avatar: "https://i.pravatar.cc/40?img=1",
    message: "đã thích bài viết của bạn.",
    time: "2 phút trước",
    icon: <Heart className="w-5 h-5 text-red-500" />,
  },
  {
    id: 2,
    type: "comment",
    user: "Trần Thị B",
    avatar: "https://i.pravatar.cc/40?img=2",
    message: "đã bình luận: 'Bài viết hay quá!'",
    time: "5 phút trước",
    icon: <MessageSquare className="w-5 h-5 text-blue-500" />,
  },
  {
    id: 3,
    type: "friend_request",
    user: "Lê Văn C",
    avatar: "https://i.pravatar.cc/40?img=3",
    message: "đã gửi lời mời kết bạn.",
    time: "10 phút trước",
    icon: <UserPlus className="w-5 h-5 text-green-500" />,
  },
];

export default function NotificationList() {
  return (
    <div className="absolute -top-[22rem] -translate-x-1/2 left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:left-56 w-80">
      <div className="bg-gray-100 border border-gray-300 shadow-lg rounded-lg p-4 text-gray-900">
        <h3 className="text-lg font-semibold mb-3">Notification</h3>
        <ul>
          {notifications.map((noti) => (
            <li
              key={noti.id}
              className="flex items-center space-x-3 p-3 hover:bg-gray-200 rounded-lg transition"
            >
              <img
                src={noti.avatar}
                alt="Avatar"
                className="w-10 h-10 rounded-full border border-gray-400"
              />
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium text-gray-800">{noti.user}</span>{" "}
                  {noti.message}
                </p>
                <span className="text-xs text-gray-600">{noti.time}</span>
              </div>
              {noti.icon}
            </li>
          ))}
        </ul>
        {/* Mũi tên chỉ xuống (màu sáng hơn) */}
        <div
          className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 lg:-left-1 lg:bottom-1/2 lg:rotate-90 w-0 h-0 
            border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-gray-100"
        ></div>
      </div>
    </div>
  );
}
