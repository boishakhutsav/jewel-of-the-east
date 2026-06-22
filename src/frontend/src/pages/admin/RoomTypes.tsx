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
import { Textarea } from "@/components/ui/textarea";
import {
  useAddRoomType,
  useProperties,
  useRemoveRoomType,
  useRoomTypes,
  useUpdateRoomType,
} from "@/hooks/useContent";
import { useImagePreview, useImageUpload } from "@/hooks/useImages";
import type { RoomType } from "@/types";
import { Edit, MapPin, Plus, Save, Trash2, Upload, X } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

function RoomEditor({
  room,
  properties,
  onSave,
  onCancel,
}: {
  room?: RoomType;
  properties: { id: bigint; name: string }[];
  onSave: (room: RoomType) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState(room?.name ?? "");
  const [description, setDescription] = useState(room?.description ?? "");
  const [price, setPrice] = useState(room?.pricePerNight ?? "");
  const [capacity, setCapacity] = useState(room?.capacity ?? "");
  const [propertyId, setPropertyId] = useState(
    room?.propertyId.toString() ?? "",
  );
  const [amenities, setAmenities] = useState(room?.amenities.join(", ") ?? "");
  const { upload, isUploading, progress } = useImageUpload();
  const { preview, generatePreview, clearPreview } = useImagePreview();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    await generatePreview(file);
  };

  const handleSave = async () => {
    let thumbnail = room?.thumbnail;
    const file = fileInputRef.current?.files?.[0];
    if (file) {
      const blob = await upload(file);
      if (blob) thumbnail = blob;
    }

    onSave({
      id: room?.id ?? BigInt(Date.now()),
      name,
      description,
      pricePerNight: price || undefined,
      capacity: capacity || undefined,
      propertyId: BigInt(propertyId),
      amenities: amenities
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      thumbnail,
    });

    clearPreview();
  };

  return (
    <div className="space-y-4">
      <div>
        <Label>Property</Label>
        <Select value={propertyId} onValueChange={setPropertyId}>
          <SelectTrigger data-ocid="admin.room.property_select">
            <SelectValue placeholder="Select property" />
          </SelectTrigger>
          <SelectContent>
            {properties.map((p) => (
              <SelectItem key={p.id.toString()} value={p.id.toString()}>
                {p.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label>Room Name</Label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          data-ocid="admin.room.name_input"
        />
      </div>
      <div>
        <Label>Description</Label>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          data-ocid="admin.room.description_input"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Price Per Night</Label>
          <Input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="e.g., ₹3,500"
            data-ocid="admin.room.price_input"
          />
        </div>
        <div>
          <Label>Capacity</Label>
          <Input
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            placeholder="e.g., 2 Adults + 1 Child"
            data-ocid="admin.room.capacity_input"
          />
        </div>
      </div>
      <div>
        <Label>Amenities (comma-separated)</Label>
        <Input
          value={amenities}
          onChange={(e) => setAmenities(e.target.value)}
          placeholder="TV, Heater, WiFi..."
          data-ocid="admin.room.amenities_input"
        />
      </div>
      <div>
        <Label>Thumbnail</Label>
        <Input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          data-ocid="admin.room.image_input"
        />
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-2 rounded-lg max-h-32 object-cover"
          />
        )}
        {room?.thumbnail && !preview && (
          <img
            src={room.thumbnail.getDirectURL()}
            alt={room.name}
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
          onClick={onCancel}
          data-ocid="admin.room.cancel_button"
        >
          <X className="size-4 mr-2" />
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          disabled={isUploading}
          data-ocid="admin.room.save_button"
        >
          <Save className="size-4 mr-2" />
          Save
        </Button>
      </div>
    </div>
  );
}

export default function RoomTypesManager() {
  const { data: rooms = [], isLoading: roomsLoading } = useRoomTypes();
  const { data: properties = [], isLoading: propsLoading } = useProperties();
  const addRoom = useAddRoomType();
  const updateRoom = useUpdateRoomType();
  const removeRoom = useRemoveRoomType();
  const [editingRoom, setEditingRoom] = useState<RoomType | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSave = async (room: RoomType) => {
    if (editingRoom) {
      await updateRoom.mutateAsync(room);
    } else {
      await addRoom.mutateAsync(room);
    }
    setEditingRoom(null);
    setDialogOpen(false);
  };

  const handleRemove = async (id: bigint) => {
    if (!confirm("Are you sure you want to remove this room type?")) return;
    await removeRoom.mutateAsync(id);
  };

  if (roomsLoading || propsLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const propertyMap = new Map(properties.map((p) => [p.id.toString(), p.name]));

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground">
            Room Types
          </h2>
          <p className="text-muted-foreground">
            Manage room types, pricing, and descriptions
          </p>
        </div>
        <Dialog
          open={dialogOpen}
          onOpenChange={(open) => {
            setDialogOpen(open);
            if (!open) setEditingRoom(null);
          }}
        >
          <DialogTrigger asChild>
            <Button
              onClick={() => setEditingRoom(null)}
              data-ocid="admin.room.add_button"
            >
              <Plus className="size-4 mr-2" />
              Add Room
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingRoom ? "Edit Room" : "Add Room"}
              </DialogTitle>
            </DialogHeader>
            <RoomEditor
              room={editingRoom ?? undefined}
              properties={properties}
              onSave={handleSave}
              onCancel={() => {
                setDialogOpen(false);
                setEditingRoom(null);
              }}
            />
          </DialogContent>
        </Dialog>
      </div>

      {rooms.length === 0 ? (
        <div className="text-center py-12 bg-muted/30 rounded-xl">
          <p className="text-muted-foreground">No room types yet</p>
          <p className="text-sm text-muted-foreground">
            Add room types to display on property pages
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rooms.map((room, i) => (
            <motion.div
              key={room.id.toString()}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="overflow-hidden group">
                <div className="relative h-40">
                  {room.thumbnail ? (
                    <img
                      src={room.thumbnail.getDirectURL()}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <MapPin className="size-8 text-muted-foreground/30" />
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-display font-semibold text-foreground">
                        {room.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {propertyMap.get(room.propertyId.toString()) ??
                          "Unknown"}
                      </p>
                    </div>
                    {room.pricePerNight && (
                      <span className="text-sm font-semibold text-primary">
                        {room.pricePerNight}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {room.description}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => {
                        setEditingRoom(room);
                        setDialogOpen(true);
                      }}
                      data-ocid={`admin.room.${i + 1}.edit_button`}
                    >
                      <Edit className="size-3.5 mr-1.5" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-destructive hover:bg-destructive/10"
                      onClick={() => handleRemove(room.id)}
                      data-ocid={`admin.room.${i + 1}.delete_button`}
                      aria-label="Delete room type"
                    >
                      <Trash2 className="size-3.5" />
                    </Button>
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
