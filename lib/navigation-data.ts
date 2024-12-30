import { BadgeCheck, Radiation, MessageCircleWarning } from 'lucide-react'

export type NavigationItem = {
  icon: string;
  href?: string;
  items?: {
    title: string;
    icon: string;
    href?: string;
    items?: {
      title: string;
      href: string;
      icon: string;
    }[];
  }[];
}

export type NavigationItems = {
  [key: string]: NavigationItem;
}

export const navigationItems: NavigationItems = {
  "About Us": {
    icon: "info",
    items: [
      {
        title: "Oneject Profile",
        icon: "building2",
        items: [
          { title: "History", href: "/about/history", icon: "history" },
          { title: "Vision & Mission", href: "/about/vision-mission", icon: "target" },
        ],
      },
      {
        title: "Manufacture",
        icon: "factory",
        items: [
          { title: "Facility", href: "/about/facility", icon: "warehouse" },
        ],
      },
      {
        title: "Certification",
        icon: "award",
        items: [
          { title: "General Certification", href: "/about/general-certification", icon: "badgeCheck" },
          { title: "Product Certification", href: "/about/product-certification", icon: "badgeCheck" },
        ],
      },
    ],
  },
  "Product": {
    icon: "package",
    items: [
      {
        title: "Syringe",
        href: "/products/syringe",
        icon: "syringe",
        items: [
          { title: "Smart Syringe", href: "/products/syringe/smart-syringe", icon: "syringe" },
          { title: "Auto Disable Syringe", href: "/products/syringe/auto-disable-syringe", icon: "syringe" },
          { title: "Safety Syringe", href: "/products/syringe/safety-syringe", icon: "syringe" },
          { title: "Disposable Syringe", href: "/products/syringe/disposable-syringe", icon: "syringe" },
          { title: "Safeject Hypodermic Needle", href: "/products/syringe/safeject-hypodermic-needle", icon: "syringe" },
          { title: "Safety Needle", href: "/products/syringe/safety-needle", icon: "syringe" },
          { title: "Safety Box", href: "/products/syringe/safety-box", icon: "syringe" },
        ],
      },
      {
        title: "Blood Collection System",
        href: "/products/blood-collection-system",
        icon: "droplets",
        items: [
          { title: "Blood Collection Tube", href: "/products/blood-collection-system/blood-collection-tube", icon: "droplets" },
          { title: "Blood Bag", href: "/products/blood-collection-system/blood-bag", icon: "droplets" },
        ],
      },
      {
        title: "Dialysis Care",
        href: "/products/dialysis",
        icon: "heart",
        items: [
          { title: "HD Machine", href: "/products/dialysis/hd-machine", icon: "heart" },
          { title: "Acid Concentrate", href: "/products/dialysis/acid-concentrate", icon: "heart" },
          { title: "Sodium Bicarbonate Cartridge", href: "/products/dialysis/sodium-bicarbonate", icon: "heart" },
          { title: "Dialyzer", href: "/products/dialysis/dialyzer", icon: "heart" },
          { title: "Bloodline", href: "/products/dialysis/bloodline", icon: "heart" },
          { title: "AV Fistula Needle", href: "/products/dialysis/av-fistula-needle", icon: "heart" },
        ],
      },
      {
        title: "Invitro Diagnostic Instrument",
        href: "/products/diagnostic",
        icon: "microscope",
        items: [
          { title: "Urine Analyzer", href: "/products/diagnostic/urine-analyzer", icon: "testTube" },
          { title: "Blood Analyzer", href: "/products/diagnostic/blood-analyzer", icon: "testTube" },
          { title: "Chemistry Analyzer", href: "/products/diagnostic/chemistry-analyzer", icon: "testTube" },
        ],
      },
      {
        title: "Urology Care",
        href: "/products/urology",
        icon: "stethoscope",
        items: [
          { title: "Urine Bags", href: "/products/urology/urine-bags", icon: "stethoscope" },
        ],
      },
      {
        title: "Radiology",
        href: "/products/radiology",
        icon: "radiation",
        items: [
          { title: "X-ray", href: "/products/radiology/x-ray", icon: "radiation" },
        ],
      },
    ],
  },
  "Services": {
    icon: "settings",
    items: [
      { title: "E-Beam Sterilization", href: "/services/e-beam-sterilization", icon: "zap" },
    ]
  },
  "News": {
    icon: "newspaper",
    href: "/news",
  },
  "ESG": {
    icon: "leaf",
    items: [
      {
        title: "Environment",
        icon: "globe",
        items: [
          { title: "Net zero emission (SBTI)", href: "/esg/environment/net-zero", icon: "globe" },
          { title: "GHG Emission Inventory", href: "/esg/environment/ghg-emission", icon: "globe" },
          { title: "Energy Decarbonization", href: "/esg/environment/energy", icon: "globe" },
        ],
      },
      {
        title: "Social",
        icon: "users",
        items: [
          { title: "Occupational Health, & Safety", href: "/esg/social/health-safety", icon: "users" },
          { title: "Human Capital Development (Oneject Academy)", href: "/esg/social/human-capital", icon: "users" },
          { title: "Corporate Social Responsibility", href: "/esg/social/csr", icon: "users" },
        ],
      },
      {
        title: "Governance",
        icon: "scale",
        items: [
          { title: "Certification", href: "/esg/governance/certification", icon: "scale" },
        ],
      },
      { title: "ESG Report", href: "/esg/report", icon: "fileText" },
    ],
  },
  "Career": {
    icon: "briefcase",
    items: [
      { title: "Recruitment Process", href: "/career/recruitment", icon: "search" },
      { title: "Join Our Team", href: "/career/join", icon: "userPlus" },
      { title: "Join MT Program", href: "/career/mt-program", icon: "graduationCap" },
    ],
  },
  "WBS": {
    icon: "messageCircleWarning",
    href: "/esg/governance/whistle-blowing",
  },
  "Contact Us": {
    icon: "phone",
    href: "/contact",
  },
}

