<script lang="ts">
  import Hero from '../components/Hero.svelte'
  import Features from '../components/Features.svelte'
  import AiMotivation from '../components/AiMotivation.svelte'
  import Trainers from '../components/Trainers.svelte'
  import Pricing from '../components/Pricing.svelte'
  import { onMount } from 'svelte'

  onMount(() => {
    const observerOptions = {
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in', 'fade-in', 'slide-in-from-bottom-10', 'duration-1000')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    document.querySelectorAll('section > div').forEach(section => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  })

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
</script>

<div class="min-h-screen bg-black overflow-x-hidden selection:bg-red-600 selection:text-white">
  <Hero />
  <Features />
  <AiMotivation />
  <Trainers />
  <Pricing />
  
  <!-- Scroll to Top FAB -->
  <button 
    on:click={scrollToTop}
    aria-label="Scroll to top"
    class="fixed bottom-8 right-8 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-red-600/50 hover:bg-red-700 transition-all z-40 transform hover:scale-110 active:scale-95"
  >
    <i class="fas fa-chevron-up"></i>
  </button>
</div>
