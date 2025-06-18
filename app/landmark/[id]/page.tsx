import { fetchLandmarkDetail } from "@/actions/actions";
import FavoriteToggleButton from "@/components/card/FavoriteToggleButton";
import Breadcrumbs from "@/components/landmark/Breadcrumbs";
import Description from "@/components/landmark/Description";
import ImageContainer from "@/components/landmark/ImageContainer";
import ShareButton from "@/components/landmark/ShareButton";
import { redirect } from "next/navigation";

const LandmarkDetail = async ({ params }: { params: Promise <{ id: string }> }) => {
  const { id } = await params;
  const landmark = await fetchLandmarkDetail({ id });
  if (!landmark) redirect("/");

  return (
    <section>
      <Breadcrumbs name={landmark.name} />
      <header className="mt-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">{landmark.name}</h1>
        <div className="flex gap-3 items-center">
          <span className="hover:bg-gray-200/50 dark:hover:bg-gray-100/10 p-1.5 rounded-md transition-all duration-200">
            <ShareButton landmarkId={landmark.id} name={landmark.name} />
          </span>
          <FavoriteToggleButton landmarkId={landmark.id} />
        </div>
      </header>
      {/* Image */}
      <ImageContainer mainImage={landmark.image} name={landmark.name} />
      {/* Detail */}
      <section>
        <div className="">
          <Description description={landmark.description} />
        </div>
      </section>
    </section>
  );
};
export default LandmarkDetail;
