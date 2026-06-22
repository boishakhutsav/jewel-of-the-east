import { useGalleryImages } from "@/hooks/useContent";
import { MapPin } from "lucide-react";
import { motion } from "motion/react";

export default function GalleryPage() {
  const { data: images = [], isLoading } = useGalleryImages();

  if (isLoading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <section className="py-16 bg-[#0B2B1B]">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-[#FDFBF7] mb-4"
          >
            Photo Gallery
          </motion.h1>
          <p className="text-[#FDFBF7]/70 max-w-2xl mx-auto">
            Explore the beauty of our properties and the Himalayan landscapes
            that surround them
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          {images.length === 0 ? (
            <div className="text-center py-16">
              <MapPin className="size-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">
                No gallery images available yet
              </p>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {images.map((img, i) => (
                <motion.div
                  key={img.id.toString()}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.1 }}
                  className="break-inside-avoid"
                >
                  <div className="rounded-xl overflow-hidden shadow-card group">
                    <img
                      src={img.image.getDirectURL()}
                      alt={img.caption ?? "Gallery image"}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {img.caption && (
                      <div className="p-3 bg-[#0B2B1B]">
                        <p className="text-sm text-[#FDFBF7]/70">
                          {img.caption}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
