const motivationalQuotes = [
    "RASEL POWER FLOWS THROUGH EVERY REP. YOUR LIMITS ARE ILLUSIONS.",
    "THE IRON DOESN'T LIE. NEITHER DOES YOUR DEDICATION.",
    "PAIN IS TEMPORARY. RASEL POWER IS FOREVER.",
    "WEAK EXCUSES BUILD WEAK BODIES. STRENGTH BUILDS LEGENDS.",
    "YOUR BODY HEARS EVERYTHING YOUR MIND SAYS. THINK POWER.",
    "SWEAT NOW, DOMINATE LATER. RASEL POWER IS YOUR FUEL.",
    "THE ONLY BAD WORKOUT IS THE ONE THAT DIDN'T HAPPEN.",
    "CHAMPIONS AREN'T MADE IN GYMS. CHAMPIONS ARE MADE FROM RASEL POWER.",
    "STRENGTH DOESN'T COME FROM WHAT YOU CAN DO. IT COMES FROM OVERCOMING.",
    "PUSH HARDER THAN YESTERDAY IF YOU WANT A DIFFERENT TOMORROW.",
    "YOUR ONLY LIMIT IS YOU. UNLEASH YOUR RASEL POWER.",
    "TRAIN INSANE OR REMAIN THE SAME.",
    "THE PAIN YOU FEEL TODAY WILL BE THE STRENGTH YOU FEEL TOMORROW.",
    "BEAST MODE: ACTIVATED. RASEL POWER: UNLEASHED.",
    "NO PAIN, NO GAIN. NO GUTS, NO GLORY.",
    "IRON SHARPENS IRON. RASEL POWER SHARPENS CHAMPIONS.",
    "GRIND NOW. SHINE FOREVER.",
    "YOUR BODY CAN STAND ALMOST ANYTHING. IT'S YOUR MIND YOU HAVE TO CONVINCE.",
]

const goalSpecificQuotes: Record<string, string[]> = {
    weight: [
        "DROP THE WEIGHT, NOT YOUR STANDARDS. RASEL POWER TRANSFORMS BODIES.",
        "EVERY POUND LOST IS A VICTORY WON. UNLEASH YOUR RASEL POWER.",
        "FAT LOSS REQUIRES FIRE. LIGHT UP WITH RASEL POWER.",
    ],
    muscle: [
        "BUILD MUSCLE, BUILD CHARACTER. RASEL POWER BUILDS BOTH.",
        "GAINS AREN'T GIVEN. THEY'RE EARNED WITH RASEL POWER.",
        "EVERY REP CARVES YOUR DESTINY. MAKE IT LEGENDARY.",
    ],
    strength: [
        "POWER ISN'T GIVEN, IT'S BUILT. ONE REP AT A TIME.",
        "LIFT HEAVY. THINK HEAVY. BE RASEL POWER.",
        "STRONG BODY, STRONG MIND. RASEL POWER UNBREAKABLE.",
    ],
    endurance: [
        "GO THE DISTANCE. RASEL POWER NEVER QUITS.",
        "STAMINA IS BUILT IN THE GRIND. EMBRACE RASEL POWER.",
        "OUTLAST, OUTWORK, OVERCOME. THAT'S RASEL POWER.",
    ],
    fitness: [
        "FIT ISN'T A DESTINATION. IT'S A WAY OF LIFE WITH RASEL POWER.",
        "YOUR FITNESS JOURNEY STARTS WITH ONE DECISION: RASEL POWER.",
        "EVERY WORKOUT COUNTS. EVERY REP MATTERS. RASEL POWER DELIVERS.",
    ],
}

export const getMotivationalQuote = async (goal: string): Promise<string> => {
    // Simulate API delay for realistic feel
    await new Promise(resolve => setTimeout(resolve, 800))

    const lowerGoal = goal.toLowerCase()

    // Check for goal-specific keywords
    for (const [keyword, quotes] of Object.entries(goalSpecificQuotes)) {
        if (lowerGoal.includes(keyword)) {
            return quotes[Math.floor(Math.random() * quotes.length)]
        }
    }

    // Return random general quote
    return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
}

export const getFitnessAdvice = async (userStats: string): Promise<string[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 600))

    const tips = [
        "Stay hydrated - drink at least 3L of water daily",
        "Focus on compound movements: squats, deadlifts, bench press",
        "Get 7-9 hours of quality sleep for optimal recovery",
        "Progressive overload is key - increase weight or reps weekly",
        "Warm up properly to prevent injuries",
        "Track your workouts to measure progress",
        "Protein intake: 1.6-2.2g per kg of body weight",
        "Rest days are as important as training days",
        "Mind-muscle connection improves results",
        "Consistency beats intensity - show up every day",
    ]

    // Return 3 random tips
    const shuffled = [...tips].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 3)
}
