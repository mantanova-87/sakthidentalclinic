export const siteConfig = {
  name: "Sakthi Dental Clinic",
  shortName: "Sakthi Dental",
  tagline: "Women & Children Dental Care",
  description:
    "Premium dental care for women and children with modern treatments, compassionate care, and advanced dental technology.",
  footerDescription:
    "Trusted dental care for women and children, offering modern treatments in a comfortable and caring environment.",
  logo: "/sdclogo.png",

  navigation: [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Treatments", href: "/treatments" },
    { title: "FAQs", href: "/faqs" },
    { title: "Contact Us", href: "/contact" },
  ],
  contact: {
    address: "B2/8,SBM Layout,Anthivadi,Hosur,Tamil Nadu 635109,India",
    phones: ["+91 9862890897","+91 9363298118"],
    email: "info@sakthidentalclinic.in",
  },
   businessHours: [
    {
      days: "Sunday to Saturday",
      hours: "09:00 AM to 07:00 pm",
    },
  ],

  social: {
    instagram: "",
    facebook: "",
    youtube: "",
  },

  footerTreatments: [
    "Tooth Extraction",
    "Laser Dentistry",
    "Root Canal Therapy",
    "Teeth Cleaning",
    "Dental Fillings",
  ],
} as const;