import HotelPageLayout from "@/components/HotelPageLayout";
import { jewelHimalayanHeights } from "@/data/hotels";

export default function HotelGangtokPage() {
  return (
    <HotelPageLayout
      hotel={jewelHimalayanHeights}
      propertyId="jewel-himalayan-heights"
    />
  );
}
