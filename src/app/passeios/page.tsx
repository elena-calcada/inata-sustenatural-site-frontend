import WhitherHomeSection from "@/components/WhitherHomeSection";
import WhitherListSection from "@/components/WhitherListSection";
import { TourGroup } from "@/entities/TourGroup";

async function getToursGroup(): Promise<TourGroup[] | []> {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tours`, { cache: 'no-store' })
    const data = await response.json()
    return data.tours
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
