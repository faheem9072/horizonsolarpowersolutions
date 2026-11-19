/**
 * Centralized Image Assets Configuration
 * All image paths, dimensions, and descriptive alt text are consolidated here.
 * To replace placeholders with client's real installation photos:
 * 1. Place the new photo in /public/images/ (e.g. installation-1.jpg, project-1.jpg)
 * 2. Update the alt text or title below if necessary.
 */

export const IMAGE_ASSETS = {
  brand: {
    emblem: {
      src: "/images/horizon-emblem-transparent.png",
      alt: "Horizon Solar Power Solutions 3D Green Solar Rooftop Emblem",
      width: 120,
      height: 120,
    },
    logoFull: {
      src: "/images/horizon-logo-transparent.png",
      alt: "Horizon Solar Power Solutions Full Logo with Tagline",
      width: 240,
      height: 240,
    },
  },

  hero: {
    src: "/images/hero-solar.jpg",
    alt: "High-efficiency rooftop solar photovoltaic array under clear Kerala sky",
    width: 1920,
    height: 1080,
  },

  about: {
    src: "/images/engineer-tablet.jpg",
    alt: "Solar engineer performing shadow-free rooftop assessment and yield analysis in Kannur",
    width: 800,
    height: 800,
  },

  // 1. Services Section Images (Each section has its own unique photo)
  services: {
    onGrid: {
      src: "/images/service-ongrid.jpg",
      alt: "On-Grid rooftop solar system connected to KSEB bi-directional net meter",
      width: 800,
      height: 600,
    },
    offGrid: {
      src: "/images/service-offgrid.jpg",
      alt: "Off-Grid solar power installation equipped with solar battery storage for 24/7 backup",
      width: 800,
      height: 600,
    },
    hybrid: {
      src: "/images/service-hybrid.jpg",
      alt: "Hybrid solar plant synchronizing KSEB net metering with lithium/tubular battery storage",
      width: 800,
      height: 600,
    },
  },

  // 2. Packages Section Images (Each package has its own distinct photo)
  // [PLACEHOLDER - Ready to be replaced by client's real 2kW, 3kW, and 5kW installation photos]
  packages: {
    residential3kW: {
      src: "/images/installation-1.jpg",
      alt: "3 kW Residential rooftop solar plant installation in Kannur with PM Surya Ghar subsidy",
      width: 800,
      height: 600,
    },
    budget2kW: {
      src: "/images/installation-2.jpg",
      alt: "2 kW Budget rooftop solar panel array installed on Kerala home rooftop",
      width: 800,
      height: 600,
    },
    hybrid5kW: {
      src: "/images/installation-3.jpg",
      alt: "5 kW Hybrid solar installation on modern villa rooftop with battery backup",
      width: 800,
      height: 600,
    },
  },

  // 3. Projects Gallery Section Images
  // [PLACEHOLDER - Sample project showcase pending client installation photos]
  projectsGallery: [
    {
      id: "project-1",
      title: "3 kW Residential Rooftop Plant",
      location: "Mayyil, Kannur",
      systemType: "On-Grid (KSEB Net Metering)",
      src: "/images/project-1.jpg",
      alt: "3 kW On-Grid solar plant completed at Mayyil, Kannur [PLACEHOLDER]",
      width: 800,
      height: 600,
      completionYear: "2026",
    },
    {
      id: "project-2",
      title: "5 kW Villa Hybrid Backup Plant",
      location: "Chalode, Kannur",
      systemType: "Hybrid with Battery Storage",
      src: "/images/project-2.jpg",
      alt: "5 kW Hybrid solar installation completed at Chalode, Kannur [PLACEHOLDER]",
      width: 800,
      height: 600,
      completionYear: "2026",
    },
    {
      id: "project-3",
      title: "2 kW Budget Home Installation",
      location: "Taliparamba, Kannur",
      systemType: "On-Grid Residential",
      src: "/images/project-3.jpg",
      alt: "2 kW residential rooftop solar array in Taliparamba, Kannur [PLACEHOLDER]",
      width: 800,
      height: 600,
      completionYear: "2026",
    },
    {
      id: "project-4",
      title: "10 kW Commercial Rooftop Setup",
      location: "Kannur Town",
      systemType: "Commercial High-Yield Solar",
      src: "/images/project-4.jpg",
      alt: "10 kW commercial solar installation in Kannur town [PLACEHOLDER]",
      width: 800,
      height: 600,
      completionYear: "2026",
    },
  ],

  office: {
    src: "/images/office-front.jpg",
    alt: "Horizon Solar Power Solutions office front at Kandakkai Road, Mayyil, Kannur",
    width: 400,
    height: 400,
  },
};
