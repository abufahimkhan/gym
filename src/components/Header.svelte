<script lang="ts">
  import { page } from "$app/stores";

  let isScrolled = false;
  let mobileMenuOpen = false;

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      isScrolled = window.scrollY > 50;
    });
  }

  const toggleMobileMenu = () => {
    mobileMenuOpen = !mobileMenuOpen;
  };

  const closeMobileMenu = () => {
    mobileMenuOpen = false;
  };

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Programs", href: "/programs" },
    { label: "Trainers", href: "/trainers" },
    { label: "Pricing", href: "/pricing" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];
</script>

<nav
  class={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 py-3 backdrop-blur-md border-b border-white/10" : "bg-transparent py-5"}`}
>
  <div class="container mx-auto px-6 flex justify-between items-center">
    <div class="flex items-center gap-2">
      <div
        class="w-10 h-10 bg-red-600 flex items-center justify-center rounded-lg shadow-lg shadow-red-600/20"
      >
        <i class="fas fa-bolt text-white text-xl"></i>
      </div>
      <span
        class="text-2xl font-oswald font-bold tracking-tighter text-white uppercase italic"
      >
        Rasel <span class="text-red-600">Power</span>
      </span>
    </div>

    <!-- Desktop Menu -->
    <div class="hidden md:flex items-center space-x-8">
      {#each menuItems as item}
        <a
          href={item.href}
          class="text-sm font-semibold uppercase tracking-widest transition-colors {$page
            .url.pathname === item.href
            ? 'text-red-600'
            : 'text-gray-300 hover:text-red-500'}"
        >
          {item.label}
        </a>
      {/each}
      <a
        href="/join"
        class="bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-red-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-red-600/30"
      >
        Join Now
      </a>
    </div>

    <!-- Mobile Toggle -->
    <button
      class="md:hidden text-white text-2xl"
      type="button"
      aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      on:click={toggleMobileMenu}
    >
      <i class={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
    </button>
  </div>

  <!-- Mobile Menu -->
  <div
    class={`md:hidden absolute w-full bg-black border-b border-white/10 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? "max-h-96 py-6" : "max-h-0"}`}
  >
    <div class="flex flex-col items-center space-y-4">
      {#each menuItems as item}
        <a
          href={item.href}
          on:click={closeMobileMenu}
          class="text-lg font-bold uppercase hover:text-red-600 {$page.url
            .pathname === item.href
            ? 'text-red-600'
            : 'text-white'}"
        >
          {item.label}
        </a>
      {/each}
      <a
        href="/join"
        on:click={closeMobileMenu}
        class="bg-red-600 text-white px-8 py-3 rounded-full font-bold uppercase"
      >
        Join Now
      </a>
    </div>
  </div>
</nav>
