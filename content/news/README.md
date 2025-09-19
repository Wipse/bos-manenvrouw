# Nieuws Content Systeem

Dit systeem maakt het mogelijk om nieuwsberichten toe te voegen via JSON bestanden, zonder dat je code hoeft aan te passen.

## Hoe werkt het?

Het systeem probeert eerst JSON bestanden te laden uit deze directory. Als dat niet lukt, valt het terug op de hardcoded berichten in de code. Dit betekent dat alle bestaande berichten blijven werken.

## Een nieuw nieuwsbericht toevoegen

### Stap 1: Maak een JavaScript bestand (aanbevolen) of JSON bestand

Maak een nieuw bestand in deze directory met de slug als naam:

- Voor lange berichten: `mijn-nieuwsbericht.js` (ondersteunt template literals)
- Voor korte berichten: `mijn-nieuwsbericht.json` (eenvoudiger)

### Stap 2: Vul de content in

**JavaScript bestand (.js) - Aanbevolen voor lange berichten:**

```javascript
export default {
  title: "Titel van het nieuwsbericht",
  date: "2025-09-20",
  image: "/images/jouw-afbeelding.jpg",

  // Optie 1: Gewone content (voor artikelen zonder side-image)
  content: `
    <p>Je content hier in HTML formaat</p>
    <h3>Subkopjes zijn mogelijk</h3>
    <p>Meer content over meerdere regels...</p>
  `,

  // Optie 2: Gesplitste content (voor artikelen met side-image)
  content_part_1: `
    <p>Dit deel staat naast de afbeelding (grid 6-6)</p>
    <p>Perfect voor introductie of eerste deel van het verhaal</p>
  `,
  content_part_2: `
    <p>Dit deel komt full-width na de afbeelding</p>
    <p>Ideaal voor de rest van het verhaal</p>
  `,

  videos: [], // Video's bovenaan (in header)
  bottom_video: ["/videos/mijn-video.mp4"], // Video onderaan artikel
  has_side_image: true,
};
```

**JSON bestand (.json) - Voor korte berichten:**

```json
{
  "title": "Titel van het nieuwsbericht",
  "date": "2025-09-20",
  "image": "/images/jouw-afbeelding.jpg",
  "content": "<p>Je content hier in HTML formaat</p><h3>Subkopjes zijn mogelijk</h3><p>Meer content...</p>",
  "videos": []
}
```

### Stap 3: Update de metadata

Voeg je nieuwsbericht toe aan `metadata.json` zodat het verschijnt in de carousel:

```json
{
  "title": "Titel van het nieuwsbericht",
  "date": "2025-09-20",
  "image": "jouw-afbeelding.jpg",
  "slug": "mijn-nieuwsbericht"
}
```

**Let op:** In de metadata gebruik je alleen de bestandsnaam voor de afbeelding (zonder `/images/`), maar in het JSON bestand zelf gebruik je het volledige pad.

## Velden uitleg

- **title**: De titel van het nieuwsbericht
- **date**: Datum in YYYY-MM-DD formaat
- **image**: Pad naar de hoofdafbeelding (begint met `/images/`)
- **content**: De inhoud in HTML formaat
- **videos**: Array met video URLs (YouTube embeds of lokale bestanden)
- **carouselImage** (optioneel): Andere afbeelding voor in de carousel
- **has_side_image** (optioneel): Boolean - toont afbeelding aan de zijkant in plaats van bovenaan (grid 6-6 layout)
- **content_part_1** (optioneel): Content dat naast de afbeelding staat (alleen bij has_side_image: true)
- **content_part_2** (optioneel): Content dat full-width komt na de afbeelding (alleen bij has_side_image: true)
- **bottom_video** (optioneel): Array met video URL - toont video onderaan het artikel

## HTML in content

Je kunt HTML gebruiken in het content veld:

- `<p>` voor paragrafen
- `<h3>`, `<h4>` voor kopjes
- `<strong>` voor vetgedrukte tekst
- `<ul>` en `<li>` voor lijsten
- `<a href="">` voor links
- `<br/>` voor regeleindes

## Voorbeeld

Zie `lang-nieuwsbericht.json` voor een volledig voorbeeld van een uitgebreid nieuwsbericht.

## Tips

1. Test je JSON syntax met een online JSON validator
2. Gebruik escape characters voor quotes in je content: `\"`
3. Zorg dat je afbeelding bestaat in de `/public/images/` directory
4. Sorteer de metadata op datum (nieuwste eerst) voor de beste gebruikerservaring
