<template>
  <SectionsHeader />

  <!-- Hero Section -->
  <section class="bg-primary-50 w-screen pt-32 md:pt-28 pb-16">
    <div class="container mx-auto px-4 text-center">
      <div class="max-w-3xl mx-auto">
        <Heading title="Daggasten" size="h1" />
        <div
          class="min-h-1 md:w-1/2 w-3/4 mx-auto rounded-full bg-gradient-to-r from-primary-400 to-primary-600 mb-6 mt-2"
        ></div>
        <p class="leading-[26px] text-gray-700 text-lg">
          Alle praktische informatie voor een prachtige dag vol liefde en
          plezier!
        </p>
      </div>
    </div>
  </section>

  <!-- Main Content -->
  <section class="bg-white py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto space-y-12">
        <!-- Erehaag Section -->
        <div class="flex flex-col lg:flex-row gap-6">
          <div
            class="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 lg:flex-1"
          >
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 pb-1 bg-primary-500 rounded-full">
                <Icon name="mdi:heart" class="size-6 text-white" />
              </div>
              <div>
                <h2 class="text-2xl font-bold text-gray-900">
                  Erehaag voor het bruidspaar
                </h2>
                <p class="text-primary-600 font-medium">
                  10:45 uur - Gemeentehuis Sellingen
                </p>
              </div>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-sm">
              <p class="leading-relaxed text-gray-700 mb-4">
                Het bruidspaar heeft gevraagd of alle daggasten zich
                <strong class="text-primary-600">om 10.45 uur</strong> willen
                verzamelen vóór de ingang van het oude gedeelte van het
                gemeentehuis, <strong>Dorpsstraat 1 in Sellingen</strong>.
              </p>
              <p class="leading-relaxed text-gray-700">
                Hun wens is dat we daar met elkaar een soort
                <strong class="text-primary-600">erehaag</strong> maken door aan
                beide kanten van het pad naar de grote voordeur te gaan staan.
                Als Selvan & Bertine dan arriveren in hun mooie trouwauto,
                kunnen ze tussen ons doorlopen naar binnen.
              </p>
            </div>
          </div>
          <!-- Gemeentehuis Image -->
          <div class="text-center lg:w-80 lg:flex-shrink-0">
            <img
              src="/images/gemeentehuis_sellingen.jpeg"
              alt="Gemeentehuis Sellingen"
              class="rounded-2xl w-full lg:h-auto shadow-lg"
            />
          </div>
        </div>

        <!-- Parkeren Section -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="p-3 pb-1.5 bg-blue-500 rounded-full">
              <Icon name="mdi:car" class="size-6 text-white" />
            </div>
            <h2 class="text-2xl font-bold text-gray-900">
              Parkeren in Sellingen
            </h2>
          </div>

          <div
            class="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500 mb-6"
          >
            <p class="leading-relaxed text-gray-700 mb-4">
              <strong class="text-blue-700">Belangrijk:</strong> Het parkeren in
              de omgeving van het gemeentehuis is niet altijd eenvoudig, dus ons
              advies is: <strong>kom ruimschoots op tijd</strong>. Dan kun je
              rustig naar een parkeerplek zoeken.
            </p>
            <p class="leading-relaxed text-gray-700">
              Alle locaties in Sellingen zijn op loopafstand van elkaar, dus je
              kunt de auto in principe laten staan bij het verplaatsen van de
              éne naar de andere locatie.
            </p>
          </div>

          <!-- Sellingen Map -->
          <div class="rounded-2xl mb-6 text-center">
            <img
              src="/images/map_sellingen.png"
              alt="Overzichtskaart Sellingen"
              class="rounded-2xl w-full h-auto shadow-lg"
            />
          </div>

          <!-- Parking Options -->
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <h3
                class="text-lg font-semibold text-gray-900 flex items-center gap-2"
              >
                <Icon name="mdi:parking" class="size-5 text-blue-500" />
                Parkeermogelijkheden:
              </h3>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <div
                    class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                  ></div>
                  <span class="text-gray-700"
                    >Achter en rechts naast het gemeentehuis</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <div
                    class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                  ></div>
                  <span class="text-gray-700"
                    >Op de parkeerplekken langs de Dorpsstraat
                  </span>
                </li>
                <li class="flex items-start gap-3">
                  <div
                    class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                  ></div>
                  <span class="text-gray-700"
                    >Bij "Hof van Sellingen", tegenover het gemeentehuis</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <div
                    class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"
                  ></div>
                  <span class="text-gray-700"
                    ><strong>Bij de Ned. Herv. kerk, Torenstraat 12</strong> -
                    op het grasveld (beste optie bij goed weer)</span
                  >
                </li>
              </ul>
            </div>
            <div class="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
              <h4 class="font-semibold text-green-800 mb-2">💡 Aanbevolen</h4>
              <p class="text-green-700 text-sm leading-relaxed">
                Als het weer het toelaat, is parkeren bij de kerk (Torenstraat
                12) de beste optie. Je kunt zowel op het grasveld bij de kerk
                als bij gebouw 'De Sprankel' parkeren.
              </p>
            </div>
          </div>
        </div>

        <!-- Timeline Section -->
        <div>
          <div class="flex items-center gap-3 mb-8">
            <div class="p-3 pb-1.5 bg-primary-500 rounded-full">
              <Icon name="mdi:clock" class="size-6 text-white" />
            </div>
            <h2 class="text-2xl font-bold text-gray-900">
              Programma van de dag
            </h2>
          </div>

          <div class="space-y-6">
            <!-- Timeline Item 1 -->
            <div class="flex gap-6">
              <div class="flex flex-col items-center">
                <div class="w-4 h-4 bg-primary-500 rounded-full"></div>
                <div class="w-0.5 h-16 bg-primary-200 mt-2"></div>
              </div>
              <div class="flex-1 pb-8">
                <div
                  class="bg-white rounded-xl border-2 border-primary-100 p-6"
                >
                  <h3 class="font-semibold text-primary-600 text-lg mb-2">
                    10:45 - 11:30 uur
                  </h3>
                  <h4 class="font-bold text-gray-900 mb-3">
                    Gemeente Sellingen
                  </h4>
                  <p class="text-gray-700 leading-relaxed">
                    Erehaag en burgerlijke ceremonie (~30 minuten) in het
                    gemeentehuis, Dorpsstraat 1.
                  </p>
                </div>
              </div>
            </div>

            <!-- Timeline Item 2 -->
            <div class="flex gap-6">
              <div class="flex flex-col items-center">
                <div class="w-4 h-4 bg-primary-500 rounded-full"></div>
                <div class="w-0.5 h-16 bg-primary-200 mt-2"></div>
              </div>
              <div class="flex-1 pb-8">
                <div
                  class="bg-white rounded-xl border-2 border-primary-100 p-6"
                >
                  <h3 class="font-semibold text-primary-600 text-lg mb-2">
                    11:30 - 13:00 uur
                  </h3>
                  <h4 class="font-bold text-gray-900 mb-3">
                    Herberg Sellingen
                  </h4>
                  <p class="text-gray-700 leading-relaxed mb-3">
                    Lunch bij restaurant "Herberg Sellingen", Dorpsstraat 37
                    (450 meter van gemeentehuis).
                  </p>
                  <p class="text-sm text-orange-600 font-medium">
                    ⚠️ Beperkte parkeerplekken bij het restaurant
                  </p>
                </div>
              </div>
            </div>

            <!-- Timeline Item 3 -->
            <div class="flex gap-6">
              <div class="flex flex-col items-center">
                <div class="w-4 h-4 bg-primary-500 rounded-full"></div>
                <div class="w-0.5 h-16 bg-primary-200 mt-2"></div>
              </div>
              <div class="flex-1 pb-8">
                <div
                  class="bg-white rounded-xl border-2 border-primary-100 p-6"
                >
                  <h3 class="font-semibold text-primary-600 text-lg mb-2">
                    13:30 uur
                  </h3>
                  <h4 class="font-bold text-gray-900 mb-3">Ned. Herv. Kerk</h4>
                  <p class="text-gray-700 leading-relaxed">
                    Kerkelijke inzegening van het huwelijk, Torenstraat 12 (5
                    minuten lopen, 450 meter).
                  </p>
                </div>
              </div>
            </div>

            <!-- Timeline Item 4 -->
            <div class="flex gap-6">
              <div class="flex flex-col items-center">
                <div class="w-4 h-4 bg-primary-500 rounded-full"></div>
              </div>
              <div class="flex-1">
                <div
                  class="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl p-6"
                >
                  <h3 class="font-semibold text-primary-100 text-lg mb-2">
                    15:30 uur →
                  </h3>
                  <h4 class="font-bold text-white mb-3">
                    Zaal Mulder, Hardenberg
                  </h4>
                  <p class="text-primary-100 leading-relaxed mb-3">
                    Het bruidspaar gaat eerst fotoshooten. Wij gaan alvast naar
                    de feestlocatie!
                  </p>
                  <div class="space-y-2 text-sm">
                    <p class="text-primary-100">
                      <strong>17:30 uur:</strong> Diner wordt geserveerd
                    </p>
                    <p class="text-primary-100">
                      <strong>20:30 uur:</strong> Avondgasten arriveren - het
                      feest kan beginnen! 🎉
                    </p>
                  </div>
                  <p class="text-primary-200 text-sm mt-3">
                    ✅ Volop parkeermogelijkheid bij Zaal Mulder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <SectionsFooter />
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>
