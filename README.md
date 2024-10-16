# Bergen Open Source Conference

## 🛠️ Setup

1. `npm install`
2. `npm run dev`

## Internationalization

Translation strings can be found in (translations.ts)[src/i18n/translations.ts].

Usage:

```ts
---
import { useTranslation } from "../../i18n/utils";
const t = useTranslation(Astro.url);
---
<p>{t("some.string")}</p>
```

### 📅 Program format

- Everything in the program comes from JSON files located in `src/program`.

- See `program.d.ts` for updated schema, here is an example that might be outdated:
  - To add english translations, add a key to the program suffixed with `_en`. Ex: `{ "title": "Tittel", "title_en": "Title English" }` which will be converted to `{ "title": "Title English" }` if the user has selected english.

```json
{
  "date": "2023-09-20",
  "location": "Kvarteret, Bergen",
  "locationUrl": "url",
  "address": "Christies gate 14, 5015 Bergen",
  "schedule": [
    {
      "title": "Program navn",
      "title_en": "Event Name",
      "description": "Beskrivelse",
      "description_en": "Description",
      "speaker": {
        "name": "Name",
        "description": "Beskrivelse",
        "description_en": "Description",
        "imageUrl": "url to image"
      },
      "from": "2023-09-20T19:24:00",
      "to": "2023-09-20T20:24:00",
      "type": "info",
      "attachments": [{ "name": "File name", "url": "url to file" }],
      "videoUrl": "url to video"
    }
  ],
  "sponsors": [
    {
      "name": "Sponsor name",
      "logo": "url to logo",
      "url": "url to sponsor"
    }
  ]
}
```

- Time (`from` and `to`) should definitely include the entire date and time, it makes it easier to iterate on later.
- `type` has these types:
  - `info`
  - `talk`
  - `lightning`
  - `tbd` (More to come for sure.)
