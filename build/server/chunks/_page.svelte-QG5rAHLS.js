import { a7 as attr_class, a8 as ensure_array_like, a9 as attr } from './index-CT75KQak.js';
import { e as escape_html } from './context-Cv9QAF3V.js';

function Gallery($$renderer) {
  let filteredImages;
  const galleryImages = [
    {
      src: "/gym-tool2.png",
      alt: "Gym Equipment 1",
      category: "equipment"
    },
    {
      src: "/gym-tool3.png",
      alt: "Gym Equipment 2",
      category: "equipment"
    },
    {
      src: "/gym-tool4.png",
      alt: "Gym Equipment 3",
      category: "equipment"
    },
    {
      src: "/gym-tool5.png",
      alt: "Gym Equipment 4",
      category: "equipment"
    },
    {
      src: "/gym-tool6.png",
      alt: "Gym Equipment 5",
      category: "equipment"
    },
    {
      src: "/gym-tool7.png",
      alt: "Gym Equipment 6",
      category: "equipment"
    },
    {
      src: "/gym-tool9.png",
      alt: "Gym Equipment 7",
      category: "equipment"
    },
    {
      src: "/gym-tool10.png",
      alt: "Gym Equipment 8",
      category: "equipment"
    },
    {
      src: "/gym-tool11.png",
      alt: "Gym Interior",
      category: "interior"
    },
    {
      src: "/gym-selfy1.png",
      alt: "Training Session 1",
      category: "training"
    },
    {
      src: "/gym-selfy2.png",
      alt: "Training Session 2",
      category: "training"
    },
    {
      src: "/gym-selfy3.png",
      alt: "Training Session 3",
      category: "training"
    },
    {
      src: "/gym-selfy4.png",
      alt: "Training Session 4",
      category: "training"
    }
  ];
  filteredImages = galleryImages;
  $$renderer.push(`<section id="gallery" class="py-6 bg-black"><div class="container mx-auto px-6"><div class="flex justify-center gap-4 mb-12 flex-wrap"><button${attr_class(`px-6 py-2 rounded-full font-bold uppercase text-sm tracking-widest transition-all ${"bg-red-600 text-white"}`)}>All</button> <button${attr_class(`px-6 py-2 rounded-full font-bold uppercase text-sm tracking-widest transition-all ${"bg-neutral-900 text-gray-400 hover:text-white hover:border-red-600 border border-white/10"}`)}>Equipment</button> <button${attr_class(`px-6 py-2 rounded-full font-bold uppercase text-sm tracking-widest transition-all ${"bg-neutral-900 text-gray-400 hover:text-white hover:border-red-600 border border-white/10"}`)}>Training</button> <button${attr_class(`px-6 py-2 rounded-full font-bold uppercase text-sm tracking-widest transition-all ${"bg-neutral-900 text-gray-400 hover:text-white hover:border-red-600 border border-white/10"}`)}>Interior</button></div> <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"><!--[-->`);
  const each_array = ensure_array_like(filteredImages);
  for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
    let image = each_array[idx];
    $$renderer.push(`<button class="group relative aspect-square overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 hover:border-red-600/50 transition-all duration-300"><img${attr("src", image.src)}${attr("alt", image.alt)} class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"/> <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"><div class="absolute bottom-4 left-4 right-4"><p class="text-white font-bold text-sm uppercase">${escape_html(image.alt)}</p></div></div> <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"><div class="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center"><i class="fas fa-search-plus text-white"></i></div></div></button>`);
  }
  $$renderer.push(`<!--]--></div></div></section> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]-->`);
}
function _page($$renderer) {
  $$renderer.push(`<div class="min-h-screen bg-black text-white"><section class="pt-28 pb-12 text-center"><p class="text-red-600 font-bold uppercase tracking-[0.3em] text-xs">Visual Experience</p> <h1 class="text-5xl md:text-6xl font-oswald font-bold uppercase italic mt-2">Explore Our Gym</h1> <p class="text-gray-400 max-w-2xl mx-auto mt-4">See where legends train. Browse through our collection of equipment, training sessions, and facility photos.</p></section> `);
  Gallery($$renderer);
  $$renderer.push(`<!----></div>`);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-QG5rAHLS.js.map
