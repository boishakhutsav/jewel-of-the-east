import type { ExternalBlob } from "@/backend";
import { Badge } from "@/components/ui/badge";
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
import { Textarea } from "@/components/ui/textarea";
import { useBackendActor } from "@/hooks/useBackendActor";
import {
  useAddProperty,
  useProperties,
  useUpdateProperty,
} from "@/hooks/useContent";
import { useImagePreview, useImageUpload } from "@/hooks/useImages";
import type { Property, PropertyInput } from "@/types";
import { Edit, MapPin, Plus, Save, Upload, X } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { toast } from "sonner";

function PropertyEditor({
  property,
  onSave,
  onCancel,
}: {
  property: Property;
  onSave: (p: Property) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState(property.name);
  const [description, setDescription] = useState(property.description);
  const [bookingUrl, setBookingUrl] = useState(property.bookingUrl ?? "");
  const [amenities, setAmenities] = useState(property.amenities.join(", "));
  const [highlights, setHighlights] = useState(property.highlights.join(", "));

  const handleSave = () => {
    onSave({
      ...property,
      name,
      description,
      bookingUrl: bookingUrl || undefined,
      amenities: amenities
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      highlights: highlights
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    });
  };

  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <div>
          <Label htmlFor={`prop-name-${property.id}`}>Property Name</Label>
          <Input
            id={`prop-name-${property.id}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            data-ocid="admin.property.name_input"
          />
        </div>
        <div>
          <Label htmlFor={`prop-desc-${property.id}`}>
            Description (HTML supported)
          </Label>
          <Textarea
            id={`prop-desc-${property.id}`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            data-ocid="admin.property.description_input"
          />
        </div>
        <div>
          <Label htmlFor={`prop-booking-${property.id}`}>Booking URL</Label>
          <Input
            id={`prop-booking-${property.id}`}
            value={bookingUrl}
            onChange={(e) => setBookingUrl(e.target.value)}
            placeholder="https://..."
            data-ocid="admin.property.booking_url_input"
          />
        </div>
        <div>
          <Label htmlFor={`prop-amenities-${property.id}`}>
            Amenities (comma-separated)
          </Label>
          <Input
            id={`prop-amenities-${property.id}`}
            value={amenities}
            onChange={(e) => setAmenities(e.target.value)}
            placeholder="WiFi, Parking, Restaurant..."
            data-ocid="admin.property.amenities_input"
          />
        </div>
        <div>
          <Label htmlFor={`prop-highlights-${property.id}`}>
            Highlights (comma-separated)
          </Label>
          <Input
            id={`prop-highlights-${property.id}`}
            value={highlights}
            onChange={(e) => setHighlights(e.target.value)}
            placeholder="All Rooms Heated, Elevator..."
            data-ocid="admin.property.highlights_input"
          />
        </div>
        <div className="flex gap-2 justify-end">
          <Button
            variant="outline"
            onClick={onCancel}
            data-ocid="admin.property.cancel_button"
          >
            <X className="size-4 mr-2" />
            Cancel
          </Button>
          <Button onClick={handleSave} data-ocid="admin.property.save_button">
            <Save className="size-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function PropertyAddDialog({
  onSave,
}: {
  onSave: (p: PropertyInput) => void;
}) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const [bookingUrl, setBookingUrl] = useState("");
  const [amenities, setAmenities] = useState("");
  const [highlights, setHighlights] = useState("");
  const { upload, isUploading, progress } = useImageUpload();
  const { preview, generatePreview, clearPreview } = useImagePreview();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    await generatePreview(file);
  };

  const handleSave = async () => {
    let heroImage: ExternalBlob | undefined;
    const file = fileInputRef.current?.files?.[0];
    if (file) {
      const blob = await upload(file);
      if (blob) heroImage = blob;
    }

    onSave({
      name,
      description,
      location,
      bookingUrl: bookingUrl || undefined,
      amenities: amenities
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      highlights: highlights
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      heroImage,
    });

    clearPreview();
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="add-prop-name">Property Name</Label>
        <Input
          id="add-prop-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Jewel Himalayan Heights"
          data-ocid="admin.property.add.name_input"
        />
      </div>
      <div>
        <Label htmlFor="add-prop-location">Location</Label>
        <Input
          id="add-prop-location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="e.g., Gangtok, Sikkim"
          data-ocid="admin.property.add.location_input"
        />
      </div>
      <div>
        <Label htmlFor="add-prop-desc">Description (HTML supported)</Label>
        <Textarea
          id="add-prop-desc"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          placeholder="Enter property description..."
          data-ocid="admin.property.add.description_input"
        />
      </div>

      <div>
        <Label htmlFor="add-prop-booking">Booking URL</Label>
        <Input
          id="add-prop-booking"
          value={bookingUrl}
          onChange={(e) => setBookingUrl(e.target.value)}
          placeholder="https://..."
          data-ocid="admin.property.add.booking_url_input"
        />
      </div>
      <div>
        <Label htmlFor="add-prop-amenities">Amenities (comma-separated)</Label>
        <Input
          id="add-prop-amenities"
          value={amenities}
          onChange={(e) => setAmenities(e.target.value)}
          placeholder="WiFi, Parking, Restaurant..."
          data-ocid="admin.property.add.amenities_input"
        />
      </div>
      <div>
        <Label htmlFor="add-prop-highlights">
          Highlights (comma-separated)
        </Label>
        <Input
          id="add-prop-highlights"
          value={highlights}
          onChange={(e) => setHighlights(e.target.value)}
          placeholder="All Rooms Heated, Elevator..."
          data-ocid="admin.property.add.highlights_input"
        />
      </div>
      <div>
        <Label htmlFor="add-prop-image">Hero Image</Label>
        <Input
          id="add-prop-image"
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          data-ocid="admin.property.add.image_input"
        />
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-2 rounded-lg max-h-32 object-cover"
          />
        )}
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
      <div className="flex gap-2 justify-end">
        <Button
          variant="outline"
          onClick={handleSave}
          disabled={isUploading || !name || !location}
          data-ocid="admin.property.add.save_button"
        >
          <Upload className="size-4 mr-2" />
          Add Property
        </Button>
      </div>
    </div>
  );
}

export default function PropertiesManager() {
  const { data: properties = [], isLoading } = useProperties();
  const updateProperty = useUpdateProperty();
  const addProperty = useAddProperty();
  const { actor } = useBackendActor();
  const [editingId, setEditingId] = useState<bigint | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [addError, setAddError] = useState<string | null>(null);

  const handleSave = async (property: Property) => {
    await updateProperty.mutateAsync(property);
    setEditingId(null);
  };

  const handleAdd = async (propertyInput: PropertyInput) => {
    setAddError(null);
    try {
      if (!actor) {
        throw new Error(
          "Backend actor is not available. Please refresh and try again.",
        );
      }
      const nextId = await actor.getNextId();
      const property: Property = {
        id: nextId,
        name: propertyInput.name,
        description: propertyInput.description,
        location: propertyInput.location,
        amenities: propertyInput.amenities,
        highlights: propertyInput.highlights,
        heroImage: propertyInput.heroImage,
        bookingUrl: propertyInput.bookingUrl,
      };
      await addProperty.mutateAsync(property);
      setDialogOpen(false);
      toast.success("Property added successfully");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to add property";
      setAddError(message);
      toast.error(message);
    }
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
            Properties
          </h2>
          <p className="text-muted-foreground">
            Edit property descriptions, amenities, and booking links
          </p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button data-ocid="admin.property.add_button">
              <Plus className="size-4 mr-2" />
              Add Property
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add Property</DialogTitle>
            </DialogHeader>
            <PropertyAddDialog onSave={handleAdd} />
            {addError && (
              <div className="mt-4 p-3 rounded-md bg-destructive/10 text-destructive text-sm">
                {addError}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-6">
        {properties.map((property, i) => (
          <motion.div
            key={property.id.toString()}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            {editingId === property.id ? (
              <PropertyEditor
                property={property}
                onSave={handleSave}
                onCancel={() => setEditingId(null)}
              />
            ) : (
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      {property.heroImage ? (
                        <img
                          src={property.heroImage.getDirectURL()}
                          alt={property.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center">
                          <MapPin className="size-6 text-muted-foreground/40" />
                        </div>
                      )}
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground">
                          {property.name}
                        </h3>
                        {property.bookingUrl && (
                          <a
                            href={property.bookingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline"
                          >
                            Booking Link
                          </a>
                        )}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setEditingId(property.id)}
                      data-ocid={`admin.property.${i + 1}.edit_button`}
                    >
                      <Edit className="size-4 mr-2" />
                      Edit
                    </Button>
                  </div>

                  <div
                    className="prose max-w-none text-muted-foreground text-sm mb-4"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: admin-managed rich text
                    dangerouslySetInnerHTML={{ __html: property.description }}
                  />

                  {property.highlights.length > 0 && (
                    <div className="mb-3">
                      <p className="text-sm font-medium text-foreground mb-2">
                        Highlights
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {property.highlights.map((h) => (
                          <Badge key={`highlight-${h}`} variant="secondary">
                            {h}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {property.amenities.length > 0 && (
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">
                        Amenities
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {property.amenities.map((a) => (
                          <Badge key={`amenity-${a}`} variant="outline">
                            {a}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
