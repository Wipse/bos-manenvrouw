<template>
  <section
    id="avond-gasten"
    class="bg-primary-50 w-screen h-fit md:py-0 py-16 md:h-screen flex items-center justify-center relative"
  >
    <div class="container mx-auto h-full relative z-10 px-4">
      <!-- Mobile: Stack vertically, Desktop: Grid layout -->
      <div class="flex flex-col md:grid md:grid-cols-12 h-full">
        <!-- Right side (content first on mobile) -->
        <div
          class="md:col-span-5 md:col-start-8 flex flex-col justify-center md:justify-start md:pt-[20vh] text-center md:text-left md:order-2"
        >
          <div class="w-fit mx-auto md:mx-0">
            <Heading title="Waar is dat feestje?" size="h2" is_bold />
            <div
              class="min-h-[3px] md:w-5/6 w-full rounded-full bg-gradient-to-r from-primary-400 to-primary-600 mb-4"
            ></div>
          </div>
          <div class="flex items-center gap-1 justify-center md:justify-start">
            <Icon name="mdi:map-marker" class="size-6 text-primary-500" />
            <p>Zaal Mulder, Hardenberg</p>
          </div>
          <div
            class="flex items-center gap-1.5 justify-center md:justify-start md:pl-0.5"
          >
            <Icon name="mdi:clock" class="size-5 text-primary-500" />
            <p>20:30</p>
          </div>
          <p class="leading-[24px] mt-6 text-gray-700">
            Superleuk dat jullie 's avonds op het bruiloftsfeest van Selvan &
            Bertine aanwezig zijn! Iedereen die het bruidspaar een beetje kent,
            weet dat zij wel van een feestje houden. Er is dan ook een geweldige
            feestband geregeld, dus dat gaat hélemaal goedkomen!
          </p>
          <p class="leading-[24px] mt-2 mb-6 font-semibold text-gray-700">
            Veel plezier en geniet ervan!
          </p>
          <Button
            label="Voor daggasten"
            to="/daggasten"
            class="w-fit mx-auto md:mx-0"
          />
        </div>

        <!-- Left side (map second on mobile) -->
        <div
          class="md:col-span-6 flex flex-col justify-center md:justify-start md:pt-[20vh] mt-8 md:mt-0 md:order-1"
        >
          <GoogleMapsEmbed
            height="384"
            container-class="w-full rounded-xl shadow-custom"
          />
          <div class="mt-10 text-center md:text-left">
            <p class="font-heading font-bold text-lg">Vragen?</p>
            <div
              class="min-h-0.5 md:w-1/6 w-1/4 mx-auto md:mx-0 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 mb-2"
            />
            <a
              href="mailto:eeltje.heida@chello.nl,elyseschonewille@hotmail.com"
              class="flex items-center gap-2 hover:underline decoration-primary-500 w-fit mx-auto md:mx-0"
            >
              <Icon name="mdi:email" class="size-5 text-primary-500" />
              <p>Ceremoniemeesters</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
