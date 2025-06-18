import { LandmarkCardProps } from "@/utils/types";

const OtherInfo = ({ landmark }: { landmark: LandmarkCardProps }) => {
  return (
    <>
      <div className="text-white backdrop-blur-3xl p-1.5 rounded-xl">
        <p className="text-4xl font-bold md:my-3 leading-tight">{landmark.name}</p>
        <p className="text-lg border-l-4 border-rose-500 pl-4">{landmark.province}</p>
      </div>
    </>
  );
};

export default OtherInfo;
