import TourDetail from "@/components/TourDetail";

async function listImages(tourId: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/images/${tourId}`, { cache: 'no-store' })
    const data = await response.json()
    return data
  } catch (err) {
    return []
  }
}

async function getTourItem(slugTour: string, slugItem: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tours/items/detail-by-slug?slugTour=${slugTour}&slugItem=${slugItem}`, { cache: 'no-store' })
    const data = await response.json()
    return data
  } catch (err) {
    return null
  }
}

async function getTour(slugTour: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${slugTour}`, { cache: 'no-store' })
    const data = await response.json()
    return data.tour
  } catch (err) {
    return null
  }
}

export default async function TourDetailPage({params }: { params: Promise<{ slugTour: string, slugItem: string }> }) {
  const { slugTour, slugItem } = await params;

  const tourGroup = await getTour(slugTour)
  const item = await getTourItem(slugTour, slugItem)
  const images = await listImages(tourGroup.id)

  return(
    <TourDetail
      images={images}
      tourItem={item}
      tourGroup={tourGroup}
    />
  )
}
