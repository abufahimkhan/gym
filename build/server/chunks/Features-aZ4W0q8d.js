import { a8 as ensure_array_like, a9 as attr, a7 as attr_class } from './index-CT75KQak.js';
import { F as FACILITIES } from './constants-DEYMn8FU.js';
import { e as escape_html } from './context-Cv9QAF3V.js';

function Features($$renderer) {
  $$renderer.push(`<section id="programs" class="py-24 bg-black"><div class="container mx-auto px-6"><div class="flex flex-col md:flex-row justify-between items-end gap-6 mb-16"><div class="max-w-2xl"><span class="text-red-600 font-bold uppercase tracking-widest text-xs mb-4 block">Our Facilities</span> <h2 class="text-5xl md:text-6xl font-oswald font-bold uppercase italic leading-none">Built For <span class="text-red-600">The Bold</span></h2></div> <p class="text-gray-400 max-w-sm">Everything you need to reach the peak of your physical potential. No gimmicks, just iron and dedication.</p></div> <div class="grid md:grid-cols-4 gap-8"><!--[-->`);
  const each_array = ensure_array_like(FACILITIES);
  for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
    let facility = each_array[idx];
    $$renderer.push(`<div${attr("key", idx)} class="group p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-red-600/50 transition-all duration-500"><div class="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600 text-3xl mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-500"><i${attr_class(`fas ${facility.icon}`)}></i></div> <h3 class="text-xl font-bold uppercase mb-4 tracking-tight group-hover:text-red-500 transition-colors">${escape_html(facility.title)}</h3> <p class="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">${escape_html(facility.description)}</p></div>`);
  }
  $$renderer.push(`<!--]--></div></div></section>`);
}

export { Features as F };
//# sourceMappingURL=Features-aZ4W0q8d.js.map
