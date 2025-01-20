import Tours from "@/components/Tours";
import { api } from "@/services/api";

async function getTour(slugTour: string) {
  try {
    const response = await api.get(`/${slugTour}`)
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

export default async function TourOptions({params }: { params: Promise<{ slugTour: string }> }) {
  const { slugTour } = await params;
  const tourGroup = await getTour(slugTour)
  const images = await listImages(tourGroup.id)
  const tourItems = await listTourItems(tourGroup.id)

  return(
    <Tours
      images={images}
      tourItems={tourItems}
      tourGroup={tourGroup}
    />
  )
}
