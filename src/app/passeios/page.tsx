import WhitherHomeSection from "@/components/WhitherHomeSection";
import WhitherListSection from "@/components/WhitherListSection";
import { TourGroup } from "@/entities/TourGroup";
import { api } from "@/services/api";

async function getToursGroup(): Promise<TourGroup[] | []> {
  try{
    const response = await api.get("/tours")
    return response.data.tours
  } catch (err) {
    return []
  }
}

export default async function Whither() {
  const listWhither = await getToursGroup()

  return (
    <main>
      <WhitherHomeSection/>
      <WhitherListSection
        listWhither={listWhither}
      />
    </main>
  )
}
