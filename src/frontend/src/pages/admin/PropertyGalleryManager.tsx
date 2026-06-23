import { ExternalBlob } from "@/backend";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useAddPropertyGalleryImage,
  usePropertyGalleryImages,
  useRemovePropertyGalleryImage,
} from "@/hooks/useContent";
import { useImagePreview, useImageUpload } from "@/hooks/useImages";
import { ImageIcon, Plus, Trash2, Upload } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

const PROPERTIES = [
  { id: "jewel-himalayan-heights", name: "Jewel Himalayan Heights — Gangtok" },
  { id: "jewel-kongchen-retreat", name: "Jewel Kongchen Retreat — Lachung" },
];

const MAX_IMAGES = 12;

export default function PropertyGalleryManager() {
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>(
    PROPERTIES[0].id,
  );

  const { data: images = [], isLoading } =
    usePropertyGalleryImages(selectedPropertyId);
  const addImage = useAddPropertyGalleryImage();
  const removeImage = useRemovePropertyGalleryImage();
  const { upload, isUploading, progress } = useImageUpload();
  const { preview, generatePreview, clearPreview } = useImagePreview();
  const [caption, setCaption] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    await generatePreview(file);
    setError(null);
  };

  const handleAdd = async () => {
    setError(null);

    if (images.length >= MAX_IMAGES) {
      setError(`Maximum ${MAX_IMAGES} images allowed per property.`);
      return;
    }

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
        propertyId: selectedPropertyId,
        caption: caption || undefined,
        image: blob,
      });

      setCaption("");
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
    await removeImage.mutateAsync({ id, propertyId: selectedPropertyId });
  };

  const selectedPropertyName =
    PROPERTIES.find((p) => p.id === selectedPropertyId)?.name ??
    selectedPropertyId;

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground">
            Property Photo Gallery
          </h2>
          <p className="text-muted-foreground">
            Manage gallery photos for each hotel property
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Select
            value={selectedPropertyId}
            onValueChange={setSelectedPropertyId}
          >
            <SelectTrigger
              className="w-[260px]"
              data-ocid="admin.property_gallery.property_select"
            >
              <SelectValue placeholder="Select a property" />
            </SelectTrigger>
            <SelectContent>
              {PROPERTIES.map((p) => (
                <SelectItem key={p.id} value={p.id}>
                  {p.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button
                disabled={images.length >= MAX_IMAGES}
                data-ocid="admin.property_gallery.add_button"
              >
                <Plus className="size-4 mr-2" />
                Add Image
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Photo — {selectedPropertyName}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="property-gallery-image">Image</Label>
                  <Input
                    id="property-gallery-image"
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    data-ocid="admin.property_gallery.image_input"
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
                  <Label htmlFor="property-gallery-caption">
                    Caption (optional)
                  </Label>
                  <Input
                    id="property-gallery-caption"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Enter image caption"
                    data-ocid="admin.property_gallery.caption_input"
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
                {error && <p className="text-sm text-destructive">{error}</p>}
                <Button
                  onClick={handleAdd}
                  disabled={isUploading || !preview}
                  className="w-full"
                  data-ocid="admin.property_gallery.save_button"
                >
                  <Upload className="size-4 mr-2" />
                  Add Image
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="mb-4 flex items-center gap-2">
        <span className="text-sm text-muted-foreground">
          {selectedPropertyName}
        </span>
        <span className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground">
          {images.length} / {MAX_IMAGES} photos
        </span>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : images.length === 0 ? (
        <div className="text-center py-12 bg-muted/30 rounded-xl">
          <ImageIcon className="size-12 text-muted-foreground/30 mx-auto mb-3" />
          <p className="text-muted-foreground">
            No gallery images for this property yet
          </p>
          <p className="text-sm text-muted-foreground">
            Add up to {MAX_IMAGES} photos to showcase this hotel
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
                    data-ocid={`admin.property_gallery.delete.${i + 1}`}
                    onClick={() => handleRemove(img.id)}
                    className="absolute top-2 right-2 p-2 rounded-full bg-destructive/90 text-destructive-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Delete image"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
                <CardContent className="p-3">
                  <p className="text-sm font-medium truncate">
                    {img.caption ?? `Photo ${i + 1}`}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
