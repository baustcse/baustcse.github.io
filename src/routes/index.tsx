import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";
import { Achievements } from "@/components/site/Achievements";
import { AcademicProgram } from "@/components/site/AcademicProgram";
import { BackToTop } from "@/components/site/BackToTop";
import { Contact } from "@/components/site/Contact";
import { Facilities } from "@/components/site/Facilities";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import { RecentActivity } from "@/components/site/RecentActivity";
import { Stats } from "@/components/site/Stats";
import { TechStack } from "@/components/site/TechStack";
import { VisionMission } from "@/components/site/VisionMission";
import { useScrollReveal } from "@/hooks/use-animations";

const TITLE = "BAUST CSE — Department of Computer Science & Engineering, Saidpur";
const DESCRIPTION =
  "Official portfolio of the Department of Computer Science & Engineering, BAUST Saidpur — IEB-BAETE accredited, Washington Accord recognized, established 2015.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Department of Computer Science and Engineering, BAUST",
          url: "https://baustcse.github.io",
          email: "hdcse@baust.edu.bd",
          telephone: "+88-01769675588",
          foundingDate: "2015-02-15",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Saidpur Cantonment",
            addressLocality: "Saidpur",
            addressCountry: "BD",
          },
          sameAs: [
            "https://www.facebook.com/cse.baust.official/",
            "https://baust.edu.bd/cse",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <AcademicProgram />
        <Facilities />
        <Stats />
        <Achievements />
        <TechStack />
        <RecentActivity />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
