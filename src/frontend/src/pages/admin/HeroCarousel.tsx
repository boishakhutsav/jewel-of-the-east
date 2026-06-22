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
import { useBackendActor } from "@/hooks/useBackendActor";
import {
  useAddHeroSlide,
  useHeroSlides,
  useRemoveHeroSlide,
  useUpdateHeroSlide,
} from "@/hooks/useContent";
import { useImagePreview, useImageUpload } from "@/hooks/useImages";
import {
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Plus,
  Trash2,
  Upload,
} from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

export default function HeroCarouselManager() {
  const { actor, isFetching, error: actorError } = useBackendActor();
  const { data: slides = [], isLoading } = useHeroSlides();
  const addSlide = useAddHeroSlide();
  const updateSlide = useUpdateHeroSlide();
  const removeSlide = useRemoveHeroSlide();
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
  };

  const handleAdd = async () => {
    const file = fileInputRef.current?.files?.[0];
    if (!file) return;

    const blob = await upload(file);
    if (!blob) return;

    try {
      await addSlide.mutateAsync({
        id: BigInt(0),
        order: BigInt(slides.length),
        caption: caption || undefined,
        image: blob,
      });

      setCaption("");
      clearPreview();
      if (fileInputRef.current) fileInputRef.current.value = "";
      setDialogOpen(false);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to save slide";
      setError(message);
    }
  };

  const handleMove = async (index: number, direction: "up" | "down") => {
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= slides.length) return;

    const updatedSlides = [...slides];
    const temp = updatedSlides[index];
    updatedSlides[index] = updatedSlides[newIndex];
    updatedSlides[newIndex] = temp;

    for (let i = 0; i < updatedSlides.length; i++) {
      await updateSlide.mutateAsync({
        ...updatedSlides[i],
        order: BigInt(i),
      });
    }
  };

  const handleRemove = async (id: bigint) => {
    if (!confirm("Are you sure you want to remove this slide?")) return;
    await removeSlide.mutateAsync(id);
  };

  if (isFetching) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (actorError || !actor) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground">
            Hero Carousel
          </h2>
          <p className="text-muted-foreground">
            Manage images that appear on the homepage hero section
          </p>
        </div>
        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-destructive">
            <AlertCircle className="size-5 shrink-0" />
            <h3 className="font-semibold">Backend Connection Error</h3>
          </div>
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              The admin dashboard cannot connect to the backend. This usually
              means the canister ID is missing.
            </p>
            {actorError && (
              <pre className="bg-background/50 rounded-lg p-3 text-xs overflow-auto whitespace-pre-wrap font-mono">
                {actorError}
              </pre>
            )}
            <div className="space-y-1">
              <p className="font-medium text-foreground">What to check:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Ensure{" "}
                  <code className="bg-muted px-1 rounded">
                    VITE_CANISTER_ID
                  </code>{" "}
                  is set in your{" "}
                  <code className="bg-muted px-1 rounded">.env</code> file
                </li>
                <li>
                  Run <code className="bg-muted px-1 rounded">dfx deploy</code>{" "}
                  to get the canister ID
                </li>
                <li>
                  Restart the dev server after updating environment variables
                </li>
                <li>
                  Check that the canister is running with{" "}
                  <code className="bg-muted px-1 rounded">
                    dfx canister status backend
                  </code>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
            Hero Carousel
          </h2>
          <p className="text-muted-foreground">
            Manage images that appear on the homepage hero section
          </p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button data-ocid="admin.hero.add_button">
              <Plus className="size-4 mr-2" />
              Add Slide
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Hero Slide</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="hero-image">Image</Label>
                <Input
                  id="hero-image"
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  data-ocid="admin.hero.image_input"
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
                <Label htmlFor="hero-caption">Caption (optional)</Label>
                <Input
                  id="hero-caption"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Enter slide caption"
                  data-ocid="admin.hero.caption_input"
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
              {error && (
                <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 p-3 rounded-md">
                  <AlertCircle className="size-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}
              <Button
                onClick={handleAdd}
                disabled={isUploading || !preview}
                className="w-full"
                data-ocid="admin.hero.save_button"
              >
                <Upload className="size-4 mr-2" />
                Add Slide
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {slides.length === 0 ? (
        <div className="text-center py-12 bg-muted/30 rounded-xl">
          <ImageIcon className="size-12 text-muted-foreground/30 mx-auto mb-4" />
          <p className="text-muted-foreground">No hero slides yet</p>
          <p className="text-sm text-muted-foreground">
            Add images to showcase on the homepage
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {slides
            .sort((a, b) => Number(a.order) - Number(b.order))
            .map((slide, index) => (
              <motion.div
                key={slide.id.toString()}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <img
                      src={slide.image.getDirectURL()}
                      alt={slide.caption ?? "Hero image"}
                      className="w-24 h-16 object-cover rounded-lg shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">
                        {slide.caption ?? "No caption"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Order: {Number(slide.order) + 1}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        data-ocid={`admin.hero.move_up.${index + 1}`}
                        onClick={() => handleMove(index, "up")}
                        disabled={index === 0}
                        className="p-2 rounded-md hover:bg-muted disabled:opacity-30 transition-smooth"
                        aria-label="Move up"
                      >
                        <ChevronUp className="size-4" />
                      </button>
                      <button
                        type="button"
                        data-ocid={`admin.hero.move_down.${index + 1}`}
                        onClick={() => handleMove(index, "down")}
                        disabled={index === slides.length - 1}
                        className="p-2 rounded-md hover:bg-muted disabled:opacity-30 transition-smooth"
                        aria-label="Move down"
                      >
                        <ChevronDown className="size-4" />
                      </button>
                      <button
                        type="button"
                        data-ocid={`admin.hero.delete.${index + 1}`}
                        onClick={() => handleRemove(slide.id)}
                        className="p-2 rounded-md hover:bg-destructive/10 text-destructive transition-smooth"
                        aria-label="Delete slide"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </div>
      )}
    </div>
  );
}

function ImageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>Image icon</title>
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}
