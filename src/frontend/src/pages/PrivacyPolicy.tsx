import { usePolicy } from "@/hooks/useContent";
import { motion } from "motion/react";

export default function PrivacyPolicyPage() {
  const { data: policy, isLoading } = usePolicy("privacy");

  if (isLoading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const lastUpdated = policy?.lastUpdated
    ? new Date(Number(policy.lastUpdated) * 1000).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <div>
      <section className="py-16 bg-[#0B2B1B]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-4"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#FDFBF7] mb-4">
              {policy?.title ?? "Privacy Policy"}
            </h1>
            <div className="w-20 h-1 bg-[#c9a96e] mx-auto rounded-full mb-4" />
            {lastUpdated && (
              <p className="text-sm text-[#FDFBF7]/70">
                Last updated: {lastUpdated}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="prose prose-lg max-w-none text-[#0B2B1B]"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: admin-managed rich text
            dangerouslySetInnerHTML={{
              __html:
                policy?.body ??
                "<p>Our privacy policy will be updated soon. Please check back later.</p>",
            }}
          />
        </div>
      </section>
    </div>
  );
}
