# Bergen Open Source Conference

## 🛠️ Setup

1. `npm install`
2. `npm run dev`

## ℹ️ Handy to know

- Everything in the program comes from a JSON file located in `static/`.

### 📅 Program format

```json
{
  "title": "Event Name",
  "description": "Description",
  "from": "2023-09-20T19:24:00",
  "to": "2023-09-20T20:24:00",
  "type": "info"
}
```

- Time (`from` and `to`) should definitely include the entire date and time, it makes it easier to iterate on later.
- `type` has these types:
  - `info`
  - `talk`
  - `lightning`
  - `tbd` (More to come for sure.)
