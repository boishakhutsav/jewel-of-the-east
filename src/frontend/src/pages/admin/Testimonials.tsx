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
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  useAddTestimonial,
  useRemoveTestimonial,
  useTestimonials,
  useUpdateTestimonial,
} from "@/hooks/useContent";
import type { Testimonial } from "@/types";
import { Edit, Plus, Quote, Save, Star, Trash2, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

function TestimonialEditor({
  testimonial,
  onSave,
  onCancel,
}: {
  testimonial?: Testimonial;
  onSave: (t: Testimonial) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState(testimonial?.name ?? "");
  const [text, setText] = useState(testimonial?.text ?? "");
  const [location, setLocation] = useState(testimonial?.location ?? "");
  const [rating, setRating] = useState(Number(testimonial?.rating ?? 5));
  const [isActive, setIsActive] = useState(testimonial?.isActive ?? true);

  const handleSave = () => {
    onSave({
      id: testimonial?.id ?? BigInt(Date.now()),
      name,
      text,
      location: location || undefined,
      rating: BigInt(rating),
      isActive,
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="t-name">Guest Name</Label>
        <Input
          id="t-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Rahul Sharma"
          data-ocid="admin.testimonial.name_input"
        />
      </div>
      <div>
        <Label htmlFor="t-location">Location (optional)</Label>
        <Input
          id="t-location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="e.g., Mumbai, India"
          data-ocid="admin.testimonial.location_input"
        />
      </div>
      <div>
        <Label htmlFor="t-rating">Rating (1-5)</Label>
        <Input
          id="t-rating"
          type="number"
          min={1}
          max={5}
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          data-ocid="admin.testimonial.rating_input"
        />
      </div>
      <div>
        <Label htmlFor="t-text">Review Text</Label>
        <Textarea
          id="t-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          placeholder="Share what the guest said..."
          data-ocid="admin.testimonial.text_input"
        />
      </div>
      <div className="flex items-center gap-3">
        <Switch
          id="t-active"
          checked={isActive}
          onCheckedChange={setIsActive}
          data-ocid="admin.testimonial.active_switch"
        />
        <Label htmlFor="t-active" className="cursor-pointer">
          Active (shown on homepage)
        </Label>
      </div>
      <div className="flex gap-2 justify-end">
        <Button
          variant="outline"
          onClick={onCancel}
          data-ocid="admin.testimonial.cancel_button"
        >
          <X className="size-4 mr-2" />
          Cancel
        </Button>
        <Button onClick={handleSave} data-ocid="admin.testimonial.save_button">
          <Save className="size-4 mr-2" />
          Save
        </Button>
      </div>
    </div>
  );
}

export default function TestimonialsManager() {
  const { data: testimonials = [], isLoading } = useTestimonials();
  const addTestimonial = useAddTestimonial();
  const updateTestimonial = useUpdateTestimonial();
  const removeTestimonial = useRemoveTestimonial();
  const [editing, setEditing] = useState<Testimonial | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSave = async (t: Testimonial) => {
    if (editing) {
      await updateTestimonial.mutateAsync(t);
    } else {
      await addTestimonial.mutateAsync(t);
    }
    setEditing(null);
    setDialogOpen(false);
  };

  const handleRemove = async (id: bigint) => {
    if (!confirm("Are you sure you want to remove this testimonial?")) return;
    await removeTestimonial.mutateAsync(id);
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
            Testimonials
          </h2>
          <p className="text-muted-foreground">
            Manage guest reviews and testimonials
          </p>
        </div>
        <Dialog
          open={dialogOpen}
          onOpenChange={(open) => {
            setDialogOpen(open);
            if (!open) setEditing(null);
          }}
        >
          <DialogTrigger asChild>
            <Button
              onClick={() => setEditing(null)}
              data-ocid="admin.testimonial.add_button"
            >
              <Plus className="size-4 mr-2" />
              Add Testimonial
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editing ? "Edit Testimonial" : "Add Testimonial"}
              </DialogTitle>
            </DialogHeader>
            <TestimonialEditor
              testimonial={editing ?? undefined}
              onSave={handleSave}
              onCancel={() => {
                setDialogOpen(false);
                setEditing(null);
              }}
            />
          </DialogContent>
        </Dialog>
      </div>

      {testimonials.length === 0 ? (
        <div
          className="text-center py-12 bg-muted/30 rounded-xl"
          data-ocid="admin.testimonial.empty_state"
        >
          <Quote className="size-12 text-muted-foreground/30 mx-auto mb-4" />
          <p className="text-muted-foreground">No testimonials yet</p>
          <p className="text-sm text-muted-foreground">
            Add guest reviews to showcase on the homepage
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id.toString()}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="h-full">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-display font-bold text-sm">
                          {t.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">
                          {t.name}
                        </p>
                        {t.location && (
                          <p className="text-xs text-muted-foreground">
                            {t.location}
                          </p>
                        )}
                      </div>
                    </div>
                    {!t.isActive && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                        Inactive
                      </span>
                    )}
                  </div>

                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: 5 }).map((_, starIdx) => (
                      <Star
                        // biome-ignore lint/suspicious/noArrayIndexKey: static 5-star rating display
                        key={`star-${starIdx}`}
                        className={`size-3.5 ${
                          starIdx < Number(t.rating)
                            ? "text-warning fill-warning"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-4 mb-4">
                    "{t.text}"
                  </p>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => {
                        setEditing(t);
                        setDialogOpen(true);
                      }}
                      data-ocid={`admin.testimonial.${i + 1}.edit_button`}
                    >
                      <Edit className="size-3.5 mr-1.5" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-destructive hover:bg-destructive/10"
                      onClick={() => handleRemove(t.id)}
                      data-ocid={`admin.testimonial.${i + 1}.delete_button`}
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
