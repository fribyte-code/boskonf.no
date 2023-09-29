# Konferanse

Navn er TBD.

## Oppsett

1. `zola serve -O`

## Kjekt å vite

- Det er få sidemaler per nå. Mulig vi ikke trenger så mange.
- Alt i programmet kommer fra en json-fil som ligger i `static/`.

### Program-format

```json
{
  "title": "Navn på event",
  "decription": "Beskrivelse",
  "from": "2023-09-20T19:24:00",
  "to": "2023-09-20T20:24:00",
  "type": "info"
}
```

- Tidspunkt (`from` og `to`) burde absolutt ta med hele datoen og tidspunkt, det
  gjør det enklere å iterere på senere.
- `type` har disse typene:
  - `info`
  - `talk`
  - `lightning`
  - `tbd` (Kommer sikkert mer.)
