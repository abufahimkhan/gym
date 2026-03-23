<script lang="ts">
  import {
    APP_NAME,
    LOCATION,
    CONTACT_PHONE,
    MAP_LINK,
  } from "../lib/constants";
</script>

<footer id="contact" class="bg-neutral-950 pt-20 pb-10 border-t border-white/5">
  <div class="container mx-auto px-6">
    <div class="grid md:grid-cols-4 gap-12 mb-16">
      <div class="space-y-6 md:col-span-1">
        <div class="flex items-center gap-2">
          <div
            class="w-8 h-8 bg-red-600 flex items-center justify-center rounded-lg"
          >
            <i class="fas fa-bolt text-white text-sm"></i>
          </div>
          <span
            class="text-xl font-oswald font-bold tracking-tighter text-white uppercase italic"
          >
            USA <span class="text-red-600">Power</span>
          </span>
        </div>
        <p class="text-gray-500 text-sm leading-relaxed">
          Leading the fitness revolution in Austin, Texas since our inception. We
          provide a powerhouse environment for those who dare to dream big.
        </p>
        <div class="flex gap-4">
          {#each [{ label: "Facebook", href: "https://facebook.com" }, { label: "Instagram", href: "https://instagram.com" }, { label: "Twitter", href: "https://twitter.com" }, { label: "YouTube", href: "https://youtube.com" }] as social}
            <a
              href={social.href}
              aria-label={social.label}
              class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-red-600 transition-all"
            >
              <i class={`fab fa-${social.label.toLowerCase()}`}></i>
            </a>
          {/each}
        </div>
      </div>

      <div>
        <h4 class="text-white font-bold uppercase tracking-widest mb-6">
          Quick Links
        </h4>
        <ul class="space-y-3">
          {#each [{ label: "Home", href: "/" }, { label: "Programs", href: "/programs" }, { label: "Trainers", href: "/trainers" }, { label: "Pricing", href: "/pricing" }, { label: "Gallery", href: "/gallery" }, { label: "Contact", href: "/contact" }] as item}
            <li>
              <a
                href={item.href}
                class="text-gray-500 hover:text-red-600 text-sm transition-colors"
                >{item.label}</a
              >
            </li>
          {/each}
        </ul>
      </div>

      <div>
        <h4 class="text-white font-bold uppercase tracking-widest mb-6">
          Contact Us
        </h4>
        <ul class="space-y-4">
          <li class="flex items-start gap-3">
            <i class="fas fa-location-dot text-red-600 mt-1"></i>
            <span class="text-gray-500 text-sm"
              >{LOCATION}<br />Austin, TX 78701, USA</span
            >
          </li>
          <li class="flex items-center gap-3">
            <i class="fas fa-phone text-red-600"></i>
            <span class="text-gray-500 text-sm">{CONTACT_PHONE}</span>
          </li>
          <li class="flex items-center gap-3">
            <i class="fas fa-envelope text-red-600"></i>
            <span class="text-gray-500 text-sm">info@usapowergym.com</span>
          </li>
        </ul>
      </div>

      <div class="space-y-6">
        <h4 class="text-white font-bold uppercase tracking-widest mb-6">
          Our Location
        </h4>
        <div
          class="rounded-xl overflow-hidden grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500 h-32 border border-white/10"
        >
          <a href={MAP_LINK} target="_blank" rel="noopener noreferrer">
            <img
              src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&w=800&q=80"
              alt="USA Gym Location Map"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-bold uppercase text-xs"
            >
              View on Maps
            </div>
          </a>
        </div>
        <p class="text-gray-500 text-xs">
          USA Power Gym - Located at the heart of Austin's fitness
          community.
        </p>
      </div>
    </div>

    <div
      class="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-xs uppercase tracking-[0.2em]"
    >
      <p>
        © {new Date().getFullYear()} USA Power Gym. All Rights Reserved.
      </p>
      <div class="flex gap-6">
        <a href="/privacy" class="hover:text-white transition-colors"
          >Privacy Policy</a
        >
        <a href="/terms" class="hover:text-white transition-colors"
          >Terms of Service</a
        >
      </div>
    </div>
  </div>
</footer>
