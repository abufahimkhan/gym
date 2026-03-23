import { a9 as attr, a8 as ensure_array_like, a7 as attr_class } from './index-CT75KQak.js';
import { P as PRICING_PLANS } from './constants-DEYMn8FU.js';
import { e as escape_html } from './context-Cv9QAF3V.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let formData = {
      fullName: "",
      email: "",
      phone: "",
      plan: "Power Pro",
      fitnessGoal: "",
      experience: "beginner",
      startDate: "",
      termsAccepted: false
    };
    $$renderer2.push(`<div class="min-h-screen bg-black text-white py-24"><div class="container mx-auto px-6 max-w-4xl">`);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="text-center mb-12"><p class="text-red-600 font-bold uppercase tracking-[0.3em] text-xs mb-4">Start Your Journey</p> <h1 class="text-5xl md:text-6xl font-oswald font-bold uppercase italic mb-6">Join <span class="text-red-600">USA Power</span></h1> <p class="text-gray-400 max-w-2xl mx-auto">Fill out the form below to become part of Austin's most elite fitness community. Transform your body, mind, and life.</p></div> <form class="bg-neutral-900/50 border border-white/5 rounded-3xl p-8 md:p-12 space-y-8"><div><h3 class="text-2xl font-oswald font-bold uppercase mb-6 text-red-600">Personal Information</h3> <div class="grid md:grid-cols-2 gap-6"><div><label for="fullName" class="block text-sm font-bold uppercase tracking-widest mb-2 text-gray-300">Full Name *</label> <input type="text" id="fullName"${attr("value", formData.fullName)} required class="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors" placeholder="Enter your full name"/></div> <div><label for="email" class="block text-sm font-bold uppercase tracking-widest mb-2 text-gray-300">Email Address *</label> <input type="email" id="email"${attr("value", formData.email)} required class="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors" placeholder="your.email@example.com"/></div> <div><label for="phone" class="block text-sm font-bold uppercase tracking-widest mb-2 text-gray-300">Phone Number *</label> <input type="tel" id="phone"${attr("value", formData.phone)} required class="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors" placeholder="+880 17XX-XXXXXX"/></div> <div><label for="startDate" class="block text-sm font-bold uppercase tracking-widest mb-2 text-gray-300">Preferred Start Date *</label> <input type="date" id="startDate"${attr("value", formData.startDate)} required class="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"/></div></div></div> <div><h3 class="text-2xl font-oswald font-bold uppercase mb-6 text-red-600">Select Your Plan</h3> <div class="grid md:grid-cols-3 gap-4"><!--[-->`);
      const each_array = ensure_array_like(PRICING_PLANS);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let plan = each_array[$$index];
        $$renderer2.push(`<label${attr_class(`relative flex flex-col p-6 rounded-xl border-2 cursor-pointer transition-all ${formData.plan === plan.name ? "border-red-600 bg-red-600/10" : "border-white/10 hover:border-white/30"}`)}><input type="radio" name="plan"${attr("value", plan.name)}${attr("checked", formData.plan === plan.name, true)} class="sr-only"/> <div class="text-center"><div class="text-sm uppercase tracking-widest text-gray-400 mb-2">${escape_html(plan.name)}</div> <div class="text-3xl font-oswald font-bold mb-1">${escape_html(plan.price)}</div> <div class="text-xs text-gray-500">${escape_html(plan.period)}</div></div> `);
        if (plan.recommended) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">Recommended</div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></label>`);
      }
      $$renderer2.push(`<!--]--></div></div> <div><h3 class="text-2xl font-oswald font-bold uppercase mb-6 text-red-600">Fitness Profile</h3> <div class="space-y-6"><div><label for="fitnessGoal" class="block text-sm font-bold uppercase tracking-widest mb-2 text-gray-300">Your Fitness Goal</label> <textarea id="fitnessGoal" rows="3" class="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors resize-none" placeholder="What do you want to achieve? (Weight loss, muscle gain, strength, etc.)">`);
      const $$body = escape_html(formData.fitnessGoal);
      if ($$body) {
        $$renderer2.push(`${$$body}`);
      }
      $$renderer2.push(`</textarea></div> <div><label for="experience" class="block text-sm font-bold uppercase tracking-widest mb-2 text-gray-300">Experience Level</label> `);
      $$renderer2.select(
        {
          id: "experience",
          value: formData.experience,
          class: "w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
        },
        ($$renderer3) => {
          $$renderer3.option({ value: "beginner" }, ($$renderer4) => {
            $$renderer4.push(`Beginner - New to fitness`);
          });
          $$renderer3.option({ value: "intermediate" }, ($$renderer4) => {
            $$renderer4.push(`Intermediate - Regular gym-goer`);
          });
          $$renderer3.option({ value: "advanced" }, ($$renderer4) => {
            $$renderer4.push(`Advanced - Experienced lifter`);
          });
        }
      );
      $$renderer2.push(`</div></div></div> <div class="space-y-6"><label class="flex items-start gap-3 cursor-pointer"><input type="checkbox"${attr("checked", formData.termsAccepted, true)} required class="mt-1 w-5 h-5 rounded border-white/10 bg-black/40 text-red-600 focus:ring-red-600 focus:ring-offset-0"/> <span class="text-sm text-gray-400">I agree to the <a href="/terms" class="text-red-600 hover:underline">Terms &amp; Conditions</a> and <a href="/privacy" class="text-red-600 hover:underline">Privacy Policy</a>. I understand the membership fees and cancellation policy.</span></label> <button type="submit"${attr("disabled", true, true)} class="w-full bg-red-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg">`);
      {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<i class="fas fa-dumbbell"></i> Start Your Transformation`);
      }
      $$renderer2.push(`<!--]--></button></div></form>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DOHhZGl9.js.map
