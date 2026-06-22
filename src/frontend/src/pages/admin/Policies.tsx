import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePolicies, useUpdatePolicy } from "@/hooks/useContent";
import type { PolicyContent } from "@/types";
import { FileText, Save, Shield } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const POLICY_SLUGS = [
  { slug: "privacy", label: "Privacy Policy", defaultTitle: "Privacy Policy" },
  {
    slug: "terms",
    label: "Terms & Conditions",
    defaultTitle: "Terms & Conditions",
  },
  {
    slug: "booking-policy",
    label: "Booking & Refund Policy",
    defaultTitle: "Booking & Refund Policy",
  },
];

function PolicyEditor({
  policy,
  onSave,
  isSaving,
}: {
  policy: PolicyContent;
  onSave: (p: PolicyContent) => void;
  isSaving: boolean;
}) {
  const [title, setTitle] = useState(policy.title);
  const [body, setBody] = useState(policy.body);

  useEffect(() => {
    setTitle(policy.title);
    setBody(policy.body);
  }, [policy.title, policy.body]);

  const handleSave = () => {
    onSave({
      ...policy,
      title,
      body,
      lastUpdated: BigInt(Math.floor(Date.now() / 1000)),
    });
  };

  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <div>
          <Label htmlFor={`policy-title-${policy.slug}`}>Title</Label>
          <Input
            id={`policy-title-${policy.slug}`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            data-ocid={`admin.policy.${policy.slug}.title_input`}
          />
        </div>
        <div>
          <Label htmlFor={`policy-body-${policy.slug}`}>
            Content (HTML supported)
          </Label>
          <textarea
            id={`policy-body-${policy.slug}`}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={12}
            className="w-full mt-1.5 rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring min-h-[200px]"
            data-ocid={`admin.policy.${policy.slug}.body_input`}
          />
        </div>
        <div className="flex gap-2 justify-end">
          <Button
            onClick={handleSave}
            disabled={isSaving}
            data-ocid={`admin.policy.${policy.slug}.save_button`}
          >
            <Save className="size-4 mr-2" />
            {isSaving ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function PoliciesManager() {
  const { data: policies = [], isLoading } = usePolicies();
  const updatePolicy = useUpdatePolicy();
  const [editingSlug, setEditingSlug] = useState<string | null>(null);

  const getPolicy = (slug: string): PolicyContent => {
    const found = policies.find((p) => p.slug === slug);
    if (found) return found;
    const config = POLICY_SLUGS.find((p) => p.slug === slug)!;
    return {
      id: BigInt(0),
      slug,
      title: config.defaultTitle,
      body: "",
      lastUpdated: BigInt(0),
    };
  };

  const handleSave = async (policy: PolicyContent) => {
    await updatePolicy.mutateAsync(policy);
    setEditingSlug(null);
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
            Policies
          </h2>
          <p className="text-muted-foreground">
            Manage Privacy Policy, Terms & Conditions, and Booking & Refund
            Policy
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {POLICY_SLUGS.map((config, index) => {
          const policy = getPolicy(config.slug);
          const isEditing = editingSlug === config.slug;
          const lastUpdated = policy.lastUpdated
            ? new Date(Number(policy.lastUpdated) * 1000).toLocaleDateString(
                "en-IN",
                { year: "numeric", month: "short", day: "numeric" },
              )
            : "Not set";

          return (
            <motion.div
              key={config.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {isEditing ? (
                <PolicyEditor
                  policy={policy}
                  onSave={handleSave}
                  isSaving={updatePolicy.isPending}
                />
              ) : (
                <Card className="hover:shadow-card transition-smooth">
                  <CardContent className="p-5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Shield className="size-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display font-semibold text-foreground truncate">
                          {policy.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Last updated: {lastUpdated}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setEditingSlug(config.slug)}
                      data-ocid={`admin.policy.${config.slug}.edit_button`}
                    >
                      <FileText className="size-4 mr-2" />
                      Edit
                    </Button>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
