import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAboutUs, useUpdateAboutUs } from "@/hooks/useContent";
import type { AboutUsContent } from "@/types";
import { FileText, Save } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function AboutUsManager() {
  const { data: aboutUs, isLoading } = useAboutUs();
  const updateAboutUs = useUpdateAboutUs();
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState<AboutUsContent>({
    title: "",
    content: "",
    mission: undefined,
    vision: undefined,
    teamImage: undefined,
  });

  const startEditing = () => {
    if (aboutUs) {
      setForm({
        title: aboutUs.title,
        content: aboutUs.content,
        mission: aboutUs.mission,
        vision: aboutUs.vision,
        teamImage: aboutUs.teamImage,
      });
    }
    setIsEditing(true);
  };

  const handleSave = async () => {
    await updateAboutUs.mutateAsync({
      title: form.title,
      content: form.content,
      mission: form.mission,
      vision: form.vision,
      teamImage: form.teamImage,
    });
    setIsEditing(false);
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
            About Us
          </h2>
          <p className="text-muted-foreground">
            Edit the About Us page content
          </p>
        </div>
        {!isEditing && (
          <Button onClick={startEditing} data-ocid="admin.about.edit_button">
            <FileText className="size-4 mr-2" />
            Edit Content
          </Button>
        )}
      </div>

      {isEditing ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <Label htmlFor="about-title">Page Title</Label>
                <Input
                  id="about-title"
                  value={form.title}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, title: e.target.value }))
                  }
                  placeholder="e.g., About Jewel of the East"
                  data-ocid="admin.about.title_input"
                />
              </div>
              <div>
                <Label htmlFor="about-content">
                  Main Content (HTML supported)
                </Label>
                <Textarea
                  id="about-content"
                  value={form.content}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, content: e.target.value }))
                  }
                  rows={10}
                  placeholder="Enter the about us content..."
                  data-ocid="admin.about.content_input"
                />
              </div>
              <div>
                <Label htmlFor="about-mission">Mission (optional)</Label>
                <Textarea
                  id="about-mission"
                  value={form.mission ?? ""}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, mission: e.target.value }))
                  }
                  rows={3}
                  placeholder="Our mission..."
                  data-ocid="admin.about.mission_input"
                />
              </div>
              <div>
                <Label htmlFor="about-vision">Vision (optional)</Label>
                <Textarea
                  id="about-vision"
                  value={form.vision ?? ""}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, vision: e.target.value }))
                  }
                  rows={3}
                  placeholder="Our vision..."
                  data-ocid="admin.about.vision_input"
                />
              </div>
              <div className="flex gap-2 justify-end">
                <Button
                  variant="outline"
                  onClick={() => setIsEditing(false)}
                  data-ocid="admin.about.cancel_button"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSave}
                  disabled={updateAboutUs.isPending}
                  data-ocid="admin.about.save_button"
                >
                  <Save className="size-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ) : aboutUs ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card>
            <CardContent className="p-6 space-y-6">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">
                  Title
                </h3>
                <p className="font-display text-xl font-semibold text-foreground">
                  {aboutUs.title}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">
                  Content
                </h3>
                <div
                  className="prose max-w-none text-muted-foreground"
                  // biome-ignore lint/security/noDangerouslySetInnerHtml: admin-managed rich text
                  dangerouslySetInnerHTML={{ __html: aboutUs.content }}
                />
              </div>
              {aboutUs.mission && (
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">
                    Mission
                  </h3>
                  <p className="text-muted-foreground">{aboutUs.mission}</p>
                </div>
              )}
              {aboutUs.vision && (
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">
                    Vision
                  </h3>
                  <p className="text-muted-foreground">{aboutUs.vision}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ) : (
        <div
          className="text-center py-12 bg-muted/30 rounded-xl"
          data-ocid="admin.about.empty_state"
        >
          <FileText className="size-12 text-muted-foreground/30 mx-auto mb-4" />
          <p className="text-muted-foreground">No About Us content yet</p>
          <p className="text-sm text-muted-foreground">
            Click Edit Content to add your about page
          </p>
        </div>
      )}
    </div>
  );
}
