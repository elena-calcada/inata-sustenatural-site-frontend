import TourDetail from "@/components/TourDetail";
import { api } from "@/services/api";

async function listImages(tourId: string) {
  try {
    const response = await api.get(`/images/${tourId}`)
    return response.data
  } catch (err) {
    return []
  }
}

async function getTourItem(slugTour: string, slugItem: string) {
  try {
    const response = await api.get(`/tours/items/detail-by-slug?slugTour=${slugTour}&slugItem=${slugItem}`)

    return response.data
  } catch (err) {
    return null
  }
}

async function getTour(slugTour: string) {
  try {
    const response = await api.get(`/${slugTour}`)
    return response.data.tour
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
