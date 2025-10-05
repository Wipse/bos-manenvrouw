type NewsContent = {
  title: string;
  date: string;
  image: string;
  carouselImage?: string;
  content: string;
  videos?: string[];
  has_side_image?: boolean;
  content_part_1?: string; // Content naast de afbeelding
  content_part_2?: string; // Content full-width na de afbeelding
  bottom_video?: string[]; // Video's onderaan het artikel
};

type NewsMetadata = {
  title: string;
  date: string;
  image: string;
  slug: string;
};

export const useNewsContent = () => {
  // Hardcoded news items voor backwards compatibility
  const hardcodedNews: Record<string, NewsContent> = {
    "kaart-en-dansje-niet-vergeten": {
      title: "Vergeet je geschreven kaart + enveloppe niet!",
      date: "2025-10-05",
      image: "/images/attention.jpeg",
      content: `
         <p>
           Vrijdag a.s. is het zover! Wij hebben er enorm veel zin in, jij/jullie ook?
           Vergeet niet om het <a href="/help#flashmob" class="text-primary-600 hover:text-primary-700 underline"> dansje voor de flashmob</a> in te studeren 
           en de <a href="/help#card" class="text-primary-600 hover:text-primary-700 underline"> kaart voor het bruidspaar</a> mee te nemen.</p>
         </p>
        <br/>
        <p>
          We kregen vandaag de vraag van een lieve buurvrouw uit Dalen wat nu eigenlijk de achternaam 
          van Bertine is, want ze wilde op de kaart schrijven 'Aan het bruidspaar Bosman- ………', 
          maar wist de achternaam van Bertine niet. Dat staat inderdaad ook nergens op deze site, dus voor 
          iedereen die dat ook niet weet en de kaart ook graag op die manier wil adresseren: 
        </p>
        <p class="mt-2">
          Bertine haar achternaam is <strong> Kruize </strong>! 😊
        </p>
          <br />
        <p> Dit is ook gelijk het laatste nieuwsbericht vóór de huwelijksdag. <p/>
        <p> Voor ons is het ook best een beetje spannend of de site goed gelezen is, want dat weten wij niet natuurlijk. We gaan het zien op het feest!<p/>
        <p class="mt-2">En als je dit nu leest: bedankt voor het bezoeken en lezen van de site!</p>
          <br />
        <p>Tot vrijdag!</p>

      `,
    },
    wegafsluiting: {
      title: "Meer reistijd door wegafsluiting!",
      date: "2025-09-08",
      image: "/images/roadblock.jpeg",
      content: `
        <p>Op de dag van de bruiloft is de Ter Apelerstraat, vanuit Ter Apel naar Sellingen, afgesloten vanaf het gehucht Ter Wisch.</p>
        <p class="mt-2 md:mt-0">Middels borden wordt er een alternatieve route door de Sellingerbeetse (ook een gehucht bij Sellingen) aangegeven die je kunt volgen.</p>
        <p class="mt-2 md:mt-0 font-bold text-red-700">De extra reistijd is hooguit 5 minuten.</p>
        <br/>
        <p class="mt-2 md:mt-0">Dit valt op zich natuurlijk heel erg mee, maar we willen jullie bij voorbaat informeren, zodat het op de ochtend zelf geen stress geeft als je voor een afgesloten weg komt te staan.</p>
        <br/>
        <p class="mt-2 md:mt-0">Ondanks de gele omleidingsborden langs de provinciale weg Emmen- Veendam (N366, A.G. Wildervanckweg) ter hoogte van het COA Ter Apel, is het de kortste weg om gewoon de afslag Sellingen te nemen en de normale route naar Sellingen te rijden. Je komt dan vanzelf op het punt wat hierboven op de foto staat.</p>
      `,
    },
    "de-spanning-stijgt": {
      title: "De spanning stijgt!",
      date: "2025-09-02",
      image: "/images/second_meeting.jpeg",
      content: `
        <p> Het is september! De maand vóór 'trouwmaand' oktober.</p>
        <p> De spanning neemt toe, maar het bruidspaar zorgt ook goed  voor ontspanningsmomenten. </p>
        <br/>
        <p> Momenteel is het voor hen het meest spannend wanneer nou precies dat vrijgezellenfeest is!🤣 </p>
        <p> Tja…dat je dat niet weet, dát is nou precies het leuke van dat feest! Iets met planning en controle en loslaten…😉 </p>
        <br/>
        <p> De foto is zondagmiddag 31 augustus gemaakt tijdens het 2e live-overleg met de ceremoniemeesters. </p>
     `,
      videos: [],
    },
    "jouw-oefenfilmpje": {
      title: "Stuur ons ook joúw oefenfilmpje!",
      date: "2025-08-30",
      image: "/images/danceparty.jpg",
      content: `
        <p class="mt-2 md:mt-0">Het vorige filmpje heeft ons geïnspireerd om jullie te vragen om ook jullie oefeningen met ons allemaal te delen 😊</p>
        <p class="mt-2 md:mt-0">Aan de ene kant om elkaar een hart onder de riem te steken en aan de andere kant als mooie herinnering voor het bruidspaar.</p>
        <p class="mt-2 md:mt-0">Het kan niet anders dan dat het enorm genieten is voor hen als ze na hun bruiloft horen dat er een website voor hun mooiste dag bestaat en ze daar jullie filmpjes kunnen zien!</p>
        <br/>
        <p class="mt-2 md:mt-0">Stuur ons daarom jullie filmpje via de app of mail en onze webmaster zet het onder dit bericht.</p>
      `,
      videos: ["https://www.youtube.com/embed/U0hJofD9aOA"],
    },
    "druk-aan-het-oefenen": {
      title: "Druk aan het oefenen!?",
      date: "2025-08-23",
      image: "/images/Cards_Sending.jpeg",
      carouselImage: "/images/mockup.png",
      content: `
        <p class="mt-2 md:mt-0">Zoals op het filmpje te zien is, wordt er al druk geoefend voor de flashmob.</p>
        <p class="mt-2 md:mt-0">Hier zien jullie een tante en een nichtje van Selvan in actie.</p>
        <p class="mt-2 md:mt-0">En jij/jullie? Ook al een poging gedaan?</p>
        <p class="mt-2 md:mt-0">Je laat het je toch niet gebeuren dat jij straks uit de toon valt, omdat je de pasjes niet kent? 😉</p>
        `,
      videos: ["/videos/roelie.mp4"],
    },
    "website-live": {
      title: "Website gaat de lucht in!!!",
      date: "2025-08-09",
      image: "/images/mockup.png",
      carouselImage: "/images/mockup.png",
      content: `
        <p>Het is gelukt! Vóórdat de avondgasten hun kaart in de bus hebben liggen. De websitebouwer (neef van Bertine) heeft heel erg z'n best gedaan om de deadline te halen. We zijn enorm blij met het resultaat.</p>
        <p class="mt-2">3 hoeraatjes voor Wisse!!</p>
      `,
    },
    "uitnodigingen-verstuurd": {
      title: "Geen bruiloftsfeest zonder gasten!",
      date: "2025-08-13",
      image: "/images/Cards_Sending.jpeg",
      content: `
        <p>Selvan & Bertine hebben op verschillende momenten zoveel mogelijk zelf de uitnodigingen rondgebracht, zodat ze zeker weten dat jullie de kaart ontvangen! Dat je dit nu leest, betekent dat dat inderdaad gelukt is! 😉 </p>
        <p class="mt-2"> Op de foto is het bruidspaar druk bezig met het vouwen en schrijven van de kaarten. Met de hulp van maar liefst 2 schoonzussen is deze flinke klus geklaard! 😊 </p>
      `,
      videos: [],
    },
    "wist-je-datje": {
      title: "We zijn op zoek naar leuke wist-je-datjes!",
      date: "2025-08-10",
      image: "/images/diduknow.jpg",
      content: `
        <p>Heb je leuke verhalen of feitjes over Selvan en/of Bertine, die geschikt zijn om in de feestgids te zetten? Laat het ous weten, wij horen het graag!</p>
        <br/>
        <a href="mailto:eeltje.heida@chello.nl,elyseschonewille@hotmail.com" class="underline w-fit hover:decoration-primary-500">
          <p>Mail ous hier!</p> 
        </a>
      `,
      videos: [],
    },
    "niets-in-de-gaten": {
      title: "Totáál niets in de gaten…",
      date: "2025-09-19",
      image: "/images/mainimage.jpeg",
      content: `
        <p>Totáál niets in de gaten…</p>
      `,
    },
  };

  // Laad JSON of JS content voor een specifieke slug
  const loadNewsContent = async (slug: string): Promise<NewsContent | null> => {
    try {
      // Probeer eerst JS bestand te laden via API
      const data = await $fetch<NewsContent>(`/api/content/news/${slug}`);
      return data;
    } catch (error) {
      // Fallback naar hardcoded content
      return hardcodedNews[slug] || null;
    }
  };

  // Haal alle beschikbare news metadata op
  const getNewsMetadata = async (): Promise<NewsMetadata[]> => {
    try {
      // Probeer metadata.json te laden via API
      const data = await $fetch<NewsMetadata[]>("/api/content/news/metadata");
      return data;
    } catch (error) {
      // Fallback naar hardcoded metadata
      return [
        {
          title: "Denk je aan de kaart?",
          date: "2025-10-05",
          image: "daggasten.jpeg",
          slug: "kaart-en-dansje-niet-vergeten",
        },
        {
          title: "Meer reistijd door wegafsluiting",
          date: "2025-09-08",
          image: "roadblock.jpeg",
          slug: "wegafsluiting",
        },
        {
          title: "De spanning stijgt!",
          date: "2025-09-02",
          image: "second_meeting.jpeg",
          slug: "de-spanning-stijgt",
        },
        {
          title: "Stuur ons ook joúw oefenfilmpje!",
          date: "2025-08-30",
          image: "danceparty.jpg",
          slug: "jouw-oefenfilmpje",
        },
        {
          title: "Druk aan het oefenen!?",
          date: "2025-08-23",
          image: "danstante.png",
          slug: "druk-aan-het-oefenen",
        },
        {
          title: "Website gaat de lucht in!!!",
          date: "2025-08-09",
          image: "mockup.png",
          slug: "website-live",
        },
        {
          title: "Geen bruiloftsfeest zonder gasten!",
          date: "2025-08-13",
          image: "Cards_Sending.jpeg",
          slug: "uitnodigingen-verstuurd",
        },
        {
          title: "Heb je nog wist-je-datjes?",
          date: "2025-08-10",
          image: "diduknow.jpg",
          slug: "wist-je-datje",
        },
      ];
    }
  };

  return {
    loadNewsContent,
    getNewsMetadata,
  };
};
