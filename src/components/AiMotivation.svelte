<script lang="ts">
  import { getMotivationalQuote } from '../lib/geminiService'

  let goal: string = ''
  let quote: string | null = null
  let loading: boolean = false

  async function generateQuote() {
    if (!goal.trim()) return
    loading = true
    const result = await getMotivationalQuote(goal)
    quote = result
    loading = false
  }

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      generateQuote()
    }
  }
</script>

<section class="py-20 bg-neutral-900 border-y border-white/5 overflow-hidden relative">
  <div class="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[120px]"></div>
  <div class="container mx-auto px-6 max-w-4xl text-center relative z-10">
    <div class="inline-flex items-center gap-2 mb-4 text-red-500 uppercase tracking-[0.2em] font-bold text-xs">
      <i class="fas fa-microchip"></i>
      AI Personal Motivator
    </div>
    <h2 class="text-4xl md:text-5xl font-oswald font-bold uppercase italic mb-8">
      Get Your Personalized <span class="text-red-600">Battle Cry</span>
    </h2>
    
    <div class="bg-black/40 p-8 rounded-3xl border border-white/5 backdrop-blur-xl shadow-2xl">
      <div class="flex flex-col md:flex-row gap-4 mb-8">
        <input 
          type="text" 
          placeholder="What's your fitness goal today? (e.g., Heavy Deadlifts, Weight Loss...)"
          class="flex-1 bg-white/5 border border-white/10 rounded-full px-8 py-4 text-white focus:outline-none focus:border-red-600 transition-colors placeholder-gray-500"
          bind:value={goal}
          on:keypress={handleKeyPress}
        />
        <button 
          on:click={generateQuote}
          disabled={loading}
          class="bg-red-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-red-700 transition-all disabled:opacity-50 flex items-center justify-center min-w-[180px]"
        >
          {#if loading}
            <i class="fas fa-spinner fa-spin mr-2"></i>
          {/if}
          Ignite
        </button>
      </div>

      {#if quote}
        <div class="animate-in fade-in zoom-in duration-500">
          <div class="text-gray-500 mb-2 italic text-sm">Rasel Power AI says:</div>
          <blockquote class="text-2xl md:text-4xl font-oswald font-bold text-white uppercase italic tracking-tight leading-tight px-4">
            "{quote}"
          </blockquote>
        </div>
      {/if}
      
      {#if !quote && !loading}
        <p class="text-gray-500 text-sm italic">Enter your goal above and let our AI fuel your workout.</p>
      {/if}
    </div>
  </div>
</section>
