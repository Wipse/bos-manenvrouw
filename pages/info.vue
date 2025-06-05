<template>
  <div class="min-h-screen bg-gradient-to-b from-primary-50/30 to-white">
    <!-- Header met namen -->
    <header class="relative py-16 text-center">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 class="font-dancing text-5xl font-bold text-primary-700">
          Selvan & Bertine
        </h1>
        <p class="mt-4 text-lg text-primary-600">
          Nodigen je uit voor hun bruiloftsfeest
        </p>
      </div>
    </header>

    <!-- Hoofdcontent -->
    <main class="py-8">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <!-- Feest Sectie -->
        <section
          class="relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-100"
        >
          <div
            class="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-primary-600/10"
          />
          <div class="relative">
            <h2 class="font-dancing text-3xl font-semibold text-primary-700">
              Het Feest
            </h2>
            <div class="mt-6 grid gap-8 md:grid-cols-2">
              <div>
                <h3 class="text-xl font-semibold text-primary-800">Wanneer?</h3>
                <p class="mt-2 text-gray-600">
                  We verwachten je op het feest vanaf [TIJD].
                </p>
                <p class="mt-1 text-gray-600">Trek je dansschoenen aan! 🎉</p>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-primary-800">Waar?</h3>
                <div class="mt-2 space-y-1 text-gray-600">
                  <p>[LOCATIE NAAM]</p>
                  <p>[ADRES]</p>
                  <p>[POSTCODE + PLAATS]</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Foto Galerij Placeholder -->
        <section class="my-12 grid gap-6 md:grid-cols-3">
          <div class="aspect-[4/3] rounded-2xl bg-primary-600/20" />
          <div class="aspect-[4/3] rounded-2xl bg-primary-600/20" />
          <div class="aspect-[4/3] rounded-2xl bg-primary-600/20" />
        </section>

        <!-- Praktische Informatie -->
        <section
          class="relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-100"
        >
          <div
            class="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-primary-600/10"
          />
          <div class="relative grid gap-8 md:grid-cols-3">
            <div class="md:col-span-2">
              <h2 class="font-dancing text-3xl font-semibold text-primary-700">
                Praktische Informatie
              </h2>
              <div class="mt-6 space-y-8">
                <div>
                  <h3 class="text-xl font-semibold text-primary-800">
                    Parkeren
                  </h3>
                  <p class="mt-2 text-gray-600">
                    Er is voldoende parkeergelegenheid bij de locatie.
                  </p>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-primary-800">
                    Dresscode
                  </h3>
                  <p class="mt-2 text-gray-600">
                    Feestelijk! Trek aan waar jij je mooi in voelt.
                  </p>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-primary-800">
                    Cadeautip
                  </h3>
                  <p class="mt-2 text-gray-600">
                    [CADEAUSUGGESTIE OF ANDERE WENSEN]
                  </p>
                </div>
              </div>
            </div>
            <div
              class="flex flex-col items-center justify-center rounded-2xl bg-primary-50/50 p-6 text-center"
            >
              <h3 class="font-dancing text-2xl font-semibold text-primary-700">
                Ben je een daggast?
              </h3>
              <p class="mt-3 text-gray-600">
                Bekijk hier het volledige programma van de dag
              </p>
              <NuxtLink
                to="/dag-programma"
                class="mt-6 inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Naar het dagprogramma
              </NuxtLink>
            </div>
          </div>
        </section>

        <!-- Contact Sectie -->
        <section
          class="mt-12 rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-100"
        >
          <h2 class="font-dancing text-3xl font-semibold text-primary-700">
            Vragen?
          </h2>
          <p class="mt-4 text-gray-600">
            Heb je nog vragen over het feest? Neem dan contact op met onze
            ceremoniemeesters:
          </p>
          <div class="mt-4 space-y-2 text-gray-600">
            <p>[NAAM CEREMONIEMEESTER 1] - [TELEFOONNUMMER]</p>
            <p>[NAAM CEREMONIEMEESTER 2] - [TELEFOONNUMMER]</p>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>

<style>
/* Voeg Google Fonts toe voor 'Dancing Script' */
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap");

.font-dancing {
  font-family: "Dancing Script", cursive;
}
</style>
