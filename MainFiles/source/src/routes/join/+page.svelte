<script lang="ts">
  import { PRICING_PLANS } from '../../lib/constants'

  let formData = {
    fullName: '',
    email: '',
    phone: '',
    plan: 'Power Pro',
    fitnessGoal: '',
    experience: 'beginner',
    startDate: '',
    termsAccepted: false
  }

  let submitted = false
  let loading = false

  async function handleSubmit(e: Event) {
    e.preventDefault()
    loading = true
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    submitted = true
    loading = false
  }
</script>

<div class="min-h-screen bg-black text-white py-24">
  <div class="container mx-auto px-6 max-w-4xl">
    {#if !submitted}
      <div class="text-center mb-12">
        <p class="text-red-600 font-bold uppercase tracking-[0.3em] text-xs mb-4">Start Your Journey</p>
        <h1 class="text-5xl md:text-6xl font-oswald font-bold uppercase italic mb-6">
          Join <span class="text-red-600">USA Power</span>
        </h1>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Fill out the form below to become part of Austin's most elite fitness community. Transform your body, mind, and life.
        </p>
      </div>

      <form on:submit={handleSubmit} class="bg-neutral-900/50 border border-white/5 rounded-3xl p-8 md:p-12 space-y-8">
        <!-- Personal Information -->
        <div>
          <h3 class="text-2xl font-oswald font-bold uppercase mb-6 text-red-600">Personal Information</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label for="fullName" class="block text-sm font-bold uppercase tracking-widest mb-2 text-gray-300">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                bind:value={formData.fullName}
                required
                class="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-bold uppercase tracking-widest mb-2 text-gray-300">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                bind:value={formData.email}
                required
                class="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label for="phone" class="block text-sm font-bold uppercase tracking-widest mb-2 text-gray-300">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                bind:value={formData.phone}
                required
                class="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                placeholder="+880 17XX-XXXXXX"
              />
            </div>

            <div>
              <label for="startDate" class="block text-sm font-bold uppercase tracking-widest mb-2 text-gray-300">
                Preferred Start Date *
              </label>
              <input
                type="date"
                id="startDate"
                bind:value={formData.startDate}
                required
                class="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>
          </div>
        </div>

        <!-- Membership Plan -->
        <div>
          <h3 class="text-2xl font-oswald font-bold uppercase mb-6 text-red-600">Select Your Plan</h3>
          <div class="grid md:grid-cols-3 gap-4">
            {#each PRICING_PLANS as plan}
              <label
                class={`relative flex flex-col p-6 rounded-xl border-2 cursor-pointer transition-all ${
                  formData.plan === plan.name
                    ? 'border-red-600 bg-red-600/10'
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                <input
                  type="radio"
                  name="plan"
                  value={plan.name}
                  bind:group={formData.plan}
                  class="sr-only"
                />
                <div class="text-center">
                  <div class="text-sm uppercase tracking-widest text-gray-400 mb-2">{plan.name}</div>
                  <div class="text-3xl font-oswald font-bold mb-1">{plan.price}</div>
                  <div class="text-xs text-gray-500">{plan.period}</div>
                </div>
                {#if plan.recommended}
                  <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                    Recommended
                  </div>
                {/if}
              </label>
            {/each}
          </div>
        </div>

        <!-- Fitness Information -->
        <div>
          <h3 class="text-2xl font-oswald font-bold uppercase mb-6 text-red-600">Fitness Profile</h3>
          <div class="space-y-6">
            <div>
              <label for="fitnessGoal" class="block text-sm font-bold uppercase tracking-widest mb-2 text-gray-300">
                Your Fitness Goal
              </label>
              <textarea
                id="fitnessGoal"
                bind:value={formData.fitnessGoal}
                rows="3"
                class="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors resize-none"
                placeholder="What do you want to achieve? (Weight loss, muscle gain, strength, etc.)"
              ></textarea>
            </div>

            <div>
              <label for="experience" class="block text-sm font-bold uppercase tracking-widest mb-2 text-gray-300">
                Experience Level
              </label>
              <select
                id="experience"
                bind:value={formData.experience}
                class="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
              >
                <option value="beginner">Beginner - New to fitness</option>
                <option value="intermediate">Intermediate - Regular gym-goer</option>
                <option value="advanced">Advanced - Experienced lifter</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Terms & Submit -->
        <div class="space-y-6">
          <label class="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              bind:checked={formData.termsAccepted}
              required
              class="mt-1 w-5 h-5 rounded border-white/10 bg-black/40 text-red-600 focus:ring-red-600 focus:ring-offset-0"
            />
            <span class="text-sm text-gray-400">
              I agree to the <a href="/terms" class="text-red-600 hover:underline">Terms & Conditions</a> and 
              <a href="/privacy" class="text-red-600 hover:underline">Privacy Policy</a>. I understand the membership fees and cancellation policy.
            </span>
          </label>

          <button
            type="submit"
            disabled={loading || !formData.termsAccepted}
            class="w-full bg-red-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
          >
            {#if loading}
              <i class="fas fa-spinner fa-spin"></i>
              Processing...
            {:else}
              <i class="fas fa-dumbbell"></i>
              Start Your Transformation
            {/if}
          </button>
        </div>
      </form>
    {:else}
      <!-- Success Message -->
      <div class="text-center py-16">
        <div class="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <i class="fas fa-check text-white text-4xl"></i>
        </div>
        <h2 class="text-4xl md:text-5xl font-oswald font-bold uppercase italic mb-4">
          Welcome to <span class="text-red-600">USA Power</span>!
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto mb-8">
          Thank you, <span class="text-white font-bold">{formData.fullName}</span>! Your membership application has been received. 
          Our team will contact you at <span class="text-white">{formData.email}</span> within 24 hours to confirm your enrollment.
        </p>
        <div class="bg-neutral-900/50 border border-white/5 rounded-2xl p-8 max-w-md mx-auto mb-8">
          <h3 class="text-xl font-bold uppercase mb-4">Your Selection</h3>
          <div class="space-y-2 text-left">
            <div class="flex justify-between">
              <span class="text-gray-400">Plan:</span>
              <span class="text-white font-bold">{formData.plan}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Start Date:</span>
              <span class="text-white font-bold">{formData.startDate}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Experience:</span>
              <span class="text-white font-bold capitalize">{formData.experience}</span>
            </div>
          </div>
        </div>
        <div class="flex gap-4 justify-center">
          <a
            href="/"
            class="bg-red-600 text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-red-700 transition-all"
          >
            Back to Home
          </a>
          <a
            href="/contact"
            class="border border-white/20 hover:border-red-600 text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    {/if}
  </div>
</div>
