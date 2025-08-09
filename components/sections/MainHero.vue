<template>
  <section
    class="bg-primary-50 w-screen md:h-screen flex items-center justify-center py-12 pt-32 md:pt-28"
  >
    <div class="container mx-auto px-4">
      <div class="md:grid md:grid-cols-12 md:gap-8 items-center">
        <div class="md:col-span-6 text-center md:text-left">
          <div class="w-fit mx-auto md:mx-0">
            <Heading title="Ja, ik wil!" size="h1" />
            <div
              class="min-h-1 md:w-1/2 w-3/4 mx-auto md:mx-0 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 mb-4 mt-2"
            />
          </div>
          <p class="leading-[26px] mb-6 text-gray-700">
            Welkom op de website van de bruiloft van Selvan & Bertine. Hier vind
            je alle informatie over hun huwelijksdag, of je nu daggast of
            avondgast bent.
          </p>
          <p class="leading-[26px] mb-6 text-gray-700">
            Klik ook vooral even op de knop hieronder, want we hebben
            belangrijke informatie voor
            <span class="underline decoration-primary-500">alle</span> gasten!
          </p>
          <div class="flex justify-center md:justify-start">
            <Button label="Belangrijke Informatie" to="/help" />
          </div>
        </div>
        <div class="md:col-span-6 mt-8 md:mt-0">
          <img
            src="/images/mainimage.jpeg"
            alt="Main Hero"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
</template>
