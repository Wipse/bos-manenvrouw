<template>
  <section
    class="bg-primary-50 w-screen h-screen flex items-center justify-center relative"
  >
    <div class="grid grid-cols-12 container mx-auto h-full relative z-10">
      <!-- Left side -->
      <div class="col-span-6 flex flex-col justify-center">
        <GoogleMapsEmbed
          height="384"
          container-class="w-full rounded-xl shadow-custom"
        />
        <div class="mt-10">
          <p class="font-heading font-bold text-lg">Vragen?</p>
          <div class="min-h-0.5 w-1/6 rounded-full bg-primary-500 mb-2"></div>
          <a
            href="mailto:ceremoniemeester1@gmail.com"
            class="flex items-center gap-2 hover:underline decoration-primary-500 w-fit"
          >
            <Icon name="mdi:email" class="size-5 text-primary-500" />
            <p>ceremoniemeester1@gmail.com</p>
          </a>
          <a
            href="mailto:ceremoniemeester1@gmail.com,ceremoniemeester2@gmail.com"
            class="flex items-center gap-2 hover:underline decoration-primary-500 w-fit"
          >
            <Icon name="mdi:email" class="size-5 text-primary-500" />
            <p>Beide ceremoniemeesters</p>
          </a>
        </div>
      </div>

      <!-- Right side -->
      <div class="col-span-5 col-start-8 flex flex-col justify-center">
        <div class="w-fit">
          <Heading title="Waar is dat feestje?" size="h2" is_bold />
          <div class="min-h-[3px] w-5/6 rounded-full bg-primary-500 mb-4"></div>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="mdi:map-marker" class="size-6 text-primary-500" />
          <p>Sellinger Church</p>
        </div>
        <div class="flex items-center gap-1.5 pl-0.5">
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
        <Button label="Voor daggasten" class="w-fit" />
      </div>
    </div>
  </section>
</template>
