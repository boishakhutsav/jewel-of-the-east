import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useSiteSettings, useUpdateSiteSettings } from "@/hooks/useContent";
import { useImagePreview, useImageUpload } from "@/hooks/useImages";
import type { SiteSettings, SocialLink } from "@/types";
import {
  Globe,
  Link2,
  Mail,
  MessageCircle,
  Phone,
  Save,
  Upload,
} from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

function SocialLinkEditor({
  links,
  onChange,
}: {
  links: SocialLink[];
  onChange: (links: SocialLink[]) => void;
}) {
  const [newPlatform, setNewPlatform] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const addLink = () => {
    if (!newPlatform || !newUrl) return;
    onChange([...links, { platform: newPlatform, url: newUrl }]);
    setNewPlatform("");
    setNewUrl("");
  };

  const removeLink = (index: number) => {
    onChange(links.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-3">
      {links.map((link, i) => (
        <div
          key={`social-link-${link.platform}-${i}`}
          className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg"
          data-ocid={`admin.settings.social_link.${i + 1}`}
        >
          <Globe className="size-4 text-muted-foreground shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground">
              {link.platform}
            </p>
            <p className="text-xs text-muted-foreground truncate">{link.url}</p>
          </div>
          <button
            type="button"
            onClick={() => removeLink(i)}
            className="p-1.5 rounded-md hover:bg-destructive/10 text-destructive transition-smooth"
            data-ocid={`admin.settings.social_link.${i + 1}.delete_button`}
            aria-label={`Remove ${link.platform}`}
          >
            <span className="sr-only">Remove</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Remove</title>
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      ))}
      <div className="flex gap-2">
        <Input
          placeholder="Platform (e.g., Facebook)"
          value={newPlatform}
          onChange={(e) => setNewPlatform(e.target.value)}
          className="flex-1"
          data-ocid="admin.settings.social_platform_input"
        />
        <Input
          placeholder="URL"
          value={newUrl}
          onChange={(e) => setNewUrl(e.target.value)}
          className="flex-[2]"
          data-ocid="admin.settings.social_url_input"
        />
        <Button
          type="button"
          size="sm"
          onClick={addLink}
          data-ocid="admin.settings.add_social_button"
        >
          Add
        </Button>
      </div>
    </div>
  );
}

export default function SettingsManager() {
  const { data: settings, isLoading } = useSiteSettings();
  const updateSettings = useUpdateSiteSettings();
  const { upload, isUploading, progress } = useImageUpload();
  const { preview, generatePreview, clearPreview } = useImagePreview();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<SiteSettings>({
    footerText: "",
    contactInfo: { email: "", phone: "", address: "" },
    socialLinks: [],
  });
  const [hasChanges, setHasChanges] = useState(false);

  const initForm = (s: SiteSettings) => {
    setForm({
      footerText: s.footerText,
      contactInfo: { ...s.contactInfo },
      socialLinks: [...s.socialLinks],
      bookingUrl: s.bookingUrl,
      logo: s.logo,
    });
    setHasChanges(false);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    await generatePreview(file);
    setHasChanges(true);
  };

  const handleSave = async () => {
    let logo = form.logo;
    const file = fileInputRef.current?.files?.[0];
    if (file) {
      const blob = await upload(file);
      if (blob) logo = blob;
    }

    await updateSettings.mutateAsync({
      ...form,
      logo,
    });

    clearPreview();
    if (fileInputRef.current) fileInputRef.current.value = "";
    setHasChanges(false);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (settings && !hasChanges && form.footerText === "") {
    initForm(settings);
  }

  const updateField = <K extends keyof SiteSettings>(
    key: K,
    value: SiteSettings[K],
  ) => {
    setForm((f) => ({ ...f, [key]: value }));
    setHasChanges(true);
  };

  const updateContact = (key: keyof typeof form.contactInfo, value: string) => {
    setForm((f) => ({
      ...f,
      contactInfo: { ...f.contactInfo, [key]: value },
    }));
    setHasChanges(true);
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="font-display text-2xl font-bold text-foreground">
          Site Settings
        </h2>
        <p className="text-muted-foreground">
          Manage logo, contact info, footer text, and social links
        </p>
      </div>

      <div className="space-y-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-display font-semibold text-foreground">
                Logo
              </h3>
              <div className="flex items-center gap-4">
                {preview ? (
                  <img
                    src={preview}
                    alt="Logo preview"
                    className="w-20 h-20 object-contain rounded-lg bg-muted"
                  />
                ) : form.logo ? (
                  <img
                    src={form.logo.getDirectURL()}
                    alt="Current logo"
                    className="w-20 h-20 object-contain rounded-lg bg-muted"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center">
                    <Upload className="size-6 text-muted-foreground/40" />
                  </div>
                )}
                <div className="flex-1">
                  <Input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    data-ocid="admin.settings.logo_input"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Recommended: PNG with transparent background, 200x200px
                  </p>
                </div>
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
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-display font-semibold text-foreground">
                Contact Information
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="contact-phone"
                    className="flex items-center gap-2"
                  >
                    <Phone className="size-4 text-muted-foreground" />
                    Phone
                  </Label>
                  <Input
                    id="contact-phone"
                    value={form.contactInfo.phone}
                    onChange={(e) => updateContact("phone", e.target.value)}
                    placeholder="+91 12345 67890"
                    data-ocid="admin.settings.phone_input"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="contact-whatsapp"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="size-4 text-muted-foreground" />
                    WhatsApp
                  </Label>
                  <Input
                    id="contact-whatsapp"
                    value={form.contactInfo.whatsapp ?? ""}
                    onChange={(e) => updateContact("whatsapp", e.target.value)}
                    placeholder="+91 12345 67890"
                    data-ocid="admin.settings.whatsapp_input"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label
                    htmlFor="contact-email"
                    className="flex items-center gap-2"
                  >
                    <Mail className="size-4 text-muted-foreground" />
                    Email
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={form.contactInfo.email}
                    onChange={(e) => updateContact("email", e.target.value)}
                    placeholder="hello@jeweloftheeast.com"
                    data-ocid="admin.settings.email_input"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="contact-address">Address</Label>
                  <Textarea
                    id="contact-address"
                    value={form.contactInfo.address}
                    onChange={(e) => updateContact("address", e.target.value)}
                    rows={2}
                    placeholder="Full address..."
                    data-ocid="admin.settings.address_input"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Booking URL */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-display font-semibold text-foreground">
                Booking Engine
              </h3>
              <div>
                <Label
                  htmlFor="booking-url"
                  className="flex items-center gap-2"
                >
                  <Link2 className="size-4 text-muted-foreground" />
                  External Booking URL
                </Label>
                <Input
                  id="booking-url"
                  value={form.bookingUrl ?? ""}
                  onChange={(e) =>
                    updateField("bookingUrl", e.target.value || undefined)
                  }
                  placeholder="https://booking.example.com"
                  data-ocid="admin.settings.booking_url_input"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Guests will be redirected to this URL for bookings
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-display font-semibold text-foreground">
                Footer
              </h3>
              <div>
                <Label htmlFor="footer-text">Footer Text</Label>
                <Textarea
                  id="footer-text"
                  value={form.footerText}
                  onChange={(e) => updateField("footerText", e.target.value)}
                  rows={2}
                  placeholder="© 2024 Jewel of the East Group. All rights reserved."
                  data-ocid="admin.settings.footer_text_input"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-display font-semibold text-foreground">
                Social Links
              </h3>
              <SocialLinkEditor
                links={form.socialLinks}
                onChange={(links) => updateField("socialLinks", links)}
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Save */}
        <div className="flex justify-end">
          <Button
            onClick={handleSave}
            disabled={updateSettings.isPending || (!hasChanges && !preview)}
            data-ocid="admin.settings.save_button"
          >
            <Save className="size-4 mr-2" />
            Save All Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
