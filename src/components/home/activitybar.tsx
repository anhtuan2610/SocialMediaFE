import activityImage from "../../assets/home-icon/activity-image1.png";
import addFriend from "../../assets/home-icon/add-friend1.png";
import newImage1 from "../../assets/home-icon/new-image1.jpg";
import newImage2 from "../../assets/home-icon/new-image2.jpg";
import newImage3 from "../../assets/home-icon/new-image3.jpg";
import newImage4 from "../../assets/home-icon/new-image4.jpg";
import newImage5 from "../../assets/home-icon/new-image5.jpg";
import newImage6 from "../../assets/home-icon/new-image6.jpg";
import newImage7 from "../../assets/home-icon/new-image7.jpg";
import newImage8 from "../../assets/home-icon/new-image8.jpg";

export default function Activitybar() {
  return (
    <div className="bg-white rounded-2xl py-6 px-3">
      <div className="flex items-end justify-between px-2">
        <div className="text-[#323746] text-2xl font-bold">Activity</div>
        <div className="text-[#9FA6B7] font-semibold">See all</div>
      </div>
      <div className="px-4">
        <div className="font-bold text-lg py-3">Stories about you</div>
        <div className="flex gap-3 items-center">
          <img className="w-14 h-14 rounded-full" src={activityImage} alt="" />
          <div className="font-semibold">
            <div>Mentions</div>
            <div className="font-medium text-[#ACB2C1]">
              4 stories mention you
            </div>
          </div>
        </div>
        <div className="font-bold text-lg pt-3 pb-2">New</div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img className="w-14 h-14 rounded-full" src={newImage1} alt="" />
              <div>
                <p>
                  <span className="font-bold">Danial Jerry </span>started
                </p>
                <p>Following you.</p>
              </div>
            </div>
            <div className="w-14 h-14 rounded-full flex justify-center items-center bg-[#F2EBFF]">
              <img src={addFriend} alt="" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img className="w-14 h-14 rounded-full object-cover" src={newImage2} alt="" />
              <div>
                <p>
                  <span className="font-bold">Danial Jerry </span>started
                </p>
                <p>Following you.</p>
              </div>
            </div>
            <div className="w-14 h-12 flex justify-center items-center">
              <img
                className="w-full h-full rounded-lg object-cover"
                src={newImage6}
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img className="w-14 h-14 rounded-full" src={newImage3} alt="" />
              <div>
                <p>
                  <span className="font-bold">Danial Jerry </span>started
                </p>
                <p>Following you.</p>
              </div>
            </div>
            <div className="w-14 h-12 flex justify-center items-center">
              <img
                className="w-full h-full rounded-lg object-cover"
                src={newImage7}
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img className="w-14 h-14 rounded-full object-cover" src={newImage4} alt="" />
              <div>
                <p>
                  <span className="font-bold">Danial Jerry </span>started
                </p>
                <p>Following you.</p>
              </div>
            </div>
            <div className="w-14 h-14 rounded-full flex justify-center items-center bg-[#F2EBFF]">
              <img src={addFriend} alt="" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img className="w-14 h-14 rounded-full object-cover" src={newImage5} alt="" />
              <div>
                <p>
                  <span className="font-bold">Danial Jerry </span>started
                </p>
                <p>Following you.</p>
              </div>
            </div>
            <div className="w-14 h-12 flex justify-center items-center">
              <img
                className="w-full h-full rounded-lg object-cover"
                src={newImage8}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
