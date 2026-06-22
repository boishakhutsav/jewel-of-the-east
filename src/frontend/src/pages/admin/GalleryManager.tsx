import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  useAddGalleryImage,
  useGalleryImages,
  useRemoveGalleryImage,
} from "@/hooks/useContent";
import { useImagePreview, useImageUpload } from "@/hooks/useImages";
import { ImageIcon, Plus, Trash2, Upload } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

export default function GalleryManager() {
  const { data: images = [], isLoading } = useGalleryImages();
  const addImage = useAddGalleryImage();
  const removeImage = useRemoveGalleryImage();
  const { upload, isUploading, progress } = useImageUpload();
  const { preview, generatePreview, clearPreview } = useImagePreview();
  const [caption, setCaption] = useState("");
  const [category, setCategory] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    await generatePreview(file);
  };

  const [_error, setError] = useState<string | null>(null);

  const handleAdd = async () => {
    setError(null);
    const file = fileInputRef.current?.files?.[0];
    if (!file) {
      setError("Please select an image file.");
      return;
    }

    const blob = await upload(file);
    if (!blob) {
      setError("Image upload failed. Please try again.");
      return;
    }

    try {
      await addImage.mutateAsync({
        id: BigInt(0),
        order: BigInt(images.length),
        caption: caption || undefined,
        category: category || undefined,
        image: blob,
      });

      setCaption("");
      setCategory("");
      clearPreview();
      if (fileInputRef.current) fileInputRef.current.value = "";
      setDialogOpen(false);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to save gallery image.",
      );
    }
  };

  const handleRemove = async (id: bigint) => {
    if (!confirm("Are you sure you want to remove this image?")) return;
    await removeImage.mutateAsync(id);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground">
            Photo Gallery
          </h2>
          <p className="text-muted-foreground">
            Manage images displayed in the gallery section
          </p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button data-ocid="admin.gallery.add_button">
              <Plus className="size-4 mr-2" />
              Add Image
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Gallery Image</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="gallery-image">Image</Label>
                <Input
                  id="gallery-image"
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  data-ocid="admin.gallery.image_input"
                />
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="mt-2 rounded-lg max-h-40 object-cover"
                  />
                )}
              </div>
              <div>
                <Label htmlFor="gallery-caption">Caption (optional)</Label>
                <Input
                  id="gallery-caption"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Enter image caption"
                  data-ocid="admin.gallery.caption_input"
                />
              </div>
              <div>
                <Label htmlFor="gallery-category">Category (optional)</Label>
                <Input
                  id="gallery-category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="e.g., Gangtok, Lachung, Rooms"
                  data-ocid="admin.gallery.category_input"
                />
              </div>
              {isUploading && (
                <div className="space-y-2">
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Uploading... {progress}%
                  </p>
                </div>
              )}
              <Button
                onClick={handleAdd}
                disabled={isUploading || !preview}
                className="w-full"
                data-ocid="admin.gallery.save_button"
              >
                <Upload className="size-4 mr-2" />
                Add Image
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {images.length === 0 ? (
        <div className="text-center py-12 bg-muted/30 rounded-xl">
          <ImageIcon className="size-12 text-muted-foreground/30 mx-auto mb-3" />
          <p className="text-muted-foreground">No gallery images yet</p>
          <p className="text-sm text-muted-foreground">
            Add images to showcase your properties
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.id.toString()}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="overflow-hidden group">
                <div className="relative aspect-[4/3]">
                  <img
                    src={img.image.getDirectURL()}
                    alt={img.caption ?? "Gallery image"}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    data-ocid={`admin.gallery.delete.${i + 1}`}
                    onClick={() => handleRemove(img.id)}
                    className="absolute top-2 right-2 p-2 rounded-full bg-destructive/90 text-destructive-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Delete image"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
                <CardContent className="p-3">
                  <p className="text-sm font-medium truncate">
                    {img.caption ?? "Untitled"}
                  </p>
                  {img.category && (
                    <p className="text-xs text-muted-foreground">
                      {img.category}
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
