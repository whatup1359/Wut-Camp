import Image from "next/image";
import { LandmarkCardProps } from "@/utils/types";
import { categories } from "@/utils/categories";
import FavoriteToggleButton from "./FavoriteToggleButton";

const LandmarkCard = ({ landmark }: { landmark: LandmarkCardProps }) => {
  const { name, id, image, province, category, description, price } = landmark;
  const categoryObj = categories.find((c) => c.label === category);
  const CategoryIcon = categoryObj?.icon;

  return (
    <article className="group relative rounded-md dark:bg-rose-300/10 hover:scale-110 transition-all duration-500 ease-in-out">
      <div className="relative h-[300px] rounded-md">
        <Image
          src={image}
          sizes="(max-width:768px) 100vw, 50vw"
          alt={name}
          fill
          className="object-cover rounded-md"
        />
      </div>

      <div className="flex flex-col justify-between mt-1 p-2">
        <div className="flex justify-between">
          <h3 className="dark:text-gray-200 font-bold">{name}</h3>
          <span className="flex gap-x-1 mr-1">
            <p className="text-rose-500">★</p>
            <p className="dark:text-gray-200">4.8</p>
          </span>
        </div>
        <div className="bg-rose-500 w-[50px] h-[1px] rounded-md group-hover:w-full transition-all duration-500 mb-1 mt-1" />
        <div className="dark:text-gray-200 text-sm flex flex-col gap-y-2 py-2">
          {description.substring(0, 40)}
          <p className="dark:text-gray-200 text-sm">{province}</p>
        </div>

        <div className="flex justify-between py-2">
          <span className="flex gap-2 cursor-pointer bg-rose-500/20 text-rose-500 rounded-md px-2 py-1 text-sm">
            {CategoryIcon && <CategoryIcon className="w-4 h-4" />}
            {category}
          </span>
          <span className="dark:text-gray-200 mr-1 bg-rose-500/20 rounded-md px-2 py-1 text-sm">
            {price.toLocaleString()} <span className="text-rose-500">฿</span>
          </span>
        </div>
      </div>

      <div className="absolute top-5 right-5">
        <FavoriteToggleButton landmarkId={id} />
      </div>
    </article>
  );
};
export default LandmarkCard;
