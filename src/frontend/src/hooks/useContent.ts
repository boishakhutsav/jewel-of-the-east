import { createActor } from "@/backend";
import { useAuth } from "@/hooks/useAuth";
import { useBackendActor } from "@/hooks/useBackendActor";
import type { PropertyGalleryImage } from "@/types";
import type {
  AboutUsContent,
  GalleryImage,
  HeroSlide,
  PolicyContent,
  Property,
  RoomType,
  SiteSettings,
  Testimonial,
} from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useSiteSettings() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<SiteSettings>({
    queryKey: ["siteSettings"],
    queryFn: async () => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.getSiteSettings();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUpdateSiteSettings() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  const { email, password } = useAuth();
  return useMutation({
    mutationFn: async (settings: SiteSettings) => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.setSiteSettings(settings, email ?? "", password ?? "");
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["siteSettings"] }),
  });
}

export function useHeroSlides() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<HeroSlide[]>({
    queryKey: ["heroSlides"],
    queryFn: async () => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.getHeroSlides();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddHeroSlide() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  const { email, password } = useAuth();
  return useMutation({
    mutationFn: async (slide: HeroSlide) => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.addHeroSlide(slide, email ?? "", password ?? "");
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["heroSlides"] }),
  });
}

export function useUpdateHeroSlide() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  const { email, password } = useAuth();
  return useMutation({
    mutationFn: async (slide: HeroSlide) => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.updateHeroSlide(slide, email ?? "", password ?? "");
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["heroSlides"] }),
  });
}

export function useRemoveHeroSlide() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  const { email, password } = useAuth();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.removeHeroSlide(id, email ?? "", password ?? "");
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["heroSlides"] }),
  });
}

export function useGalleryImages() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<GalleryImage[]>({
    queryKey: ["galleryImages"],
    queryFn: async () => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.getGalleryImages();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddGalleryImage() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  const { email, password } = useAuth();
  return useMutation({
    mutationFn: async (image: GalleryImage) => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.addGalleryImage(image, email ?? "", password ?? "");
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["galleryImages"] }),
  });
}

export function useRemoveGalleryImage() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  const { email, password } = useAuth();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.removeGalleryImage(id, email ?? "", password ?? "");
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["galleryImages"] }),
  });
}

export function usePropertyGalleryImages(propertyId: string) {
  const { actor, isFetching } = useBackendActor();
  return useQuery<PropertyGalleryImage[]>({
    queryKey: ["propertyGalleryImages", propertyId],
    queryFn: async () => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.getPropertyGalleryImages(propertyId);
    },
    enabled: !!actor && !isFetching && !!propertyId,
  });
}

export function useAddPropertyGalleryImage() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  const { email, password } = useAuth();
  return useMutation({
    mutationFn: async (image: PropertyGalleryImage) => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.addPropertyGalleryImage(image, email ?? "", password ?? "");
    },
    onSuccess: (_data, variables) => {
      qc.invalidateQueries({
        queryKey: ["propertyGalleryImages", variables.propertyId],
      });
    },
  });
}

export function useRemovePropertyGalleryImage() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  const { email, password } = useAuth();
  return useMutation({
    mutationFn: async ({ id }: { id: bigint; propertyId: string }) => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.removePropertyGalleryImage(id, email ?? "", password ?? "");
    },
    onSuccess: (_data, variables) => {
      qc.invalidateQueries({
        queryKey: ["propertyGalleryImages", variables.propertyId],
      });
    },
  });
}

export function useProperties() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<Property[]>({
    queryKey: ["properties"],
    queryFn: async () => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.getProperties();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddProperty() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  const { email, password } = useAuth();
  return useMutation({
    mutationFn: async (property: Property) => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.addProperty(property, email ?? "", password ?? "");
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["properties"] }),
  });
}

export function useUpdateProperty() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  const { email, password } = useAuth();
  return useMutation({
    mutationFn: async (property: Property) => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.updateProperty(property, email ?? "", password ?? "");
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["properties"] }),
  });
}

export function useRoomTypes() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<RoomType[]>({
    queryKey: ["roomTypes"],
    queryFn: async () => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.getRoomTypes();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useRoomTypesByProperty(propertyId: bigint) {
  const { actor, isFetching } = useBackendActor();
  return useQuery<RoomType[]>({
    queryKey: ["roomTypes", propertyId],
    queryFn: async () => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.getRoomTypesByProperty(propertyId);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddRoomType() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  const { email, password } = useAuth();
  return useMutation({
    mutationFn: async (room: RoomType) => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.addRoomType(room, email ?? "", password ?? "");
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["roomTypes"] }),
  });
}

export function useUpdateRoomType() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  const { email, password } = useAuth();
  return useMutation({
    mutationFn: async (room: RoomType) => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.updateRoomType(room, email ?? "", password ?? "");
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["roomTypes"] }),
  });
}

export function useRemoveRoomType() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  const { email, password } = useAuth();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.removeRoomType(id, email ?? "", password ?? "");
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["roomTypes"] }),
  });
}

export function useTestimonials() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: async () => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.getTestimonials();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAllTestimonials() {
  const { actor, isFetching } = useBackendActor();
  const { email, password } = useAuth();
  return useQuery<Testimonial[]>({
    queryKey: ["allTestimonials"],
    queryFn: async () => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.getAllTestimonials(email ?? "", password ?? "");
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddTestimonial() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  const { email, password } = useAuth();
  return useMutation({
    mutationFn: async (testimonial: Testimonial) => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.addTestimonial(testimonial, email ?? "", password ?? "");
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["testimonials"] });
      qc.invalidateQueries({ queryKey: ["allTestimonials"] });
    },
  });
}

export function useUpdateTestimonial() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  const { email, password } = useAuth();
  return useMutation({
    mutationFn: async (testimonial: Testimonial) => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.updateTestimonial(testimonial, email ?? "", password ?? "");
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["testimonials"] });
      qc.invalidateQueries({ queryKey: ["allTestimonials"] });
    },
  });
}

export function useRemoveTestimonial() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  const { email, password } = useAuth();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.removeTestimonial(id, email ?? "", password ?? "");
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["testimonials"] });
      qc.invalidateQueries({ queryKey: ["allTestimonials"] });
    },
  });
}

export function usePolicies() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<PolicyContent[]>({
    queryKey: ["policies"],
    queryFn: async () => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.getPolicies();
    },
    enabled: !!actor && !isFetching,
  });
}

export function usePolicy(slug: string) {
  const { actor, isFetching } = useBackendActor();
  return useQuery<PolicyContent | null>({
    queryKey: ["policy", slug],
    queryFn: async () => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.getPolicyBySlug(slug);
    },
    enabled: !!actor && !isFetching && !!slug,
  });
}

export function useUpdatePolicy() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  const { email, password } = useAuth();
  return useMutation({
    mutationFn: async (policy: PolicyContent) => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.setPolicy(policy, email ?? "", password ?? "");
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["policies"] });
      qc.invalidateQueries({ queryKey: ["policy"] });
    },
  });
}

export function useAboutUs() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<AboutUsContent>({
    queryKey: ["aboutUs"],
    queryFn: async () => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.getAboutUs();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUpdateAboutUs() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  const { email, password } = useAuth();
  return useMutation({
    mutationFn: async (content: AboutUsContent) => {
      if (!actor)
        throw new Error(
          "Actor not ready - canister ID may be missing. Check VITE_CANISTER_ID, CANISTER_ID, or CANISTER_ID_BACKEND environment variables.",
        );
      return actor.setAboutUs(content, email ?? "", password ?? "");
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["aboutUs"] }),
  });
}
