<template>
  <section>
    <!-- Top Section -->
    <div
      class="w-screen h-[65vh] overflow-hidden"
      style="
        background: linear-gradient(
          to bottom,
          #f7f7ef 0%,
          #f7f7ef 75%,
          #ffffff 100%
        );
      "
    >
      <div
        class="container flex flex-col items-center justify-center pt-32 px-4"
      >
        <div class="max-w-3xl mx-auto text-center">
          <Heading title="Hulp nodig!" size="h1" />
          <div
            class="min-h-1 md:w-1/2 w-3/4 mx-auto rounded-full bg-primary-500 mb-4 mt-2"
          ></div>
          <p class="leading-[26px] mb-6 text-center text-gray-700">
            Welkom op de website van de bruiloft van Selvan en Bertine. Hier
            vind je alle praktische informatie over hun huwelijksdag, of je nu
            daggast of avondgast bent.
          </p>
        </div>
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="bg-white w-screen h-fit">
      <div class="container px-4 py-8">
        <!-- First Article -->
        <div class="max-w-4xl mx-auto md:col-span-8 md:col-start-3">
          <Heading title="Flashmob" size="h2" class="-mb-2" />
          <div
            class="min-h-0.5 md:w-1/4 w-1/2 rounded-full bg-primary-500 mb-4 mt-2"
          />
          <p class="leading-[26px] mb-6 text-gray-900">
            Ter verhoging van de feestvreugde in de avond gaan we rond 22 uur
            met alle gasten een heuse flashmob doen (heb je geen idee wat dit
            is, zoek het dan even op via YouTube)
          </p>
          <p class="leading-[26px] mb-6 text-gray-900">
            We dansen op het nummer 'I gotta feeling' van de Black Eyed Peas. De
            'moves' worden hier stap-voor-stap uitgelegd:
          </p>
          <iframe
            class="w-full h-64 md:h-96 mt-6 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/_7f5_5-Zyi4"
            title="Flashmob Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
          <p class="leading-[26px] mt-6 text-gray-900">
            De ceremoniemeesters beginnen, gevolgd door de naaste familie,
            daarna alle andere daggasten, met vervolgens steeds meer aanwezigen,
            totdat de hele zaal meedoet en Selvan & Bertine staan te kijken met
            een blik van "wat gebeurt hííééér?!" <br />
            Wij verheugen ons nu al op hun verraste gezichten!
          </p>
          <p class="leading-[26px] mt-3 text-gray-900">
            We willen jullie natuurlijk vragen om flink te oefenen thuis. Dit
            kan al veel lol en voorpret opleveren; frustratie ook wellicht, maar
            in ons allen schuilt vast wel een beetje een Barrie Stevens,
            dus…."vooral doorgaan!" <br />
            Het gaat om de spontaniteit en het verrassingselement, dus het hoeft
            echt niet perfect! Hier geldt de Olympische Gedachte: meedoen is
            belangrijker dan presteren!
          </p>
        </div>

        <!-- Second Article -->
        <div
          class="max-w-4xl mx-auto md:col-span-8 md:col-start-3 mt-16 md:mt-24 mb-16 md:mb-32"
        >
          <Heading title="Kaartje" size="h2" class="-mb-2" />
          <div
            class="min-h-0.5 md:w-1/5 w-1/3 rounded-full bg-primary-500 mb-4 mt-2"
          />
          <p class="leading-[26px] mb-6 text-gray-900">
            De tweede verrassing die we voor Selvan & Bertine in petto hebben,
            heeft betrekking op de weken na hun huwelijksdag. <br />
            Want hoe leuk zou het voor het pasgetrouwde stel zijn om na hun
            Grote Dag van alle aanwezigen op hun feest, elke dag een kaart in de
            bus te ontvangen? <br />
            Op deze manier kunnen zij het warme en liefdevolle gevoel van hun
            huwelijksdag nog tijden vasthouden.
          </p>
          <p class="leading-[26px] mb-6 text-gray-900">
            We willen jullie daarom vragen om per gezin (maar per persoon mag
            natuurlijk ook!) een kaart voor het bruidspaar te kopen en daarop
            jullie wensen, herinneringen, anekdotes, foto's, creatieve
            uitspattingen, etc., etc., te zetten/plakken. <br />
            Let wel: het moet te versturen zijn via brievenbuspost!
          </p>
          <p class="leading-[26px] mt-6 text-gray-900">
            Graag in een enveloppe, voorzien van volledig adres én (voldoende)
            postzegel(s) en dan de enveloppe meenemen naar het feest 's avonds.
            <br />
            Adres bruidspaar: <br />
            <span class="font-bold">Reimersstraat 1</span> <br />
            <span class="font-bold">7751 AW DALEN</span>
          </p>
          <p class="leading-[26px] mt-3 text-gray-900">
            Wij zorgen dat er iemand bij de ingang van de zaal staat om de
            enveloppen in ontvangst te nemen. We hebben de vader van de
            bruidegom bereid gevonden om elke dag één van de kaarten te posten
            (waarvoor alvast hartelijk dank Bertus!!)
          </p>
          <p class="leading-[26px] mt-3 text-gray-900">
            En ook hier geldt: je kunt het zo groot en ingewikkeld maken als je
            zelf wilt, maar het gaat om het meedoen!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
