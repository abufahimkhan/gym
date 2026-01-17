import { F as Features } from './Features-DfPmOmun.js';
import { T as Trainers } from './Trainers-BX5hzVU9.js';
import { P as Pricing } from './Pricing-Bo7Y7d24.js';
import './index-CT75KQak.js';
import './context-Cv9QAF3V.js';
import './constants-Cy0raBIZ.js';

function Hero($$renderer) {
  $$renderer.push(`<section id="home" class="relative min-h-screen flex items-center pt-20 hero-gradient"><div class="absolute inset-0 bg-black/40 z-0"></div> <div class="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center"><div class="space-y-8 animate-in fade-in slide-in-from-left duration-1000"><div class="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/40 px-4 py-1 rounded-full text-red-500 text-xs font-bold uppercase tracking-widest"><span class="relative flex h-2 w-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span></span> Top Rated Gym in Khulna</div> <h1 class="text-6xl md:text-8xl font-oswald font-bold leading-none tracking-tighter uppercase italic">Power <br/> <span class="text-red-600">Your</span> Body <br/> Define <span class="outline-text text-transparent" style="text-stroke: 1px white;">Strength</span></h1> <p class="text-gray-300 text-lg max-w-lg leading-relaxed">Welcome to Rasel Power Gym 2. The destination where iron meets ambition. Transform your physique with elite coaching and world-class equipment.</p> <div class="flex flex-col sm:flex-row gap-4 pt-4"><a href="/join" class="bg-red-600 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-center hover:bg-red-700 transition-all flex items-center justify-center gap-3 group">Start Free Trial <i class="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i></a> <a href="#programs" class="border border-white/20 hover:border-white/40 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-center transition-all backdrop-blur-sm">View Programs</a></div> <div class="flex items-center gap-8 pt-6 border-t border-white/10"><div><div class="text-3xl font-oswald font-bold text-red-500">500+</div> <div class="text-xs uppercase tracking-widest text-gray-500">Active Members</div></div> <div><div class="text-3xl font-oswald font-bold text-red-500">20+</div> <div class="text-xs uppercase tracking-widest text-gray-500">Power Cages</div></div> <div><div class="text-3xl font-oswald font-bold text-red-500">02</div> <div class="text-xs uppercase tracking-widest text-gray-500">Pro Trainers</div></div></div></div> <div class="hidden md:block relative animate-in zoom-in duration-1000 delay-300"><div class="absolute -inset-4 border border-red-600/30 rounded-2xl rotate-3"></div> <div class="absolute -inset-4 border border-white/10 rounded-2xl -rotate-2"></div> <img src="/gym-tool11.png" alt="Gym Interior" class="relative w-full h-[600px] object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"/> <div class="absolute bottom-8 -right-8 bg-black/90 p-6 border border-white/10 rounded-xl backdrop-blur-md"><div class="flex items-center gap-4"><div class="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl"><i class="fas fa-trophy"></i></div> <div><div class="text-sm font-bold uppercase">Best Performance 2024</div> <div class="text-xs text-gray-400">Awarded by Khulna Fitness Council</div></div></div></div></div></div></section>`);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<div class="min-h-screen bg-black overflow-x-hidden selection:bg-red-600 selection:text-white">`);
    Hero($$renderer2);
    $$renderer2.push(`<!----> `);
    Features($$renderer2);
    $$renderer2.push(`<!----> `);
    Trainers($$renderer2);
    $$renderer2.push(`<!----> `);
    Pricing($$renderer2);
    $$renderer2.push(`<!----> <button aria-label="Scroll to top" class="fixed bottom-8 right-8 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-red-600/50 hover:bg-red-700 transition-all z-40 transform hover:scale-110 active:scale-95"><i class="fas fa-chevron-up"></i></button></div>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DXrUhxu8.js.map
