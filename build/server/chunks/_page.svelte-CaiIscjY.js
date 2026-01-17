import { a8 as ensure_array_like, a9 as attr, a7 as attr_class } from './index-CT75KQak.js';
import { L as LOCATION, C as CONTACT_PHONE, M as MAP_LINK, A as APP_NAME } from './constants-Cy0raBIZ.js';
import { e as escape_html } from './context-Cv9QAF3V.js';

function _page($$renderer) {
  $$renderer.push(`<div class="min-h-screen bg-neutral-950 text-white"><section class="pt-28 pb-12 text-center"><p class="text-red-600 font-bold uppercase tracking-[0.3em] text-xs">Visit Us</p> <h1 class="text-5xl md:text-6xl font-oswald font-bold uppercase italic mt-2">Contact &amp; Location</h1> <p class="text-gray-400 max-w-2xl mx-auto mt-4">Reach out or drop by. We're at the heart of Khulna's fitness community.</p></section> <section class="container mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-12 items-center"><div class="space-y-6 bg-neutral-900/60 border border-white/5 rounded-3xl p-10"><h2 class="text-2xl font-oswald font-bold uppercase italic">Get In Touch</h2> <ul class="space-y-4 text-gray-300"><li class="flex items-start gap-3"><i class="fas fa-location-dot text-red-600 mt-1"></i> <span>${escape_html(LOCATION)}<br/>Khulna 9100, Bangladesh</span></li> <li class="flex items-center gap-3"><i class="fas fa-phone text-red-600"></i> <span>${escape_html(CONTACT_PHONE)}</span></li> <li class="flex items-center gap-3"><i class="fas fa-envelope text-red-600"></i> <span>info@raselpowergym.com</span></li></ul> <div class="flex gap-4"><!--[-->`);
  const each_array = ensure_array_like([
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "YouTube", href: "https://youtube.com" }
  ]);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let social = each_array[$$index];
    $$renderer.push(`<a${attr("href", social.href)}${attr("aria-label", social.label)} class="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-red-600 transition-all"><i${attr_class(`fab fa-${social.label.toLowerCase()}`)}></i></a>`);
  }
  $$renderer.push(`<!--]--></div> <div class="text-sm text-gray-500">Hours: Sat-Thu 6:00 AM - 11:00 PM | Friday 4:00 PM - 10:00 PM</div></div> <div class="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-red-600/5"><a${attr("href", MAP_LINK)} target="_blank" rel="noopener noreferrer"><img src="/location2.png"${attr("alt", `${APP_NAME} map location`)} class="w-full h-full object-cover"/> <div class="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-bold uppercase tracking-[0.3em]">Open in Google Maps</div></a></div></section></div>`);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CaiIscjY.js.map
