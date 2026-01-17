import { a6 as slot, a7 as attr_class, a8 as ensure_array_like, a9 as attr, aa as stringify, ab as store_get, ac as unsubscribe_stores } from './index-CT75KQak.js';
import { e as escape_html, g as getContext } from './context-Cv9QAF3V.js';
import './exports-CA5lG8jS.js';
import './state.svelte-DvJh5Iul.js';
import { L as LOCATION, C as CONTACT_PHONE, M as MAP_LINK } from './constants-Cy0raBIZ.js';

const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let isScrolled = false;
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        isScrolled = window.scrollY > 50;
      });
    }
    const menuItems = [
      { label: "Home", href: "/" },
      { label: "Programs", href: "/programs" },
      { label: "Trainers", href: "/trainers" },
      { label: "Pricing", href: "/pricing" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" }
    ];
    $$renderer2.push(`<nav${attr_class(`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 py-3 backdrop-blur-md border-b border-white/10" : "bg-transparent py-5"}`)}><div class="container mx-auto px-6 flex justify-between items-center"><div class="flex items-center gap-2"><div class="w-10 h-10 bg-red-600 flex items-center justify-center rounded-lg shadow-lg shadow-red-600/20"><i class="fas fa-bolt text-white text-xl"></i></div> <span class="text-2xl font-oswald font-bold tracking-tighter text-white uppercase italic">Rasel <span class="text-red-600">Power</span></span></div> <div class="hidden md:flex items-center space-x-8"><!--[-->`);
    const each_array = ensure_array_like(menuItems);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<a${attr("href", item.href)}${attr_class(`text-sm font-semibold uppercase tracking-widest transition-colors ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === item.href ? "text-red-600" : "text-gray-300 hover:text-red-500")}`)}>${escape_html(item.label)}</a>`);
    }
    $$renderer2.push(`<!--]--> <a href="/join" class="bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-red-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-red-600/30">Join Now</a></div> <button class="md:hidden text-white text-2xl" type="button"${attr("aria-label", "Open menu")}><i${attr_class(`fas ${"fa-bars"}`)}></i></button></div> <div${attr_class(`md:hidden absolute w-full bg-black border-b border-white/10 transition-all duration-300 overflow-hidden ${"max-h-0"}`)}><div class="flex flex-col items-center space-y-4"><!--[-->`);
    const each_array_1 = ensure_array_like(menuItems);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let item = each_array_1[$$index_1];
      $$renderer2.push(`<a${attr("href", item.href)}${attr_class(`text-lg font-bold uppercase hover:text-red-600 ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === item.href ? "text-red-600" : "text-white")}`)}>${escape_html(item.label)}</a>`);
    }
    $$renderer2.push(`<!--]--> <a href="/join" class="bg-red-600 text-white px-8 py-3 rounded-full font-bold uppercase">Join Now</a></div></div></nav>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<footer id="contact" class="bg-neutral-950 pt-20 pb-10 border-t border-white/5"><div class="container mx-auto px-6"><div class="grid md:grid-cols-4 gap-12 mb-16"><div class="space-y-6 md:col-span-1"><div class="flex items-center gap-2"><div class="w-8 h-8 bg-red-600 flex items-center justify-center rounded-lg"><i class="fas fa-bolt text-white text-sm"></i></div> <span class="text-xl font-oswald font-bold tracking-tighter text-white uppercase italic">Rasel <span class="text-red-600">Power</span></span></div> <p class="text-gray-500 text-sm leading-relaxed">Leading the fitness revolution in Khulna since our inception. We
          provide a powerhouse environment for those who dare to dream big.</p> <div class="flex gap-4"><!--[-->`);
    const each_array = ensure_array_like([
      { label: "Facebook", href: "https://facebook.com" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Twitter", href: "https://twitter.com" },
      { label: "YouTube", href: "https://youtube.com" }
    ]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let social = each_array[$$index];
      $$renderer2.push(`<a${attr("href", social.href)}${attr("aria-label", social.label)} class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-red-600 transition-all"><i${attr_class(`fab fa-${social.label.toLowerCase()}`)}></i></a>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div><h4 class="text-white font-bold uppercase tracking-widest mb-6">Quick Links</h4> <ul class="space-y-3"><!--[-->`);
    const each_array_1 = ensure_array_like([
      { label: "Home", href: "/" },
      { label: "Programs", href: "/programs" },
      { label: "Trainers", href: "/trainers" },
      { label: "Pricing", href: "/pricing" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" }
    ]);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let item = each_array_1[$$index_1];
      $$renderer2.push(`<li><a${attr("href", item.href)} class="text-gray-500 hover:text-red-600 text-sm transition-colors">${escape_html(item.label)}</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul></div> <div><h4 class="text-white font-bold uppercase tracking-widest mb-6">Contact Us</h4> <ul class="space-y-4"><li class="flex items-start gap-3"><i class="fas fa-location-dot text-red-600 mt-1"></i> <span class="text-gray-500 text-sm">${escape_html(LOCATION)}<br/>Khulna 9100, Bangladesh</span></li> <li class="flex items-center gap-3"><i class="fas fa-phone text-red-600"></i> <span class="text-gray-500 text-sm">${escape_html(CONTACT_PHONE)}</span></li> <li class="flex items-center gap-3"><i class="fas fa-envelope text-red-600"></i> <span class="text-gray-500 text-sm">info@raselpowergym.com</span></li></ul></div> <div class="space-y-6"><h4 class="text-white font-bold uppercase tracking-widest mb-6">Our Location</h4> <div class="rounded-xl overflow-hidden grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500 h-32 border border-white/10"><a${attr("href", MAP_LINK)} target="_blank" rel="noopener noreferrer"><img src="/location1.png" alt="Map Placeholder" class="w-full h-full object-cover"/> <div class="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-bold uppercase text-xs">View on Maps</div></a></div> <p class="text-gray-500 text-xs">Rasel Power Gym 2 - Located at the heart of Khulna's fitness
          community.</p></div></div> <div class="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-xs uppercase tracking-[0.2em]"><p>© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} Rasel Power Gym 2. All Rights Reserved.</p> <div class="flex gap-6"><a href="/privacy" class="hover:text-white transition-colors">Privacy Policy</a> <a href="/terms" class="hover:text-white transition-colors">Terms of Service</a></div></div></div></footer>`);
  });
}
function _layout($$renderer, $$props) {
  Header($$renderer);
  $$renderer.push(`<!----> <main><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></main> `);
  Footer($$renderer);
  $$renderer.push(`<!---->`);
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-unCTTT9J.js.map
