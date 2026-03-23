
export interface PricingPlan {
    name: string
    price: string
    period: string
    features: string[]
    recommended?: boolean
}

export interface Trainer {
    name: string
    role: string
    image: string
    bio: string
}

export interface Facility {
    title: string
    icon: string
    description: string
}
