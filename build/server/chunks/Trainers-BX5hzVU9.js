import { a8 as ensure_array_like, a9 as attr } from './index-CT75KQak.js';
import { T as TRAINERS } from './constants-Cy0raBIZ.js';
import { e as escape_html } from './context-Cv9QAF3V.js';

function Trainers($$renderer) {
  $$renderer.push(`<section id="trainers" class="py-24 bg-neutral-950"><div class="container mx-auto px-6"><div class="text-center mb-16"><span class="text-red-600 font-bold uppercase tracking-widest text-xs mb-4 block">Meet The Legends</span> <h2 class="text-5xl md:text-6xl font-oswald font-bold uppercase italic leading-none mb-6">Elite <span class="text-red-600">Coaching</span></h2> <p class="text-gray-400 max-w-2xl mx-auto">Our trainers are more than instructors; they are partners in your transformation. Learn from the best powerlifters in Khulna.</p></div> <div class="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto"><!--[-->`);
  const each_array = ensure_array_like(TRAINERS);
  for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
    let trainer = each_array[idx];
    $$renderer.push(`<div${attr("key", idx)} class="group relative overflow-hidden rounded-3xl bg-neutral-900"><div class="aspect-[4/5] overflow-hidden"><img${attr("src", trainer.image)}${attr("alt", trainer.name)} class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"/></div> <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div> <div class="absolute bottom-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"><div class="text-red-600 text-sm font-bold uppercase tracking-widest mb-1">${escape_html(trainer.role)}</div> <h3 class="text-2xl font-oswald font-bold uppercase mb-3 italic">${escape_html(trainer.name)}</h3> <p class="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">${escape_html(trainer.bio)}</p> <div class="flex gap-4 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700"><a href="https://facebook.com" aria-label="Facebook" class="text-white hover:text-red-600"><i class="fab fa-facebook-f"></i></a> <a href="https://instagram.com" aria-label="Instagram" class="text-white hover:text-red-600"><i class="fab fa-instagram"></i></a> <a href="https://wa.me/" aria-label="WhatsApp" class="text-white hover:text-red-600"><i class="fab fa-whatsapp"></i></a></div></div></div>`);
  }
  $$renderer.push(`<!--]--></div></div></section>`);
}

export { Trainers as T };
//# sourceMappingURL=Trainers-BX5hzVU9.js.map
