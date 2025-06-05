<template>
  <div class="min-h-screen bg-gradient-to-b from-primary-50/30 to-white">
    <!-- Header met namen -->
    <header class="relative py-16 text-center">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 class="font-dancing text-5xl font-bold text-primary-700">
          Selvan & Bertine
        </h1>
        <p class="mt-4 text-lg text-primary-600">Programma voor de daggasten</p>
      </div>
    </header>

    <!-- Hoofdcontent -->
    <main class="py-8">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <!-- Tijdlijn -->
        <section
          class="relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-100"
        >
          <div
            class="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-primary-600/10"
          ></div>
          <div class="relative">
            <h2 class="font-dancing text-3xl font-semibold text-primary-700">
              Dagprogramma
            </h2>
            <div class="mt-8 space-y-12">
              <!-- Gemeentehuis -->
              <div class="relative pl-8">
                <div
                  class="absolute left-0 top-1 h-4 w-4 rounded-full bg-primary-600"
                ></div>
                <time class="block text-sm font-semibold text-primary-600"
                  >11:00</time
                >
                <h3 class="mt-2 text-xl font-semibold text-primary-800">
                  Gemeentehuis
                </h3>
                <p class="mt-2 text-gray-600">
                  We komen samen bij het gemeentehuis voor de officiële
                  ceremonie.
                </p>
                <div class="mt-4 rounded-xl bg-primary-600/20 p-4">
                  <div class="space-y-1 text-sm text-primary-800">
                    <p>[ADRES GEMEENTEHUIS]</p>
                    <p>Parkeren kan [PARKEERINFORMATIE]</p>
                  </div>
                </div>
              </div>

              <!-- Kerkelijke inzegening -->
              <div class="relative pl-8">
                <div
                  class="absolute left-0 top-1 h-4 w-4 rounded-full bg-primary-600"
                ></div>
                <time class="block text-sm font-semibold text-primary-600"
                  >13:30</time
                >
                <h3 class="mt-2 text-xl font-semibold text-primary-800">
                  Kerkelijke inzegening
                </h3>
                <p class="mt-2 text-gray-600">
                  De kerkelijke ceremonie vindt plaats in [NAAM KERK].
                </p>
                <div class="mt-4 rounded-xl bg-primary-600/20 p-4">
                  <div class="space-y-1 text-sm text-primary-800">
                    <p>[ADRES KERK]</p>
                    <p>Parkeren kan [PARKEERINFORMATIE]</p>
                  </div>
                </div>
              </div>

              <!-- Receptie & Diner -->
              <div class="relative pl-8">
                <div
                  class="absolute left-0 top-1 h-4 w-4 rounded-full bg-primary-600"
                ></div>
                <time class="block text-sm font-semibold text-primary-600"
                  >[TIJD]</time
                >
                <h3 class="mt-2 text-xl font-semibold text-primary-800">
                  Receptie & Diner
                </h3>
                <p class="mt-2 text-gray-600">
                  We vervolgen de dag met een feestelijke receptie, gevolgd door
                  het diner.
                </p>
                <div class="mt-4 rounded-xl bg-primary-600/20 p-4">
                  <div class="space-y-1 text-sm text-primary-800">
                    <p>[LOCATIE NAAM]</p>
                    <p>[ADRES]</p>
                    <p>[PARKEERINFORMATIE]</p>
                  </div>
                </div>
              </div>

              <!-- Feestavond -->
              <div class="relative pl-8">
                <div
                  class="absolute left-0 top-1 h-4 w-4 rounded-full bg-primary-600"
                ></div>
                <time class="block text-sm font-semibold text-primary-600"
                  >[TIJD]</time
                >
                <h3 class="mt-2 text-xl font-semibold text-primary-800">
                  Feestavond
                </h3>
                <p class="mt-2 text-gray-600">
                  We sluiten de dag af met een spetterend feest, waarbij ook de
                  avondgasten aansluiten.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Praktische Informatie -->
        <section
          class="mt-12 rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-100"
        >
          <h2 class="font-dancing text-3xl font-semibold text-primary-700">
            Praktische Informatie
          </h2>
          <div class="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 class="text-xl font-semibold text-primary-800">Dresscode</h3>
              <p class="mt-2 text-gray-600">[DRESSCODE INFORMATIE]</p>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-primary-800">Cadeautip</h3>
              <p class="mt-2 text-gray-600">
                [CADEAUSUGGESTIE OF ANDERE WENSEN]
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-primary-800">
                Bijzonderheden
              </h3>
              <p class="mt-2 text-gray-600">
                [EVENTUELE SPECIALE VERZOEKEN OF INFORMATIE]
              </p>
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
            Heb je nog vragen? Neem dan contact op met onze ceremoniemeesters:
          </p>
          <div class="mt-4 space-y-2 text-gray-600">
            <p>[NAAM CEREMONIEMEESTER 1] - [TELEFOONNUMMER]</p>
            <p>[NAAM CEREMONIEMEESTER 2] - [TELEFOONNUMMER]</p>
          </div>
        </section>
      </div>
    </main>

    <!-- Footer met link terug -->
    <footer class="mt-16 border-t border-gray-200 py-8">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <p class="text-center text-sm text-gray-500">
          <NuxtLink
            to="/info"
            class="font-medium text-primary-600 hover:text-primary-500"
            >← Terug naar de hoofdpagina</NuxtLink
          >
        </p>
      </div>
    </footer>
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
