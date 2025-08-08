<template>
  <section
    id="nieuws"
    class="bg-white w-screen py-16 md:py-24 pb-24 md:pb-32 relative overflow-visible"
  >
    <!-- Content Container -->
    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="text-center md:text-left mb-12 md:mb-16">
        <div
          class="flex items-center justify-center md:justify-start gap-3 mb-1"
        >
          <Heading title="Laatste nieuws" size="h2" is_bold />
        </div>
        <div
          class="w-32 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mx-auto md:ml-0 md:mr-auto mb-4"
        />
        <p
          class="text-gray-600 max-w-3xl mx-auto md:mr-auto md:ml-0 leading-relaxed"
        >
          Blijf op de hoogte van alle updates, belangrijke informatie en leuke
          weetjes over onze grote dag!
        </p>
      </div>
    </div>

    <!-- News Carousel - Full Width (outside container) -->
    <div class="w-full mb-16 relative z-10">
      <NewsCarousel />
    </div>
  </section>
</template>
