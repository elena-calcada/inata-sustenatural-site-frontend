import Tours from "@/components/Tours";
import { api } from "@/services/api";

export const dynamic = "force-dynamic";

async function listImages(tourId: string) {
  try {
    const response = await api.get(`/images/${tourId}`)
    return response.data
  } catch (err) {
    return []
  }
}

export default async function TourOptions({params }: { params: Promise<{ tourId: string }> }) {
  const { tourId } = await params;
  const images = await listImages(tourId)

  return(
    <main>
      <Tours
        images={images}
      />
    </main>
  )
}
