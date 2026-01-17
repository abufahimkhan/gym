import { a8 as ensure_array_like, a9 as attr, a7 as attr_class } from './index-CT75KQak.js';
import { P as PRICING_PLANS } from './constants-Cy0raBIZ.js';
import { e as escape_html } from './context-Cv9QAF3V.js';

function Pricing($$renderer) {
  $$renderer.push(`<section id="pricing" class="py-24 bg-black relative overflow-hidden"><div class="absolute top-1/2 left-0 w-96 h-96 bg-red-900/10 rounded-full blur-[150px] -z-10"></div> <div class="container mx-auto px-6"><div class="text-center mb-16"><h2 class="text-5xl md:text-6xl font-oswald font-bold uppercase italic mb-6">Membership <span class="text-red-600">Plans</span></h2> <p class="text-gray-400 max-w-xl mx-auto">Transparent pricing with no hidden fees. Choose the plan that fits your ambition.</p></div> <div class="grid md:grid-cols-3 gap-8 items-stretch"><!--[-->`);
  const each_array = ensure_array_like(PRICING_PLANS);
  for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
    let plan = each_array[idx];
    $$renderer.push(`<div${attr("key", idx)}${attr_class(`relative flex flex-col p-8 rounded-3xl border transition-all duration-500 ${plan.recommended ? "bg-neutral-900 border-red-600 shadow-2xl shadow-red-600/10 scale-105 z-10" : "bg-neutral-900/50 border-white/5 hover:border-white/20"}`)}>`);
    if (plan.recommended) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Best Value</div>`);
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]--> <div class="mb-8"><h3 class="text-xl font-bold uppercase mb-2 text-gray-400">${escape_html(plan.name)}</h3> <div class="flex items-baseline gap-1"><span class="text-4xl md:text-5xl font-oswald font-bold">${escape_html(plan.price)}</span> <span class="text-gray-500 text-sm">${escape_html(plan.period)}</span></div></div> <ul class="space-y-4 mb-10 flex-grow"><!--[-->`);
    const each_array_1 = ensure_array_like(plan.features);
    for (let fIdx = 0, $$length2 = each_array_1.length; fIdx < $$length2; fIdx++) {
      let feature = each_array_1[fIdx];
      $$renderer.push(`<li${attr("key", fIdx)} class="flex items-center gap-3 text-sm text-gray-300"><i class="fas fa-check text-red-600"></i> ${escape_html(feature)}</li>`);
    }
    $$renderer.push(`<!--]--></ul> <button${attr_class(`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all ${plan.recommended ? "bg-red-600 text-white hover:bg-red-700" : "bg-white/5 text-white hover:bg-white/10 border border-white/10"}`)}>Choose Plan</button></div>`);
  }
  $$renderer.push(`<!--]--></div> <div class="mt-16 text-center text-gray-500 text-sm"><p>* Terms &amp; Conditions apply. All memberships include initial orientation.</p></div></div></section>`);
}

export { Pricing as P };
//# sourceMappingURL=Pricing-Bo7Y7d24.js.map
