<script lang="ts">
  const galleryImages = [
    { src: "/gym-tool2.png", alt: "Gym Equipment 1", category: "equipment" },
    { src: "/gym-tool3.png", alt: "Gym Equipment 2", category: "equipment" },
    { src: "/gym-tool4.png", alt: "Gym Equipment 3", category: "equipment" },
    { src: "/gym-tool5.png", alt: "Gym Equipment 4", category: "equipment" },
    { src: "/gym-tool6.png", alt: "Gym Equipment 5", category: "equipment" },
    { src: "/gym-tool7.png", alt: "Gym Equipment 6", category: "equipment" },
    { src: "/gym-tool9.png", alt: "Gym Equipment 7", category: "equipment" },
    { src: "/gym-tool10.png", alt: "Gym Equipment 8", category: "equipment" },
    { src: "/gym-tool11.png", alt: "Gym Interior", category: "interior" },
    { src: "/gym-selfy1.png", alt: "Training Session 1", category: "training" },
    { src: "/gym-selfy2.png", alt: "Training Session 2", category: "training" },
    { src: "/gym-selfy3.png", alt: "Training Session 3", category: "training" },
    { src: "/gym-selfy4.png", alt: "Training Session 4", category: "training" },
  ];

  let selectedCategory = "all";
  let lightboxOpen = false;
  let currentImage = 0;

  $: filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  function openLightbox(index: number) {
    currentImage = filteredImages.findIndex(
      (img) => galleryImages.indexOf(img) === index,
    );
    lightboxOpen = true;
  }

  function closeLightbox() {
    lightboxOpen = false;
  }

  function nextImage() {
    currentImage = (currentImage + 1) % filteredImages.length;
  }

  function prevImage() {
    currentImage =
      (currentImage - 1 + filteredImages.length) % filteredImages.length;
  }
</script>

<section id="gallery" class="py-6 bg-black">
  <div class="container mx-auto px-6">
    <!-- <div class="text-center mb-16">
      <span class="text-red-600 font-bold uppercase tracking-widest text-xs mb-4 block">Visual Tour</span>
      <h2 class="text-5xl md:text-6xl font-oswald font-bold uppercase italic leading-none mb-6">
        Gym <span class="text-red-600">Gallery</span>
      </h2>
      <p class="text-gray-400 max-w-2xl mx-auto">
        Take a look at our state-of-the-art facility, premium equipment, and the power-packed atmosphere where champions are forged.
      </p>
    </div> -->

    <!-- Filter Buttons -->
    <div class="flex justify-center gap-4 mb-12 flex-wrap">
      <button
        on:click={() => (selectedCategory = "all")}
        class={`px-6 py-2 rounded-full font-bold uppercase text-sm tracking-widest transition-all ${
          selectedCategory === "all"
            ? "bg-red-600 text-white"
            : "bg-neutral-900 text-gray-400 hover:text-white hover:border-red-600 border border-white/10"
        }`}
      >
        All
      </button>
      <button
        on:click={() => (selectedCategory = "equipment")}
        class={`px-6 py-2 rounded-full font-bold uppercase text-sm tracking-widest transition-all ${
          selectedCategory === "equipment"
            ? "bg-red-600 text-white"
            : "bg-neutral-900 text-gray-400 hover:text-white hover:border-red-600 border border-white/10"
        }`}
      >
        Equipment
      </button>
      <button
        on:click={() => (selectedCategory = "training")}
        class={`px-6 py-2 rounded-full font-bold uppercase text-sm tracking-widest transition-all ${
          selectedCategory === "training"
            ? "bg-red-600 text-white"
            : "bg-neutral-900 text-gray-400 hover:text-white hover:border-red-600 border border-white/10"
        }`}
      >
        Training
      </button>
      <button
        on:click={() => (selectedCategory = "interior")}
        class={`px-6 py-2 rounded-full font-bold uppercase text-sm tracking-widest transition-all ${
          selectedCategory === "interior"
            ? "bg-red-600 text-white"
            : "bg-neutral-900 text-gray-400 hover:text-white hover:border-red-600 border border-white/10"
        }`}
      >
        Interior
      </button>
    </div>

    <!-- Gallery Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {#each filteredImages as image, idx}
        <button
          on:click={() => openLightbox(galleryImages.indexOf(image))}
          class="group relative aspect-square overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 hover:border-red-600/50 transition-all duration-300"
        >
          <img
            src={image.src}
            alt={image.alt}
            class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div class="absolute bottom-4 left-4 right-4">
              <p class="text-white font-bold text-sm uppercase">{image.alt}</p>
            </div>
          </div>
          <div
            class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div
              class="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center"
            >
              <i class="fas fa-search-plus text-white"></i>
            </div>
          </div>
        </button>
      {/each}
    </div>
  </div>
</section>

<!-- Lightbox Modal -->
{#if lightboxOpen}
  <div
    class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
    on:click={closeLightbox}
  >
    <button
      on:click|stopPropagation={closeLightbox}
      class="absolute top-4 right-4 w-12 h-12 rounded-full bg-red-600 text-white hover:bg-red-700 transition-all flex items-center justify-center"
      aria-label="Close lightbox"
    >
      <i class="fas fa-times text-xl"></i>
    </button>

    <button
      on:click|stopPropagation={prevImage}
      class="absolute left-4 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-red-600 transition-all flex items-center justify-center backdrop-blur-sm"
      aria-label="Previous image"
    >
      <i class="fas fa-chevron-left"></i>
    </button>

    <button
      on:click|stopPropagation={nextImage}
      class="absolute right-4 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-red-600 transition-all flex items-center justify-center backdrop-blur-sm"
      aria-label="Next image"
    >
      <i class="fas fa-chevron-right"></i>
    </button>

    <div class="max-w-6xl w-full" on:click|stopPropagation>
      <img
        src={filteredImages[currentImage].src}
        alt={filteredImages[currentImage].alt}
        class="w-full h-auto max-h-[90vh] object-contain rounded-lg"
      />
      <p
        class="text-center text-white mt-4 font-bold uppercase tracking-widest"
      >
        {filteredImages[currentImage].alt}
      </p>
    </div>
  </div>
{/if}
