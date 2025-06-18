import { fetchLandmarks, fetchLandmarksHero } from "@/actions/actions";
import LandmarkList from "./LandmarkList";
import Hero from "../hero/Hero";
import { LandmarkCardProps } from "@/utils/types";
import CategoriesList from "./CategoriesList";
import EmptyList from "./EmptyList";

const LandmarkContainer = async ({
  search,
  category
}: {
  search?: string;
  category?: string;
}) => {
  const landmarks: LandmarkCardProps[] = await fetchLandmarks({
    search,
    category,
  });
  const landmarksHero: LandmarkCardProps[] = await fetchLandmarksHero();


  // if (landmarks.length === 0) {
  //   return <EmptyList />
  // }
  // console.log(landmarks)

  return (
    <div>
      <Hero landmarks={landmarksHero} />
      <CategoriesList search={search} category={category} />
      {
        landmarks.length === 0
        ? <EmptyList btnText="Clear Filter" />
        : <LandmarkList landmarks={landmarks} />
      }

    </div>
  );
};
export default LandmarkContainer;
