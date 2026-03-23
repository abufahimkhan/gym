import type { PricingPlan, Trainer, Facility } from "./types";

export const APP_NAME = "USA Power Gym";
export const LOCATION = "Austin, Texas, USA";
export const CONTACT_PHONE = "+1 512-555-0199";
export const MAP_LINK =
  "https://www.google.com/maps/place/Austin+Power+Gym/@30.2672,-97.7431,17z";

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "$30",
    period: "/month",
    features: [
      "Access to Gym Floor",
      "Locker Room Access",
      "Basic Training Guide",
      "Free WiFi",
    ],
  },
  {
    name: "Power Pro",
    price: "$80",
    period: "/3 months",
    recommended: true,
    features: [
      "All Starter Features",
      "Personal Trainer (2 Sessions/Month)",
      "Custom Diet Plan",
      "Priority Support",
      "Supplement Discounts",
    ],
  },
  {
    name: "Ultimate Beast",
    price: "$250",
    period: "/year",
    features: [
      "All Pro Features",
      "Unlimited Personal Training",
      "Free Monthly Protein Shake",
      "Family Guest Pass",
      "Access to 24/7 Support",
    ],
  },
];

export const TRAINERS: Trainer[] = [
  {
    name: "Michael Carter",
    role: "Founder & Head Coach",
    image:
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&w=400&q=80",
    bio: "With over 15 years of professional fitness experience, Michael has dedicated his life to powerlifting and community health in the USA.",
  },
  {
    name: "Jessica Lee",
    role: "Senior Fitness Instructor",
    image:
      "https://images.pexels.com/photos/2261482/pexels-photo-2261482.jpeg?auto=compress&w=400&q=80",
    bio: "Specialist in HIIT and functional strength. Jessica focuses on building sustainable fitness habits for everyone.",
  },
];

export const FACILITIES: Facility[] = [
  {
    title: "Modern Equipment",
    icon: "fa-dumbbell",
    description:
      "Equipped with the latest power cages, dumbbells up to 100kg, and ergonomic machines.",
  },
  {
    title: "Cardio Zone",
    icon: "fa-heart-pulse",
    description:
      "Premium treadmills, ellipticals, and stationary bikes to keep your endurance peak.",
  },
  {
    title: "Nutrition Bar",
    icon: "fa-glass-water",
    description:
      "Get your pre-workout boosters and post-workout protein shakes right after your session.",
  },
  {
    title: "Clean Environment",
    icon: "fa-broom",
    description:
      "Daily professional cleaning and strict hygiene protocols to ensure a safe workspace.",
  },
];
