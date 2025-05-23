import CountAnimation from "../common/animate/count-animation";

export default function ProfileStats() {
  return (
    <div className="bg-white w-fit h-fit rounded-2xl flex-col justify-center items-center px-4 shadow-lg">
      <div className="text-center px-2 py-9">
        <p className="text-2xl font-extrabold">
          <div className="flex justify-center">
            <CountAnimation number={10} />K
          </div>
        </p>
        <p className="text-[#969696] font-medium">Likes</p>
      </div>
      <div className="h-[1px] bg-[#979797] w-full"></div>
      <div className="text-center px-2 py-9">
        <p className="text-2xl font-extrabold">
          <CountAnimation number={528} />
        </p>
        <p className="text-[#969696] font-medium">Following</p>
      </div>
      <div className="h-[1px] bg-[#979797] w-full"></div>
      <div className="text-center px-2 py-9">
        <p className="text-2xl font-extrabold">
          <CountAnimation number={895} />
        </p>
        <p className="text-[#969696] font-medium">Followers</p>
      </div>
    </div>
  );
}
