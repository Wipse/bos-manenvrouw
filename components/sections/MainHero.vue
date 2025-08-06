<template>
  <section
    class="bg-primary-50 w-screen h-[95vh] flex items-center justify-center py-12"
  >
    <Icon name="logo" class="size-10" />
    <div class="grid grid-cols-12 container mx-auto">
      <div class="col-span-5">
        <div class="w-fit">
          <Heading title="Ja, ik wil!" size="h1" />
          <div
            class="min-h-1 w-1/2 rounded-full bg-primary-500 mb-4 mt-2"
          ></div>
        </div>
        <p class="leading-[26px] mb-6 text-gray-700">
          Welkom op de website van de bruiloft van Selvan en Bertine. Hier vind
          je alle praktische informatie over hun huwelijksdag, of je nu daggast
          of avondgast bent.
        </p>
        <p class="leading-[26px] mb-6 text-gray-700">
          Klik ook vooral even op de knop hieronder, want we hebben belangrijke
          informatie voor
          <span class="underline decoration-primary-500">alle</span> gasten!
        </p>
        <Button label="Belangrijke Informatie" to="#help-needed" />
      </div>
      <img
        src="/images/mainimage.jpeg"
        alt="Main Hero"
        class="col-span-5 col-start-8 rounded-lg"
      />
    </div>
  </section>
</template>
