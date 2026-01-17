<script lang="ts">
  import { FACILITIES } from '../lib/constants'
</script>

<section id="programs" class="py-24 bg-black">
  <div class="container mx-auto px-6">
    <div class="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
      <div class="max-w-2xl">
        <span class="text-red-600 font-bold uppercase tracking-widest text-xs mb-4 block">Our Facilities</span>
        <h2 class="text-5xl md:text-6xl font-oswald font-bold uppercase italic leading-none">
          Built For <span class="text-red-600">The Bold</span>
        </h2>
      </div>
      <p class="text-gray-400 max-w-sm">
        Everything you need to reach the peak of your physical potential. No gimmicks, just iron and dedication.
      </p>
    </div>

    <div class="grid md:grid-cols-4 gap-8">
      {#each FACILITIES as facility, idx}
        <div 
          key={idx}
          class="group p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-red-600/50 transition-all duration-500"
        >
          <div class="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600 text-3xl mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
            <i class={`fas ${facility.icon}`}></i>
          </div>
          <h3 class="text-xl font-bold uppercase mb-4 tracking-tight group-hover:text-red-500 transition-colors">{facility.title}</h3>
          <p class="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
            {facility.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
