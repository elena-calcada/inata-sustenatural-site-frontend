import Tours from "@/components/Tours";

async function getTour(slugTour: string) {
  try {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/${slugTour}`)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${slugTour}`, { cache: 'no-store' })
    const data = await response.json()
    return data.tour
  } catch (err) {
    return null
  }
}

async function listImages(slugTour: string) {
  try {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/${slugTour}`)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${slugTour}`, { cache: 'no-store' })
    const data = await response.json()
    return data
  } catch (err) {
    return []
  }
}

async function listTourItems(slugTour: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tours/${slugTour}/items`, { cache: 'no-store' })
    const data = await response.json()
    return data
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
