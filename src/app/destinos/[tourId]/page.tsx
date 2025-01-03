import Tours from "@/components/Tours";
import { api } from "@/services/api";

async function getTour(tourId: string) {
  try {
    const response = await api.get(`/tours/${tourId}`)

    return response.data.tour
  } catch (err) {
    return null
  }
}

async function listImages(tourId: string) {
  try {
    const response = await api.get(`/images/${tourId}`)
    return response.data
  } catch (err) {
    return []
  }
}

async function listTourItems(tourId: string) {
  try {
    const response = await api.get(`/tours/${tourId}/items`)
    return response.data
  } catch (err) {
    return []
  }
}

export default async function TourOptions({params }: { params: Promise<{ tourId: string }> }) {
  const { tourId } = await params;
  const images = await listImages(tourId)
  const tourItems = await listTourItems(tourId)
  const tourGroup = await getTour(tourId)

  return(
    <Tours
      images={images}
      tourItems={tourItems}
      tourGroup={tourGroup}
    />
  )
}
