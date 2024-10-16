import type { Program } from "./program";

const program2024: Program = {
  date: "2024-11-07",
  location: "Kvarteret, Bergen",
  address: "Olav Kyrres gate 49, 5015 Bergen",
  locationUrl: "https://www.openstreetmap.org/node/6137059358",
  schedule: [
    {
      title: "Dørene åpner",
      title_en: "Doors open",
      description: "Prøv å være tidlig ute!",
      description_en: "Try to arrive early!",
      image: "TODO: path to some image in static dir",
      from: "2024-11-07T16:30:00",
      to: "2024-11-07T17:00:00",
      type: "info",
    },
    {
      title: "Kort introduksjon",
      title_en: "Short introduction",
      description: "Av friBytes egne Christian K. Engelsen.",
      description_en: "By friBytes' own Christian K. Engelsen.",
      image: "TODO: path to some image in static dir",
      from: "2023-11-02T17:00:00",
      to: "2023-11-02T17:10:00",
      type: "info",
    },
    {
      title: "Introduksjon til Open Source",
      title_en: "Introduction to Open Source",
      description:
        "Sindre gir en rask introduksjon til Open Source og forteller om fordelene, kjente prosjekter og hvor du starter.",
      description_en:
        "Sindre gives a quick introduction to Open Source and talks about its benefits, well-known projects, and how to get started.",
      speaker: {
        name: "Sindre Kjelsrud",
        description: "Utvikler, Capgemini",
        description_en: "Software Engineer, Capgemini",
        imageUrl: "/speakers/Sindre-Kjelsrud.webp",
      },
      image: "TODO: path to some image in static dir",
      from: "2024-11-07T17:10:00",
      to: "2024-11-07T17:20:00",
      type: "talk",
    },
    {
      title: "Hvor er damene?",
      title_en: "Where are the women?",
      description:
        "Vi har sett på kvinneandelen i tekniske roller i NAV IT, og tallene er ikke oppmuntrende. Utforsk IT-verdenens usynlige barrierer og hvordan vi kan skape et mer inkluderende arbeidsliv. Hør direkte fra kvinner i tech og få fem konkrete tips for å øke inkludering og trivsel for alle!",
      description_en:
        "We have looked at the percentage of women in technical roles at NAV IT, and the numbers are not encouraging. Explore the invisible barriers in the IT world and how we can create a more inclusive work environment. Hear directly from women in tech and get five concrete tips for increasing inclusion and well-being for everyone!",
      speaker: {
        name: "Caroline Winther & Aurora Christine Hofman",
        description: "Data Engineer & Utvikler, NAV",
        description_en: "Data Engineer & Developer, NAV",
        imageUrl: "/speakers/Caroline-Winther_Aurora-C-Hofman.webp",
      },
      image: "TODO: path to some image in static dir",
      from: "2024-11-07T17:30:00",
      to: "2024-11-07T18:00:00",
      type: "talk",
    },
    {
      title: "Mat",
      title_en: "Food",
      description: "Matpause",
      description_en: "Food break",
      image: "TODO: path to some image in static dir",
      from: "2024-11-07T18:00:00",
      to: "2024-11-07T19:00:00",
      type: "break",
    },
    {
      title:
        "Bluesky & ATProto - The future of social media for the open Internet",
      title_en:
        "Bluesky & ATProto - The future of social media for the open Internet",
      description:
        "Bluesky og ATProto (Authenticated Protocol) ønsker å bygge et åpent sosialt nettverk hvor data flyter fritt og alle kan delta. Denne talken gir innsikt i ATProto og Bluesky, samt utfordringer og løsninger i federerte sosiale nettverk.",
      description_en:
        "Bluesky and ATProto (Authenticated Protocol) want to build an open social network where data flows freely and everyone can participate. This talk provides insights into ATProto and Bluesky, as well as challenges and solutions in federated social networks.",
      speaker: {
        name: "Snorre Magnus Davøen",
        description: "Senior Developer, Bilberry Technologies",
        description_en: "Senior Developer, Bilberry Technologies",
        imageUrl: "/speakers/Snorre_Magnus_Davøen.jpg",
      },
      image: "TODO: path to some image in static dir",
      from: "2024-11-07T19:00:00",
      to: "2024-11-07T19:20:00",
      type: "talk",
    },
    {
      title: "Om Bærekraftig Emballasje til Open Source Moduler",
      title_en: "On Sustainable Packaging for Open Source Modules",
      description:
        "Moderne open source moduler pakkes ofte inn i Docker containere, NPM, Maven eller Nuget pakker. Dette gjør jobben fryktelig mye mer lettvint for både programvare- og plattform utviklere. Likevel, fører disse pakkene med seg en del overhead. I denne presentasjonen vil vi se på implikasjonene for bærekraften til programvaren vår og hva vi eventuelt kunne gjort med det.",
      description_en:
        "Modern open source modules are often packaged in Docker containers, NPM, Maven, or NuGet packages. This makes life significantly easier for both software and platform developers. However, these packages come with a certain amount of overhead. In this presentation, we will examine the implications for the sustainability of our software and what we might be able to do about it.",
      speaker: {
        name: "Kent Inge Fagerland Simonsen",
        description: "Konsulent, TietoEvry (Guru, friByte)",
        description_en: "Consultant, TietoEvry (Guru, friByte)",
        imageUrl: "/speakers/Kent-Inge-Fagerland-Simonsen.webp",
      },
      image: "TODO: path to some image in static dir",
      from: "2024-11-07T19:20:00",
      to: "2024-11-07T19:30:00",
      type: "talk",
    },
    {
      title: "Tale",
      title_en: "Speech",
      description: "Ledig tale slot",
      description_en: "Available speech slot",
      speaker: {
        name: "Ukjent taler",
        description: "Er dette deg? Ta kontakt!",
        description_en: "Is this you? Get in touch!",
      },
      image: "TODO: path to some image in static dir",
      from: "2024-11-07T19:30:00",
      to: "2024-11-07T19:50:00",
      type: "talk",
    },
    {
      title: "Lyntale",
      title_en: "Lightning Talk",
      description: "Ledig lyntale slot",
      description_en: "Available lightning talk slot",
      speaker: {
        name: "Ukjent taler",
        description: "Er dette deg? Ta kontakt!",
        description_en: "Is this you? Get in touch!",
      },
      image: "TODO: path to some image in static dir",
      from: "2024-11-07T19:50:00",
      to: "2024-11-07T20:00:00",
      type: "talk",
    },
    {
      title: "Takke for kvelden",
      description: "Takk for at du kom, de som vil delta på quiz blir igjen!",
      image: "TODO: path to some image in static dir",
      from: "2024-11-07T20:00:00",
      to: "2024-11-07T20:15:00",
      type: "info",
    },
    {
      title: "Sosial mingling før quiz",
      title_en: "Thanks",
      description:
        "Imens friByte og andre frivillige rydder, kan resten mingle og vente på quiz.",
      description_en:
        "Thank you for coming, those who wanna participate in the quiz stays behind!",
      image: "TODO: path to some image in static dir",
      from: "2024-11-07T20:15:00",
      to: "2024-11-07T20:30:00",
      type: "break",
    },
    {
      title: "Pubkviss",
      title_en: "Pubquiz",
      description:
        "I tradisjon tro blir det en god gammeldags quiz sesjon. Denne gang om foredragene holdt i løpet av kvelden samt IT-relaterte spørsmål!",
      description_en:
        "As tradition dictates, there will be a good old-fashioned quiz session. This time about the talks given during the conference as well as IT-related questions.",
      image: "TODO: path to some image in static dir",
      from: "2024-11-07T20:30:00",
      to: "2024-11-07T21:30:00",
      type: "info",
    },
    {
      title: "Kvelden ferdig",
      title_en: "The evening is finished",
      description: "Håper du hadde en fin kveld og likte årets konferanse :)",
      description_en:
        "We hope you had a nice evening and liked this years iteration of the conference :)",
      image: "TODO: path to some image in static dir",
      from: "2024-11-07T21:30:00",
      to: "",
      type: "info",
    },
  ],
  sponsors: [
    {
      name: "Kantega",
      logo: "/sponsors/kantega.svg",
      url: "https://www.kantega.no/",
    },
    {
      name: "NAV IT",
      logo: "/sponsors/nav.svg",
      url: "https://www.detsombetyrnoe.no/",
    },
    {
      name: "Variant",
      logo: "/sponsors/variant.svg",
      url: "https://www.variant.no/",
    },
    {
      name: "TietoEvry",
      logo: "/sponsors/tietoevry.svg",
      url: "https://www.tietoevry.com/",
    },
  ],
};

export default program2024;
