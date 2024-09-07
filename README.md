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

```json
{
  "title": "Event Name",
  "description": "Description",
  "speaker": "Name",
  "from": "2023-09-20T19:24:00",
  "to": "2023-09-20T20:24:00",
  "type": "info",
  "attachments": [
      { "name": "File name", "url": "url to file" }
  ],
  "videoUrl": "url to video"
}
```

- Time (`from` and `to`) should definitely include the entire date and time, it makes it easier to iterate on later.
- `type` has these types:
  - `info`
  - `talk`
  - `lightning`
  - `tbd` (More to come for sure.)
