<template>
  <section
    id="nieuws"
    class="bg-white w-screen h-screen py-12 md:py-24 relative overflow-visible flex flex-col"
  >
    <!-- Content Container -->
    <div
      class="container mx-auto px-4 relative z-10 flex-1 flex flex-col justify-center md:justify-start"
    >
      <!-- Section Header -->
      <div class="text-center md:text-left mb-8 md:mb-16">
        <div
          class="flex items-center justify-center md:justify-start gap-3 mb-1"
        >
          <Heading title="Hej 't al eheurd?" size="h2" is_bold />
        </div>
        <div
          class="w-32 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mx-auto md:ml-0 md:mr-auto mb-4"
        />
        <p
          class="text-gray-600 max-w-3xl mx-auto md:mr-auto md:ml-0 leading-relaxed text-base md:text-lg"
        >
          Blijf op de hoogte van alle updates, belangrijke informatie en leuke
          weetjes over de grote dag!
        </p>
      </div>

      <!-- News Carousel - Full Width (outside container but within flex) -->
      <div class="w-full relative z-10 -mx-4">
        <NewsCarousel />
      </div>
    </div>
  </section>
</template>
