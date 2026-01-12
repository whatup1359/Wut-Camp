import { Skeleton } from "../ui/skeleton";

const LoadingCard = () => {
  return (
    <>
      
        <SkeletonHero />
        <SkeletonCardHome />
      
    </>
  );
};

export const SkeletonCardHome = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 m-8">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
  )
}

export const SkeletonCard = () => {
  return (
    <div>
      <Skeleton className="h-[300px] rounded-md mb-2" />
      <Skeleton className="h-4 w-3/4 rounded-md mb-2" />
      <Skeleton className="h-4 w-2/4 rounded-md mb-2" />
      <Skeleton className="h-4 w-1/4 rounded-md" />
    </div>
  );
};

export const SkeletonHero = () => {
  return (
    <div>
      <Skeleton className="h-[300px] md:h-[400px] lg:h-[700px] w-full rounded-md mb-2" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-7 py-6">
        <Skeleton className="w-full h-24 px-16 rounded-lg" />
        <Skeleton className="w-full h-24 px-16 rounded-lg" />
        <Skeleton className="w-full h-24 px-16 rounded-lg" />
        <Skeleton className="w-full h-24 px-16 rounded-lg" />
        <Skeleton className="w-full h-24 px-16 rounded-lg" />
        <Skeleton className="w-full h-24 px-16 rounded-lg" />
        <Skeleton className="w-full h-24 px-16 rounded-lg" />
      </div>
    </div>

  );
};


export default LoadingCard;
