
import type { PricingPlan, Trainer, Facility } from './types'

export const APP_NAME = "Rasel Power Gym 2"
export const LOCATION = "Khulna, Bangladesh"
export const CONTACT_PHONE = "+880 17XX-XXXXXX"
export const MAP_LINK = "https://www.google.com/maps/place/Rasel+Power+Gym+2/@22.865318,89.5283661,17z"

export const PRICING_PLANS: PricingPlan[] = [
    {
        name: "Starter",
        price: "৳1,500",
        period: "/month",
        features: ["Access to Gym Floor", "Locker Room Access", "Basic Training Guide", "Free WiFi"],
    },
    {
        name: "Power Pro",
        price: "৳3,500",
        period: "/3 months",
        recommended: true,
        features: ["All Starter Features", "Personal Trainer (2 Sessions/Month)", "Custom Diet Plan", "Priority Support", "Supplement Discounts"],
    },
    {
        name: "Ultimate Beast",
        price: "৳12,000",
        period: "/year",
        features: ["All Pro Features", "Unlimited Personal Training", "Free Monthly Protein Shake", "Family Guest Pass", "Access to 24/7 Support"],
    }
]

export const TRAINERS: Trainer[] = [
    {
        name: "Rasel Ahmed",
        role: "Founder & Head Coach",
        image: "/gym-selfy1.png",
        bio: "With over 10 years of professional bodybuilding experience, Rasel dedicated his life to powerlifting and community health."
    },
    {
        name: "Tanvir Hasan",
        role: "Senior Fitness Instructor",
        image: "/gym-selfy2.png",
        bio: "Specialist in HIIT and functional strength. Tanvir focuses on building sustainable fitness habits for everyone."
    }
]

export const FACILITIES: Facility[] = [
    {
        title: "Modern Equipment",
        icon: "fa-dumbbell",
        description: "Equipped with the latest power cages, dumbbells up to 100kg, and ergonomic machines."
    },
    {
        title: "Cardio Zone",
        icon: "fa-heart-pulse",
        description: "Premium treadmills, ellipticals, and stationary bikes to keep your endurance peak."
    },
    {
        title: "Nutrition Bar",
        icon: "fa-glass-water",
        description: "Get your pre-workout boosters and post-workout protein shakes right after your session."
    },
    {
        title: "Clean Environment",
        icon: "fa-broom",
        description: "Daily professional cleaning and strict hygiene protocols to ensure a safe workspace."
    }
]
