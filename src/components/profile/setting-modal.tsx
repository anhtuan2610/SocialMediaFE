import avatar from "../../assets/home-icon/mubark-image.jpg";
import link from "../../assets/profile/link.svg";
import mail from "../../assets/profile/mail-icon.svg";

export default function SettingModal({
  setIsShowSettingModal,
}: {
  setIsShowSettingModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="fixed inset-0 bg-[#89888b] bg-opacity-50 z-20 flex justify-center items-center">
      <div className="bg-white p-1 w-4/5 rounded-xl">
        <div
          className="relative bg-[#ece8e8] h-16"
          style={{ borderRadius: "0.75rem 0.75rem 0 0" }}
        >
          <div className="absolute bottom-0 translate-y-1/2 left-2 border-[2px] border-white rounded-full shadow-lg">
            <img
              className="rounded-full w-[4.75rem] h-[4.75rem] object-cover border-2 border-white"
              src={avatar}
              alt="Profile Avatar"
            />
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-end gap-2">
            <button className="p-1 px-2 border border-gray-300 rounded-md font-bold text-gray-700 hover:bg-gray-100 flex items-center justify-center gap-1">
              <img src={link} className="w-5 h-5 text-blue-500" />
              Copy link
            </button>
            <button className="p-1 px-2 border border-gray-300 rounded-md font-bold text-gray-700 hover:bg-gray-100">
              View profile
            </button>
          </div>
          <div className="py-4">
            <p className="text-xl font-bold text-gray-800">Test Name 1</p>
            <p className="text-gray-500">test1@gmail.com</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-[1px] bg-gray-200"></div>
            <div className="">
              <div className="font-bold leading-none text-gray-800">Name</div>
              <div className="flex gap-3 py-2">
                <input
                  className="border border-gray-300 w-1/2 rounded-md pl-3 py-1 font-bold text-gray-700"
                  type="text"
                  value={"Test"}
                />
                <input
                  className="border border-gray-300 w-1/2 rounded-md pl-3 py-1 font-bold text-gray-700"
                  type="text"
                  value={"Name 1"}
                />
              </div>
            </div>
            <div className="h-[1px] bg-gray-200"></div>
            <div className="">
              <div className="font-bold leading-none text-gray-800">
                Email Address
              </div>
              <div className="relative flex gap-3 py-2">
                <input
                  className="border border-gray-300 w-full rounded-md pl-9 py-1 font-bold text-gray-700"
                  type="text"
                  value={"test1@gmail.com"}
                />
                <img
                  className="absolute top-1/2 -translate-y-1/2 left-2 w-6 h-6 text-blue-500"
                  src={mail}
                  alt=""
                />
              </div>
            </div>
            <div className="h-[1px] bg-gray-200"></div>
            <div className="">
              <div className="font-bold leading-none text-gray-800">Bio</div>
              <div className="flex gap-3 py-2">
                <textarea className="border border-gray-300 w-full rounded-md min-h-14 text-gray-700"></textarea>
              </div>
            </div>
            <div className="h-[1px] bg-gray-200"></div>
            <div className="">
              <div className="font-bold leading-none text-gray-800">
                Profile photo
              </div>
              <div className="flex justify-center items-center gap-2 py-1">
                <img
                  className="rounded-full w-16 h-16 object-cover"
                  src={avatar}
                  alt="Profile Avatar"
                />
                <button className="p-1 px-2 border border-gray-300 rounded-md font-bold text-gray-700 hover:bg-gray-100">
                  Change image
                </button>
              </div>
            </div>
            <div className="h-[1px] bg-gray-200"></div>
          </div>
          <div className="flex justify-end gap-2 mt-2">
            <button
              className="py-2 px-3 border border-gray-300 rounded-md font-bold text-gray-700 hover:bg-gray-100"
              onClick={() => setIsShowSettingModal(false)}
            >
              Cancel
            </button>
            <button className="py-2 px-3 border border-blue-500 bg-blue-500 text-white rounded-md font-bold hover:bg-blue-600">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
