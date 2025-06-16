import { fetchFavorites } from "@/actions/actions";
import LandmarkList from "@/components/home/LandmarkList";

const FavoritesPage = async () => {
  const favorites = await fetchFavorites();


  return <LandmarkList landmarks={favorites} />
};
export default FavoritesPage;
