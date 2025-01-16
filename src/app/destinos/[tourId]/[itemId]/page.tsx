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

async function getTourItem(tourId: string, itemId: string) {
  try {
    const response = await api.get(`/tours/items/detail?tourId=${tourId}&itemId=${itemId}`)

    return response.data
  } catch (err) {
    return null
  }
}

async function getTour(tourId: string) {
  try {
    const response = await api.get(`/tours/${tourId}`)

    return response.data.tour
  } catch (err) {
    return null
  }
}

export default async function TourDetailPage({params }: { params: Promise<{ tourId: string, itemId: string }> }) {
  const { tourId, itemId } = await params;

  const images = await listImages(tourId)
  const item = await getTourItem(tourId, itemId)
  const tourGroup = await getTour(tourId)

  return(
    <TourDetail
      images={images}
      tourItem={item}
      tourGroup={tourGroup}
    />
  )
}
