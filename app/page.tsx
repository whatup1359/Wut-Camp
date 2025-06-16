import LandmarkContainer from "../components/home/LandmarkContainer"
import { Suspense } from "react"
import LoadingCard from "@/components/card/LoadingCard"

const page = () => {
  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainer />
      </Suspense>
    </section>
  )
}
export default page