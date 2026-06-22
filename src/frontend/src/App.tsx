import Layout from "@/components/Layout";
import { useAuth } from "@/hooks/useAuth";
import { Suspense, lazy } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const HomePage = lazy(() => import("@/pages/Home"));
const AboutPage = lazy(() => import("@/pages/About"));
const HotelGangtokPage = lazy(() => import("@/pages/HotelGangtok"));
const HotelLachungPage = lazy(() => import("@/pages/HotelLachung"));
const ContactPage = lazy(() => import("@/pages/Contact"));
const AdminLayout = lazy(() => import("@/pages/admin/AdminLayout"));
const AdminDashboard = lazy(() => import("@/pages/admin/Dashboard"));
const AdminHero = lazy(() => import("@/pages/admin/HeroCarousel"));
const AdminGallery = lazy(() => import("@/pages/admin/GalleryManager"));
const AdminProperties = lazy(() => import("@/pages/admin/Properties"));
const AdminRoomTypes = lazy(() => import("@/pages/admin/RoomTypes"));
const AdminTestimonials = lazy(() => import("@/pages/admin/Testimonials"));
const AdminAbout = lazy(() => import("@/pages/admin/AboutUs"));
const AdminSettings = lazy(() => import("@/pages/admin/Settings"));
const PrivacyPolicyPage = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsConditionsPage = lazy(() => import("@/pages/TermsConditions"));
const BookingPolicyPage = lazy(() => import("@/pages/BookingPolicy"));
const AdminPolicies = lazy(() => import("@/pages/admin/Policies"));

function AdminGuard({ children }: { children: React.ReactNode }) {
  const { isAdmin, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Checking access...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/admin" replace />;
  }

  return <>{children}</>;
}

function PageLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<PageLoader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<PageLoader />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "/hotels/jewel-himalayan-heights",
        element: (
          <Suspense fallback={<PageLoader />}>
            <HotelGangtokPage />
          </Suspense>
        ),
      },
      {
        path: "/hotels/jewel-kongchen-retreat",
        element: (
          <Suspense fallback={<PageLoader />}>
            <HotelLachungPage />
          </Suspense>
        ),
      },
      {
        path: "/gangtok",
        element: <Navigate to="/hotels/jewel-himalayan-heights" replace />,
      },
      {
        path: "/lachung",
        element: <Navigate to="/hotels/jewel-kongchen-retreat" replace />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<PageLoader />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: "/privacy",
        element: (
          <Suspense fallback={<PageLoader />}>
            <PrivacyPolicyPage />
          </Suspense>
        ),
      },
      {
        path: "/terms",
        element: (
          <Suspense fallback={<PageLoader />}>
            <TermsConditionsPage />
          </Suspense>
        ),
      },
      {
        path: "/booking-policy",
        element: (
          <Suspense fallback={<PageLoader />}>
            <BookingPolicyPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <Suspense fallback={<PageLoader />}>
        <AdminLayout />
      </Suspense>
    ),
    children: [
      { index: true, element: <AdminDashboard /> },
      {
        path: "hero",
        element: (
          <AdminGuard>
            <AdminHero />
          </AdminGuard>
        ),
      },
      {
        path: "gallery",
        element: (
          <AdminGuard>
            <AdminGallery />
          </AdminGuard>
        ),
      },
      {
        path: "properties",
        element: (
          <AdminGuard>
            <AdminProperties />
          </AdminGuard>
        ),
      },
      {
        path: "rooms",
        element: (
          <AdminGuard>
            <AdminRoomTypes />
          </AdminGuard>
        ),
      },
      {
        path: "testimonials",
        element: (
          <AdminGuard>
            <AdminTestimonials />
          </AdminGuard>
        ),
      },
      {
        path: "about",
        element: (
          <AdminGuard>
            <AdminAbout />
          </AdminGuard>
        ),
      },
      {
        path: "settings",
        element: (
          <AdminGuard>
            <AdminSettings />
          </AdminGuard>
        ),
      },
      {
        path: "policies",
        element: (
          <AdminGuard>
            <AdminPolicies />
          </AdminGuard>
        ),
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
