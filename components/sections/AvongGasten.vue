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
          class="md:col-span-5 md:col-start-8 flex flex-col justify-center md:justify-start md:pt-[25vh] text-center md:text-left md:order-2"
        >
          <div class="w-fit mx-auto md:mx-0">
            <Heading title="Waar is dat feestje?" size="h2" is_bold />
            <div
              class="min-h-[3px] md:w-5/6 w-full rounded-full bg-primary-500 mb-4"
            ></div>
          </div>
          <div class="flex items-center gap-1 justify-center md:justify-start">
            <Icon name="mdi:map-marker" class="size-6 text-primary-500" />
            <p>Sellinger Church</p>
          </div>
          <div
            class="flex items-center gap-1.5 justify-center md:justify-start md:pl-0.5"
          >
            <Icon name="mdi:clock" class="size-5 text-primary-500" />
            <p>11:30</p>
          </div>
          <p class="leading-[24px] my-6 text-gray-700">
            Wij - de cermoniemeesters - hebben twee ideeën bedacht voor tijdens
            het feest. Om deze ideeën te laten slagen, hebben wij iedereen zijn
            hulp nodig. Kunnen jullie ons helpen door de instructies op de
            volgende pagina te volgen? Wij - de cermoniemeesters - hebben twee
            ideeën bedacht voor tijdens het feest.
          </p>
          <Button
            label="Voor daggasten"
            to="/daggasten"
            class="w-fit mx-auto md:mx-0"
          />
        </div>

        <!-- Left side (map second on mobile) -->
        <div
          class="md:col-span-6 flex flex-col justify-center md:justify-start md:pt-[25vh] mt-8 md:mt-0 md:order-1"
        >
          <GoogleMapsEmbed
            height="384"
            container-class="w-full rounded-xl shadow-custom"
          />
          <div class="mt-10 text-center md:text-left">
            <p class="font-heading font-bold text-lg">Vragen?</p>
            <div
              class="min-h-0.5 md:w-1/6 w-1/4 mx-auto md:mx-0 rounded-full bg-primary-500 mb-2"
            ></div>
            <a
              href="mailto:ceremoniemeester1@gmail.com"
              class="flex items-center gap-2 hover:underline decoration-primary-500 w-fit mx-auto md:mx-0"
            >
              <Icon name="mdi:email" class="size-5 text-primary-500" />
              <p>ceremoniemeester1@gmail.com</p>
            </a>
            <a
              href="mailto:ceremoniemeester1@gmail.com,ceremoniemeester2@gmail.com"
              class="flex items-center gap-2 hover:underline decoration-primary-500 w-fit mx-auto md:mx-0"
            >
              <Icon name="mdi:email" class="size-5 text-primary-500" />
              <p>Beide ceremoniemeesters</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
